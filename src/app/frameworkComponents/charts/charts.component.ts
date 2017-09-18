import { Component, OnInit, EventEmitter, AfterViewInit, OnDestroy, Output, Input } from '@angular/core';
import { GlobalDataService } from '../../_services/globaldata.service';

declare var $:any, Chart:any, window:any;
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterViewInit, OnDestroy {
  chartID:string;
  isFullScreen: boolean = false;
  periode: string = '-30';
  @Input() chartConfig:any;
  @Output() onChartInit = new EventEmitter<any>();
  @Output() onStopIteration = new EventEmitter<any>();
  @Output() onStartDateOfDataSeries = new EventEmitter<any>();
  @Output() onPeriodeChange = new EventEmitter<any>();
  @Output() onTriggerDownload = new EventEmitter<any>();
  
  colors: any = {
    red: "rgb(255, 99, 132)",
    blue: "rgb(54, 162, 235)",
    green: "rgb(75, 192, 192)",
    grey: "rgb(201, 203, 207)",
    orange: "rgb(255, 159, 64)",
    purple: "rgb(153, 102, 255)",
    yellow: "rgb(255, 205, 86)"
  }
  colorNames = Object.keys(this.colors);
  configuration:any;
  ctx:any;

  constructor(public gds: GlobalDataService) { }

  uuidv4() {
    return 'xxxxxyxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  ngOnInit(){
    this.chartID = 'chart-'+this.uuidv4();
    $('[data-toggle="tooltip"]').tooltip();
  }
  ngAfterViewInit() {
    $('.'+this.chartID+'-container').append( $('<canvas id='+this.chartID+' style="height:95vh; width:100vw;"></canvas>') );
    this.config(this.chartConfig);
    this.onChartInit.emit(this.chartID);
  }

  ngOnDestroy(){
    clearInterval(this.gds.chartsObj[this.chartID + '-Iteration']);
    this.gds.chartsObj[this.chartID].clear();
    this.gds.chartsObj[this.chartID].destroy();
    try{
      delete this.gds.chartsObj[this.chartID];
    }catch(e){
      this.gds.chartsObj[this.chartID] = undefined;
    }    
  }
  
  randomRGBColor(){
    return 'rgb('+[Math.floor(Math.random()*250), Math.floor(Math.random()*250), Math.floor(Math.random()*250) ].join()+')';
  }
  basicColors(){
    if(this.colorNames.length == 0){
      return this.randomRGBColor();
    }
    let randomNum = Math.floor(Math.random()*(this.colorNames.length-1)),
        randomColorName = this.colorNames[ randomNum ];
    this.colorNames.splice(randomNum,1);
    return randomColorName;
  }
  config(config) {
    for (let i = 0; i < config.data.datasets.length; i++) {
      let color = this.basicColors();
      config.data.datasets[i]['backgroundColor'] = color;
      config.data.datasets[i]['borderColor'] = color;
      config.data.datasets[i]['fill'] = false;
      config.data.datasets[i]['spanGaps'] =  false;
      config.data.datasets[i]['radius'] =  0;
    };
    this.configuration = {
      type: 'line',
      data: {
        labels: config.data.labels,
        datasets: config.data.datasets || [window.randomScalingFactor(), window.randomScalingFactor(), window.randomScalingFactor()]
      },
      options: {
        animation: false,
        responsive: true,
        title: {
          display: true,
          text: config.chartTitle || 'Liner Chart Measurement'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            // Specific to Bar Controller
            categoryPercentage: 0.8,
            barPercentage: 0.9,

            // grid line settings
            gridLines: {
              offsetGridLines: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Time Scale'
            }
          }],
          yAxes: [{
            display: true,
            stacked: false,
            scaleLabel: {
              display: true,
              labelString: 'Value Scale'
            },
            ticks: {
              min: 0, // it is for ignoring negative step.
              beginAtZero: true,
              // forces step size to be 5 units
              stepSize: config.YStepSize || 10,
              callback: function(tickValue, index, ticks){
                if(!(index %  parseInt( (ticks.length/15).toString() ) )) {
                  return Math.floor(tickValue);
                }
              },
            }
          }]
        },
        pan: {
					enabled: true,
					mode: config.zoom || 'xy',
					limits: {
						xmin: 1e-4,
						ymin: -50,
						ymax: 10
					},
					xScale0: {
						max: 1e4
					}
				},
				zoom: {
          enabled: true,
          drag: true,
					mode: config.zoom || 'xy',
					// limits: {
					// 	max: 10,
					// 	min: 0.5
          // },
          // rangeMin: {
          //     // Format of min zoom range depends on scale type
          //     x: null,
          //     y: null
          // },
          // rangeMax: {
          //     // Format of max zoom range depends on scale type
          //     x: null,
          //     y: null
          // }
        }


        


        
      }
    };    
    this.drowChart();
  }

  drowChart() {
    this.ctx = $('#' + this.chartID).get(0).getContext('2d');
    let showAvarage = true;
    this.gds.chartsObj[this.chartID] = new Chart(this.ctx, this.configuration);
    
    // Define a plugin to provide data labels
    Chart.plugins.register({
      beforeDraw: (chart)=>{        
        this.ctx.fillStyle = "#FFF";
        this.ctx.fillRect(0, 0, chart.width, chart.height);
      }
      // ,
      // afterDatasetsDraw: (chart, easing) => {
      //   if(showAvarage){
      //   // To only draw at the end of animation, check for easing === 1
      //   let datasets = chart.data.datasets,ctx = this.ctx,
      //       fontSize = 12,
      //       fontStyle = 'normal',
      //       fontFamily = 'Helvetica Neue';
      //   ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

      //   for (let x = 0; x < datasets.length; x++) {
      //     let meta = chart.getDatasetMeta(x);          
      //     if (!meta.hidden) {
      //       if(meta.data.length <= 30){
      //         for (let index = 0; index < meta.data.length; index++) {
      //           // Draw the text in black, with the specified font
      //           // Just naively convert to string for now
      //           let dataString = (datasets[x].data[index] != null || datasets[x].data[index] != undefined) ?
      //           datasets[x].data[index].toString(): 'Undefined';
      //           // Make sure alignment settings are correct
      //           ctx.textAlign = 'center';
      //           ctx.textBaseline = 'middle';
      //           let padding = 5, position = meta.data[index].tooltipPosition();
      //           if(position.x <= chart.chartArea.right && position.x >= chart.chartArea.left && position.y >= chart.chartArea.top && position.y <= chart.chartArea.bottom+10){
      //             (meta.data.length-1 == index) ?
      //               ctx.fillText(dataString, position.x-5, position.y-15 - (fontSize / 2) - padding):
      //               ctx.fillText(dataString, position.x+5, position.y - (fontSize / 2) - padding);
      //           }
      //         }
      //       }
      //     }
      //   }
      //   // if(showAvarage){          
      //     let canvasWidth = chart.width,
      //         canvasHeight = chart.height;
      //     ctx.fillText("Test writing on Canvas", chart.chartArea.right-100, chart.chartArea.top+20 );
      //   }

      // }
    });

  }

  onDatePickerChanged(date){
    this.onStartDateOfDataSeries.emit(date);
  }
  onChangePeriode(e){
    this.onPeriodeChange.emit(e.target.value);
  }
  defaultZoom(){
    this.gds.chartsObj[this.chartID].resetZoom();
  }
  getBase64Image(){
    let ancher = document.createElement('a');
    ancher.href = this.gds.chartsObj[this.chartID].toBase64Image();
    ancher.download = this.chartID+'.png';
    ancher.click();
    ancher = undefined;
  }
  triggerDownloadDatasets(e){
    let a = document.createElement('a'),
        data = ','+this.gds.chartsObj[this.chartID].data.labels.concat(",")+'\n',
        blob,url;
    for(let i =0 ; i < this.gds.chartsObj[this.chartID].data.datasets.length; i++){
      data += this.gds.chartsObj[this.chartID].data.datasets[i].label+','+this.gds.chartsObj[this.chartID].data.datasets[i].data.concat(',')+'\n';
    }
    blob = new Blob(["\ufeff",data], {type: "text/plain"}),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = this.configuration.options.title.text+'.csv';
    a.click()    
    return false;
  }
  fullScreen(chartIdBody){    
    if(!this.isFullScreen){
      $('.'+chartIdBody).css({
        position: "fixed",
        zIndex: '9999',
        background: "#fff"
      }).find('.zoomingMode').removeClass('fa-arrows-alt').addClass('fa-compress');
      $('.'+chartIdBody).animate({
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
      }, 300);
      this.isFullScreen = !this.isFullScreen;
    }else{
      $('.'+chartIdBody).css({
        position: "static",
        top: "auto",
        left: "auto",
        width: "auto",
        height: "auto",
        zIndex: 'auto',
        background: "#fff"
      }).find('.zoomingMode').removeClass('fa-compress').addClass('fa-arrows-alt');
      this.isFullScreen = !this.isFullScreen;      
    }
    
  }
  ClearIteration(ev){
    this.onStopIteration.emit(this.gds.chartsObj[this.chartID+'-Iteration']);
    return false;
  }

}
