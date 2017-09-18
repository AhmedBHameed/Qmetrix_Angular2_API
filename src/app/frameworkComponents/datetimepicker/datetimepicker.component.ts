import { Component, EventEmitter, OnInit, Input, Output, AfterViewInit, OnDestroy } from '@angular/core';

declare var $:any,moment:any;
@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css']
})
export class DatetimepickerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() classid;
  @Output() onDatePickerChange = new EventEmitter<any>();
  dp: any;
  constructor() { }

  ngOnInit() {  }
  ngAfterViewInit(){
    this.dp = $('#'+this.classid+'-datepicker').datetimepicker({
      format: "DD-MMM-YYYY HH:mm"
    });
    this.dp.on("dp.hide", (e)=>{
      this.onDatePickerChange.emit(e.date);
    });
  }
  ngOnDestroy(){
    this.dp.data("DateTimePicker").destroy();
  }

}
