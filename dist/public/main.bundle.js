webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/_functions/backendurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
// export var URL = "https://poc.mydatanet.at/";
// export var URL = "https://poc.mydatanet.at/";
var URL = "https://3iot.drei.at/";
// export var URL = "https://filemanagerbackend.herokuapp.com/public/"; 
//# sourceMappingURL=backendurl.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/forms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsService = (function () {
    function FormsService(fb) {
        this.fb = fb;
        this.form = {};
    }
    FormsService.prototype.build = function (obj) {
        return this.fb.group(obj);
    };
    FormsService.prototype.group = function (object) {
        if (typeof object != 'object') {
            throw new Error('Invalid object. form can\'t be build');
        }
        for (var field in object) {
            if (Array.isArray(object[field]['validators'])) {
                this.form[object[field]["key"]] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](object[field]['defaultValue'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose(object[field]['validators']));
            }
            else {
                this.form[object[field]["key"]] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](object[field]['defaultValue']);
            }
        }
        return this.build(this.form);
    };
    FormsService.prototype.set = function (object, updatedForm) {
        if (updatedForm === void 0) { updatedForm = null; }
        if (typeof object != 'object') {
            throw new Error('Invalid object. form can\'t be update');
        }
        if (typeof updatedForm != null) {
            for (var field in updatedForm) {
                object.controls[updatedForm[field]["key"]].setValue(updatedForm[field]['defaultValue']);
            }
        }
        return object;
    };
    FormsService.prototype.update = function (object, updatedForm) {
        if (updatedForm === void 0) { updatedForm = null; }
        if (typeof object != 'object') {
            throw new Error('Invalid object. form can\'t be update');
        }
        if (Array.isArray(updatedForm)) {
            if (typeof updatedForm != null) {
                for (var field in updatedForm) {
                    object.controls[updatedForm[field]["key"]].patchValue(updatedForm[field]['defaultValue']);
                }
            }
        }
        else {
            object.controls[updatedForm["key"]].patchValue(updatedForm['defaultValue']);
        }
        return object;
    };
    FormsService.prototype.reset = function (object) {
        if (typeof object != 'object') {
            throw new Error('Invalid object. form faild to reset!');
        }
        object.reset();
        return object;
    };
    return FormsService;
}());
FormsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], FormsService);

var _a;
//# sourceMappingURL=forms.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/forms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_service__ = __webpack_require__("../../../../../src/app/_services/_functions/forms.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__forms_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_service__ = __webpack_require__("../../../../../src/app/_services/_functions/validators.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__validators_service__["a"]; });


//# sourceMappingURL=forms.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/functions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backendurl__ = __webpack_require__("../../../../../src/app/_services/_functions/backendurl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FunctionsService = (function () {
    function FunctionsService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__backendurl__["a" /* URL */];
    }
    FunctionsService.prototype.notify = function (data) {
        $.notify({
            // options
            icon: data.icon,
            title: "<b>" + data.title + "</b>",
            message: data.message,
            url: data.url || null,
            target: data.target || null
        }, {
            // settings
            element: 'body',
            position: null,
            type: data.type,
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "bottom",
                align: "left"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: 'pause',
            animate: {
                enter: 'animated fadeInUp',
                exit: 'animated fadeOutDown'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span></br> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    FunctionsService.prototype.delay = function (callback, time) {
        if (time === void 0) { time = 1000; }
        if (typeof callback == 'function') {
            window.setTimeout(callback, time);
        }
        else {
            throw new Error('Delay parameters must be ( Callback function, number of Delay in ms)');
        }
    };
    ;
    FunctionsService.prototype.makeRequest = function (page, type, data) {
        if (page === void 0) { page = null; }
        if (type === void 0) { type = null; }
        if (data === void 0) { data = null; }
        // let params: URLSearchParams = new URLSearchParams();
        // params.set('json', data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](), opt;
        header.append("Authorization", "Basic " + this.getToken());
        if (type == "Post") {
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/json");
            opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({
                headers: header,
                url: this.url + page,
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */][type],
                body: JSON.stringify(data)
                // search: params
            });
        }
        if (type == "Get") {
            header.append("Accept", "application/json");
            opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({
                headers: header,
                url: this.url + page,
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */][type]
            });
        }
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Request */](opt));
    };
    // private makeRequestJsonp(page=null, data=null){ // this is jsonp request
    //     let header = new Headers(), opt;
    //     header.append("Accept", "application/json");
    //   header.append('X-CSRF-Token', localStorage.getItem('token'));
    //       opt = new RequestOptions({headers: header,
    //                                       url: this.url+page+'/cb=JSONP_CALLBACK',
    //                                       method: RequestMethod.Get,
    //                                     });
    //     return this.jsonp.request(new Request(opt));
    //   }
    //   test(){
    //     return this.makeRequestJsonp('adcanaccesstwo', {"token":localStorage.getItem('token')});
    // }
    FunctionsService.prototype.getToken = function () {
        var token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
        if (typeof token == 'string') {
            return token;
        }
        else {
            throw new Error('Invalid token!');
        }
    };
    FunctionsService.prototype.chooseImage = function (e, def) {
        var base64 = null;
        if (e.target.files && e.target.files[0] && e.target.files.length > 0) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            return new Promise(function (resolve, reject) {
                reader.onload = function (e) {
                    base64 = e.target['result'];
                    resolve(base64);
                };
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                resolve(def);
            });
        }
    };
    FunctionsService.prototype.trimData = function (data, options) {
        var optArray;
        if (typeof options == 'object') {
            optArray = Object.keys(options);
        }
        ;
        if (Array.isArray(data)) {
            for (var index in data) {
                for (var item in data[index]) {
                    if (optArray.indexOf(item) > -1) {
                        data[index][item] = data[index][item].substr(0, options[item]) + ' ...';
                    }
                    else {
                        data[index][item] = data[index][item];
                    }
                }
            }
        }
        else {
            return data;
        }
        console.log(data);
        return data;
    };
    FunctionsService.prototype.getIndex = function (arrayObject, ofRow) {
        if (typeof arrayObject != 'object') {
            throw new Error('Invalid object. search index should be in object only');
        }
        for (var i = 0; i < arrayObject.length; i++) {
            for (var key in arrayObject[i]) {
                if (!ofRow.hasOwnProperty(key))
                    continue;
                if (arrayObject[i][key] == ofRow[key]) {
                    return i;
                }
            }
        }
        return null;
    };
    FunctionsService.prototype.getTimeDifferenceInUTC = function (dateNow, timeDiff, unit) {
        if (timeDiff === void 0) { timeDiff = null; }
        if (unit === void 0) { unit = 'minutes'; }
        if (timeDiff) {
            return window.moment(dateNow).subtract(timeDiff * -1, unit).utc().format("YYYYMMDDHHmmssSSS");
        }
        else {
            return window.moment(dateNow).utc().format("YYYYMMDDHHmmssSSS");
        }
    };
    FunctionsService.prototype.seperateUTCTime = function (time) {
        if (!time) {
            throw new Error("Invalid UTC time from server");
        }
        var yyyy = time.substr(0, 4), mm = time.substr(4, 2), dd = time.substr(6, 2), HH = time.substr(8, 2), MM = time.substr(10, 2), SS = time.substr(12, 2), mill = time.substr(14);
        return (window.moment.utc(yyyy + '-' + mm + '-' + dd + ' ' + HH + ':' + MM + ':' + SS + ':' + mill, 'YYYY-MM-DD HH:mm:ss SSS'))
            .local().format('DD-MMM-YY HH:mm:ss');
    };
    FunctionsService.prototype.flatten = function (arr) {
        var newArr = [], allDates = [];
        if (Array.isArray(arr)) {
            var len = arr[0].length;
            for (var i = 0; i < len; i++) {
                if (i != 0) {
                    newArr[i - 1] = [];
                }
                for (var y = 0; y < arr.length; y++) {
                    if (i == 0) {
                        allDates.push(this.seperateUTCTime(arr[y][i]));
                    }
                    else {
                        newArr[i - 1].push(arr[y][i]);
                    }
                }
            }
        }
        return [allDates, newArr];
    };
    return FunctionsService;
}());
FunctionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FunctionsService);

var _a;
//# sourceMappingURL=functions.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/validators.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorsService; });
var ValidatorsService = (function () {
    function ValidatorsService() {
    }
    ValidatorsService.maxLength = function (max) {
        return function (c) {
            return (c.value.length >= max) ? { "Max length exceeded": false } : null;
        };
    };
    ValidatorsService.minLength = function (min) {
        return function (c) {
            return (c.value.length >= min) ? null : { "Minimum length exceeded": false };
        };
    };
    ValidatorsService.required = function () {
        return function (c) {
            return (c.value.length) ? null : { "valid": false };
        };
    };
    return ValidatorsService;
}());

//# sourceMappingURL=validators.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(funs, router) {
        this.funs = funs;
        this.router = router;
    }
    AuthService.prototype.cash = function (key, data, isPermanent) {
        if (isPermanent === void 0) { isPermanent = false; }
        if (isPermanent) {
            window.localStorage.setItem(key, data);
        }
        else {
            window.sessionStorage.setItem(key, data);
        }
    };
    AuthService.prototype.clearCash = function () {
        window.localStorage.clear();
        window.sessionStorage.clear();
    };
    AuthService.prototype.getCashedOf = function (key) {
        return window.localStorage.getItem(key) || window.sessionStorage.getItem(key);
        // try{
        //   data = JSON.parse( data );
        // }catch(e){
        //   console.log(e);
        // }
        // if(typeof data == undefined){
        //   return false
        // }else{
        //   return data;
        // }
    };
    // resetCashedToken():any {
    //   let token = this.getCashedOf('token');
    //   this.clearCash();
    //   if(typeof token != undefined && token != null){
    //     return token;
    //   }else{
    //     this.router.navigate(['login']);
    //     return false;
    //   }
    // }
    AuthService.prototype.login = function (data) {
        this.cash("token", btoa(data['username'] + ':' + data['password']), data.checkbox);
        return this.funs.makeRequest("api/1/me", "Get");
    };
    AuthService.prototype.getLoginData = function () {
        return this.funs.makeRequest("api/1/me", "Get");
    };
    AuthService.prototype.logout = function () {
        // document.cookie = "geercmssystem="+document.cookie.replace('geercmssystem=','')+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        // clearInterval(this.tokenLoop);
        this.clearCash();
        this.router.navigate(['login']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/globaldata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalDataService = (function () {
    function GlobalDataService() {
        this.qmetrixData = {};
        this.objects_of_ids = {
            customer_id: null,
            site_id: null
        };
        this.chartsObj = {};
    }
    GlobalDataService.prototype.pushToQmetrixData = function (key, data) {
        this.qmetrixData[key] = data;
    };
    GlobalDataService.prototype.getFromQmetrixData = function (arrgument, theObject) {
        if (arrgument === void 0) { arrgument = null; }
        if (theObject === void 0) { theObject = this.qmetrixData; }
        if (arrgument == null || arrgument == '')
            return theObject;
        var result = null, obj = {}, args = arrgument.split('/');
        if (args[0] == "") {
            return theObject;
        }
        if (theObject instanceof Array) {
            for (var i = 0; i < theObject.length; i++) {
                if (Object.keys(theObject).indexOf(args[0]) > -1) {
                    args.splice(0, 1);
                    result = this.getFromQmetrixData(args.join('/'), theObject[i]);
                }
                else {
                    result = this.getFromQmetrixData(args.join('/'), theObject[i]);
                }
            }
        }
        else if (args[0] && args[0].charAt(0) == '!') {
            // debugger;
            var newArg = args[0].slice(1);
            for (var key in theObject) {
                if (!~key.indexOf(newArg)) {
                    obj[key] = theObject[key];
                }
            }
            return obj;
        }
        else {
            for (var key in theObject) {
                if (key == args[0]) {
                    args.splice(0, 1);
                    result = this.getFromQmetrixData(args.join('/'), theObject[key]);
                }
            }
        }
        return result;
    };
    return GlobalDataService;
}());
GlobalDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalDataService);

//# sourceMappingURL=globaldata.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsService = (function () {
    function RequestsService(funs) {
        this.funs = funs;
        this.globalVariable = null;
    }
    RequestsService.prototype.getCustomer = function () {
        return this.funs.makeRequest('api/1/customers', 'Get');
    };
    RequestsService.prototype.getSitesData = function (customerID) {
        return this.funs.makeRequest("api/1/customers/" + customerID + "/sites", 'Get');
    };
    RequestsService.prototype.sendNotification = function ($CID, type, data) {
        return this.funs.makeRequest("api/1/customers/" + $CID + "/cn-send" + type, "Post", data);
    };
    RequestsService.prototype.getSiteBluePrint = function ($CID, $SID) {
        return this.funs.makeRequest("api/1/customers/" + $CID + "/sites/" + $SID + "/blueprint", 'Get');
    };
    RequestsService.prototype.getTimeWindowWithRawValues = function ($CID, $SID, query) {
        return this.funs.makeRequest("api/1/customers/" + $CID + "/sites/" + $SID + "/histdata0?json=" + JSON.stringify(query), 'Get');
    };
    RequestsService.prototype.lastMeasurements = function ($CID, $SID, query) {
        return this.funs.makeRequest("api//1/customers/" + $CID + "/sites/" + $SID + "/histdata0/youngest?json=" + JSON.stringify(query), 'Get');
    };
    return RequestsService;
}());
RequestsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */]) === "function" && _a || Object])
], RequestsService);

var _a;
//# sourceMappingURL=requests.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        console.clear();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__ = __webpack_require__("../../../../../src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cp_cp_component__ = __webpack_require__("../../../../../src/app/components/cp/cp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cp_reports_reports_component__ = __webpack_require__("../../../../../src/app/components/cp/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_error404_error404_component__ = __webpack_require__("../../../../../src/app/components/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_cp_sendnotification_sendnotification_component__ = __webpack_require__("../../../../../src/app/components/cp/sendnotification/sendnotification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cp_management_management_component__ = __webpack_require__("../../../../../src/app/components/cp/management/management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__frameworkComponents_tagsinput_tagsinput_component__ = __webpack_require__("../../../../../src/app/frameworkComponents/tagsinput/tagsinput.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__frameworkComponents_tinymce_tinymce_component__ = __webpack_require__("../../../../../src/app/frameworkComponents/tinymce/tinymce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__frameworkComponents_charts_charts_component__ = __webpack_require__("../../../../../src/app/frameworkComponents/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__frameworkComponents_datetimepicker_datetimepicker_component__ = __webpack_require__("../../../../../src/app/frameworkComponents/datetimepicker/datetimepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__frameworkComponents_measurement_units_measurement_units_component__ = __webpack_require__("../../../../../src/app/frameworkComponents/measurement-units/measurement-units.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Framework Items





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__["a" /* LandingpageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_cp_cp_component__["a" /* CpComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_cp_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_error404_error404_component__["a" /* Error404Component */],
            __WEBPACK_IMPORTED_MODULE_12__components_cp_sendnotification_sendnotification_component__["a" /* SendnotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__frameworkComponents_tagsinput_tagsinput_component__["a" /* TagsinputComponent */],
            __WEBPACK_IMPORTED_MODULE_15__frameworkComponents_tinymce_tinymce_component__["a" /* TinymceComponent */],
            __WEBPACK_IMPORTED_MODULE_16__frameworkComponents_charts_charts_component__["a" /* ChartsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__frameworkComponents_datetimepicker_datetimepicker_component__["a" /* DatetimepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_cp_management_management_component__["a" /* ManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_18__frameworkComponents_measurement_units_measurement_units_component__["a" /* MeasurementUnitsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTES_PROVIDER */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_landingpage_landingpage_component__ = __webpack_require__("../../../../../src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cp_cp_component__ = __webpack_require__("../../../../../src/app/components/cp/cp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cp_reports_reports_component__ = __webpack_require__("../../../../../src/app/components/cp/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_error404_error404_component__ = __webpack_require__("../../../../../src/app/components/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cp_sendnotification_sendnotification_component__ = __webpack_require__("../../../../../src/app/components/cp/sendnotification/sendnotification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cp_management_management_component__ = __webpack_require__("../../../../../src/app/components/cp/management/management.component.ts");








var myTitle = 'Qmetrix-';
var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_landingpage_landingpage_component__["a" /* LandingpageComponent */], data: { title: myTitle + "Landing Page" } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */], data: { title: myTitle + "Login" } },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_cp_cp_component__["a" /* CpComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_cp_management_management_component__["a" /* ManagementComponent */], data: { title: myTitle + "Management" } },
            { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_4__components_cp_reports_reports_component__["a" /* ReportsComponent */], data: { title: myTitle + "Reports" } },
            { path: 'sendnotification', component: __WEBPACK_IMPORTED_MODULE_6__components_cp_sendnotification_sendnotification_component__["a" /* SendnotificationComponent */], data: { title: myTitle + "Send Notification" } }
        ] },
    // {path: '', component: IndexComponent, data: { breadcrumb: 'Home'}, children: [
    //       {path: '', component: HomeComponent, data: { title: 'Home Page' }},
    //       {path: 'category/:cat', component: CategoryComponent, data: { breadcrumb: 'Categories'}, children: [
    //         {path: '', component: AllcategoriesComponent, data: { title: 'Categoies Page' }},
    //         {path: 'post/:id', component: PostComponent, data: { breadcrumb: 'Post'}, children: [
    //           {path: '', component: GetpostComponent}
    //         ]}
    //       ]},
    //       {path: 'post/:id', component: PostComponent, data: { breadcrumb: 'Hot Posts'}, children: [
    //           {path: '', component: GetpostComponent }
    //       ]},
    //       {path: 'profile/:id', component: ProfileComponent},
    //       {path: 'signin', component: RegesterComponent, data: { title: 'GEER: New Registeration' } }
    //     ]},
    // {path: 'admin', component: AdIndexComponent, children: [
    //   {path: '', component: AdHomeComponent, data: { title: 'Admin-Home'}},
    //   {path: 'settings', component: AdSettingComponent, data: { title: 'Admin-Settings'}},
    //   {path: 'categories', component: AdCategoriesComponent, data: { title: 'Admin-Settings'}},
    //   {path: 'addartical', component: AdAddarticalComponent, data: { title: 'Admin-Add Artical'}},
    //   {path: 'allarticals', component: AdAllarticalsComponent, data: { title: 'Admin-All Artical'}}
    // ]},
    // {path: 'login', component: LogginComponent },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__components_error404_error404_component__["a" /* Error404Component */], data: { title: myTitle + "Page not found" } }
];
var APP_ROUTES_PROVIDER = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/cp/cp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cp/cp.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"navigation\">\r\n      <div class=\"nav-brand-title\">\r\n        <div class=\"content-center\">\r\n          <div class=\"brand\">\r\n            <a [routerLink]=\"['']\">\r\n                                  <img alt=\"Brand\" src=\"../../../../assets/img/logo/logo.png\">  \r\n                            </a>\r\n          </div>\r\n          <!-- <div class=\"caption\">\r\n            <a [routerLink]=\"['']\" target=\"_blank\"></a>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"menu-items\">\r\n        <div class=\"hamburger\">\r\n          <a href=\"#\">\r\n                            <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n        </div>\r\n        <div class=\"welcome\" *ngIf=\"isLoaded\">\r\n          <span>Welcome&nbsp;,&nbsp;</span><span class=\"caption\">{{userData.name}}</span>\r\n        </div>\r\n        <div class=\"bg-brightness\"></div>\r\n      </div>\r\n      <div class=\"fixed-menu\">\r\n        <h3>Navigation</h3>\r\n        <ul>\r\n          <li><a [routerLink]=\"['']\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Management</a></li>\r\n          \r\n          <li *ngIf=\"gds.objects_of_ids.site_id\"><a [routerLink]=\"['', 'reports']\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Reports</a></li>\r\n          <li *ngIf=\"gds.objects_of_ids.customer_id\"><a [routerLink]=\"['', 'sendnotification']\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Send Notification</a></li>\r\n          <li><a href=\"#logout\" (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a></li>\r\n          <!-- <li><a [routerLink]=\"['', 'admin', 'settings']\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Settings</a></li>\r\n          <li><a [routerLink]=\"['', 'admin', 'categories']\"><i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i> Categories</a></li>\r\n          <li><a [routerLink]=\"['', 'admin', 'addartical']\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Add artical</a></li>\r\n          <li><a [routerLink]=\"['', 'admin', 'allarticals']\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Articals</a></li> -->\r\n          <!-- <li><a href=\"\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> Mumbers</a></li>\r\n          <li><a href=\"\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> Commants</a></li>\r\n          <li><a href=\"\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i> Personal Profile</a></li>\r\n          <li class=\"dropdown\"><a href=\"#\"><span class=\"triangle\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Settings</span></a></li>\r\n          <ul class=\"menu-list\">\r\n            <li><a [routerLink]=\"['','login']\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out</a></li>\r\n          </ul> -->\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"clearfix\"></div>\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/cp/cp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CpComponent = (function () {
    function CpComponent(req, funs, auth, router, gds) {
        this.req = req;
        this.funs = funs;
        this.auth = auth;
        this.router = router;
        this.gds = gds;
        this.isLoaded = false;
    }
    CpComponent.prototype.ngOnInit = function () {
        this.navBar = $('.navbar .navigation .hamburger a');
        this.burgger = $('.navbar .navigation .fixed-menu');
        this.bg = $('.navbar .bg-brightness');
        var token = this.auth.getCashedOf('token');
        if (token) {
            this.getUser();
        }
        else {
            this.router.navigate(['login']);
        }
    };
    CpComponent.prototype.getUser = function () {
        var _this = this;
        this.userData = this.gds.getFromQmetrixData('userLogin');
        if (this.userData != null) {
            this.userData = this.gds.getFromQmetrixData('userLogin/user');
            this.isLoaded = true;
        }
        else {
            this.auth.getLoginData().subscribe(function (res) {
                var response = res.json();
                _this.funs.notify({
                    type: 'success',
                    icon: 'fa fa-flag',
                    title: 'Login Status',
                    message: "Welcome, <i>" + response.user.name + "</i>"
                });
                _this.gds.pushToQmetrixData("userLogin", response);
                _this.userData = _this.gds.getFromQmetrixData('userLogin/user');
                _this.isLoaded = true;
            }, function (err) {
                window.localStorage.clear();
                window.sessionStorage.clear();
                if (err.json().err != null) {
                    _this.funs.notify({
                        type: 'danger',
                        icon: 'fa fa-exclamation-triangle',
                        title: 'Errer',
                        message: err.json().err
                    });
                }
                _this.router.navigate(['', 'login']);
            });
        }
    };
    CpComponent.prototype.logout = function () {
        this.router.navigate(['login']);
        return false;
    };
    CpComponent.prototype.onClick = function (e) {
        e.stopPropagation();
        var el = $(e.target || e.touches[0].target);
        if (el.is('.navigation .hamburger a i') || el.is('.navigation .hamburger a')) {
            if (!this.burgger.hasClass('in')) {
                this.showMenu();
                return false;
            }
            else if (this.burgger.hasClass('in')) {
                this.hide();
                return false;
            }
        }
        else {
            if (el.closest('.fixed-menu').is('.fixed-menu')) {
                if (el.is('.dropdown') || el.closest('.dropdown').is('.dropdown')) {
                    var menu = el.closest('.dropdown');
                    menu.find(' > .triangle').toggleClass('collapseList');
                    if (menu.next().is('.menu-list'))
                        menu.next().slideToggle();
                    return false;
                }
                else {
                    this.hide();
                }
            }
            else {
                this.hide();
            }
        }
    };
    CpComponent.prototype.showMenu = function () {
        this.burgger.removeClass('out').addClass('in');
        this.bg.fadeTo(300, 0.6);
        $('body').css({ margin: '0', height: "100%", overflow: "hidden" });
    };
    CpComponent.prototype.hide = function () {
        this.burgger.removeClass('in').addClass('out');
        this.bg.fadeOut(300);
        $('body').css({ margin: '0', height: "auto", overflow: "auto" });
    };
    return CpComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CpComponent.prototype, "onClick", null);
CpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cp',
        template: __webpack_require__("../../../../../src/app/components/cp/cp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cp/cp.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _e || Object])
], CpComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cp.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cp/management/management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cp/management/management.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-lg-12\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Management</div>\n        <div class=\"panel-body\" *ngIf=\"isLoaded\">\n            <form class=\"form-inline\" (ngSubmit)=\"onSubmit($event)\">\n                <div class=\"form-group\">\n                    <label for=\"cid\">$CID:&nbsp;</label>\n                    <select name=\"objects_of_ids.customer_id\" class=\"form-control\" id=\"cid\" [(ngModel)]=\"objects_of_ids.customer_id\" (change)=\"changeCustomerId()\">\n                        <option [ngValue]=\"null\" selected>Select $CID</option>\n                        <option *ngFor=\"let customer of customersData\" [ngValue]=\"customer.customer_id\">{{customer.customer_id}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sid\">$SID:&nbsp;</label>\n                    <select [disabled]=\"!objects_of_ids.customer_id\" name=\"objects_of_ids.site_id\" class=\"form-control\" id=\"sid\" [(ngModel)]=\"objects_of_ids.site_id\">\n                        <option [ngValue]=\"null\" selected>Select $SID</option>\n                        <option *ngFor=\"let site of sitesData\" [ngValue]=\"site.site_id\">{{site.name}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-xs-offset-1\">\n                    <input [disabled]=\"!objects_of_ids.site_id\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n            </form>\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div> -->\n\n<div class=\"col-lg-12\">\n    <div class=\"panel panel-primary\" *ngIf=\"isLoaded\">\n        <div class=\"panel-heading\">Management&nbsp;&nbsp;<small><i>{{customersData[0].customer_id}}</i></small></div>\n        <div class=\"panel-body\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr class=\"active\">\n                        <th>#</th>\n                        <th>Site ID</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let site of sitesData; let i = index\">\n                        <td>{{i+1}}</td>\n                        <td><a href=\"#\" (click)=\"goToReport(site)\">{{site.site_id}}</a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cp/management/management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagementComponent = (function () {
    function ManagementComponent(req, funs, auth, router, gds) {
        this.req = req;
        this.funs = funs;
        this.auth = auth;
        this.router = router;
        this.gds = gds;
        this.isLoaded = false;
    }
    ManagementComponent.prototype.ngOnInit = function () {
        this.objects_of_ids = this.gds.objects_of_ids;
        if (this.objects_of_ids.customer_id == null) {
            this.getCustomer();
        }
        else {
            this.customersData = this.gds.getFromQmetrixData('manageCustomers');
            this.sitesData = this.gds.getFromQmetrixData('customerSites');
            this.isLoaded = true;
        }
    };
    ManagementComponent.prototype.getCustomer = function () {
        var _this = this;
        this.req.getCustomer().subscribe(function (res) {
            _this.gds.pushToQmetrixData("manageCustomers", res.json());
            _this.customersData = _this.gds.getFromQmetrixData('manageCustomers');
            _this.getSitesData();
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json().err
            });
        });
    };
    // changeCustomerId(){
    //   if(this.objects_of_ids.customer_id != null){
    //     this.getSitesData();
    //   }else{
    //     this.sitesData = null;
    //     this.objects_of_ids.site_id = null;
    //   }
    // }
    ManagementComponent.prototype.getSitesData = function () {
        var _this = this;
        this.req.getSitesData(this.gds.getFromQmetrixData("manageCustomers/0/customer_id")).subscribe(function (res) {
            _this.gds.pushToQmetrixData("customerSites", res.json());
            _this.sitesData = _this.gds.getFromQmetrixData('customerSites');
            _this.objects_of_ids.customer_id = _this.customersData[0].customer_id;
            _this.isLoaded = true;
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json().err
            });
        });
    };
    // onSubmit(e){
    //   if(this.objects_of_ids.site_id != null){
    //     this.getSiteBluePrint();
    //   }
    //   return false;
    // }
    ManagementComponent.prototype.goToReport = function (site) {
        this.objects_of_ids.site_id = site.site_id;
        this.gds.objects_of_ids = this.objects_of_ids;
        this.getSiteBluePrint();
        return false;
    };
    ManagementComponent.prototype.getSiteBluePrint = function () {
        var _this = this;
        this.req.getSiteBluePrint(this.objects_of_ids.customer_id, this.objects_of_ids.site_id).subscribe(function (res) {
            _this.gds.pushToQmetrixData('siteBluePrint', res.json());
            _this.router.navigate(['reports']);
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json().err
            });
        });
    };
    return ManagementComponent;
}());
ManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-management',
        template: __webpack_require__("../../../../../src/app/components/cp/management/management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cp/management/management.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _e || Object])
], ManagementComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cp/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cp/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"gds.objects_of_ids.site_id\">\n    <!-- Default panel contents -->\n    <div class=\"panel-heading\">Reports</div>\n    <div class=\"panel-body\">\n      \n      \n\n\n        <div *ngIf=\"showUnitsMeasurement\" class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"panel panel-default\">\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                <h4 class=\"panel-title\">\n                    <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                - Last Measurement in UTC time\n                              </a>\n                </h4>\n            </div>\n            <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"panel-body\">\n                    <app-measurement-units [datasets]=\"datasets00\" [querySelect]=\"queryObj['select']\"></app-measurement-units>\n                </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-group\" id=\"accordion2\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"panel panel-default\">\n\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                  <h4 class=\"panel-title\">\n                      <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n                              - Flow chart\n                            </a>\n                  </h4>\n              </div>\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                  <div class=\"panel-body\">\n                      <div *ngIf=\"chart0Config.startShowUp\" class=\"col-xs-12\">\n                          <app-charts\n                            (onStartDateOfDataSeries)=\"onStartDateOfDataSeries($event)\"\n                            (onPeriodeChange)=\"onPeriodeOf($event)\"\n                            [chartConfig]=\"chart0Config\"\n                            (onChartInit)=\"setChart00ID($event)\"\n                            (onStopIteration)=\"stopChart00Iteration($event)\">\n                          </app-charts>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n\n\n\n\n\n      \n      <!-- <div class=\"col-xs-6\">\n        <app-charts\n          (onStartDateOfDataSeries)=\"onStartDateOfDataSeries($event)\"\n          (onPeriodeChange)=\"onPeriodeOf($event)\"\n          [chartConfig]=\"chart1Config\"\n          (onChartInit)=\"setChart01ID($event)\"\n          (onStopIteration)=\"stopChart01Iteration($event)\">\n        </app-charts>\n      </div> -->\n    </div>\n    <!-- <div class=\"clearfix\"></div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cp/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportsComponent = (function () {
    function ReportsComponent(funs, gds, ar, router, req) {
        this.funs = funs;
        this.gds = gds;
        this.ar = ar;
        this.router = router;
        this.req = req;
        this.data = null;
        this.showUnitsMeasurement = false;
        this.datasets00 = [];
        this.startDate = window.moment().local();
        this.forPeriodeOf = -30;
        this.queryObj = {};
    }
    ReportsComponent.prototype.ngOnInit = function () {
        if (typeof this.gds.objects_of_ids.customer_id != 'string' && typeof this.gds.objects_of_ids.site_id != 'string') {
            this.router.navigate(['']);
        }
        else {
            this.prepareBluePrintForRequest();
        }
    };
    ReportsComponent.prototype.prepareBluePrintForRequest = function () {
        var histDataX, ds = [], select = [];
        histDataX = this.gds.getFromQmetrixData("siteBluePrint/histdata0/!calc");
        for (var key in histDataX) {
            select.push(key);
            this.datasets00.push({ "label": histDataX[key].title + '-' + histDataX[key].units,
                "data": [null] });
            ds.push({ "label": histDataX[key].title + '-' + histDataX[key].units,
                "data": [null] });
        }
        this.queryObj["select"] = select;
        this.queryObj["from"] = this.funs.getTimeDifferenceInUTC(this.startDate, this.forPeriodeOf);
        this.queryObj["until"] = "*";
        this.showUnitsMeasurement = true;
        this.chart0Config = {
            startShowUp: true,
            min: 0,
            max: 70,
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: ds
            },
            chartTitle: 'Data Analysis',
            YStepSize: 10,
            zoom: 'xy'
        };
        // this.chart1Config = {
        //   labels: ["January", "February", "March", "April", "May", "June", "July"],
        //   min: 0,
        //   max: 70,
        //   datasets: [{
        //     label: "Temprature-CH0",
        //     data: [12, 19, 1, 2, 7,8, 0]
        //     }, {
        //       label: "Power-CH1",
        //       data: [2 , 2, 2, 4, 3, 6, 10]
        //     }, {
        //       label: "Voltage-CH2",
        //       data: [21, 45, 23, 44, 56, 12, 5]
        //     }, {
        //       label: "Watt-CH3",
        //       data: [70, 20, 50, 10, 30, 5, 0]
        //     }],
        //   chartTitle: 'Temprature & Humidity measurement',
        //   YStepSize: 10,
        //   zoom: 'y'
        // }
        this.bringData();
    };
    ReportsComponent.prototype.bringData = function () {
        var _this = this;
        this.req.getTimeWindowWithRawValues(this.gds.objects_of_ids.customer_id, this.gds.objects_of_ids.site_id, this.queryObj).subscribe(function (res) {
            _this.proccessData(res.json());
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json().err
            });
        });
    };
    ReportsComponent.prototype.proccessData = function (dataSeries) {
        this.stopChart00Iteration(null);
        this.gds.chartsObj[this.chart00ID].reset();
        var labels;
        if (dataSeries.length > 0) {
            var flattedDate = this.funs.flatten(dataSeries);
            this.gds.chartsObj[this.chart00ID].data.labels = flattedDate[0];
            for (var i = 0; i < this.gds.chartsObj[this.chart00ID].data.datasets.length; i++) {
                this.gds.chartsObj[this.chart00ID].data.datasets[i].data = flattedDate[1][i];
            }
            this.gds.chartsObj[this.chart00ID].update();
        }
        else {
            this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: "No data available at moment!"
            });
        }
    };
    ReportsComponent.prototype.onStartDateOfDataSeries = function (date) {
        this.startDate = date;
        this.queryObj["from"] = this.funs.getTimeDifferenceInUTC(this.startDate, this.forPeriodeOf);
        this.queryObj["until"] = this.funs.getTimeDifferenceInUTC(this.startDate);
        this.bringData();
    };
    ReportsComponent.prototype.onPeriodeOf = function (periode) {
        this.forPeriodeOf = parseInt(periode, 10);
        this.queryObj["from"] = this.funs.getTimeDifferenceInUTC(this.startDate, this.forPeriodeOf);
        this.queryObj["until"] = this.funs.getTimeDifferenceInUTC(this.startDate);
        console.log(this.queryObj);
        this.bringData();
        // this.gds.chartsObj[this.chart00ID].render(1000, false);
        // moment().startOf('week').toDate(); // start of the week
        // moment().endOf('week').toDate(); // end of the week
        // moment().local().toDate(); // current time
        // moment().subtract(1, 'days').startOf('day').toString(); // start of yesterday
        // moment().subtract(1, 'days').endOf('day').toString(); // end of yesterday
    };
    ReportsComponent.prototype.setChart00ID = function (id) {
        this.chart00ID = id;
        // this.bringData();    
    };
    ReportsComponent.prototype.setChart01ID = function (id) {
        this.chart01ID = id;
        this.bringData();
    };
    ReportsComponent.prototype.updateChart00 = function (label, data) {
        var _this = this;
        console.log(this.gds.getFromQmetrixData());
        if (!this.gds.chartsObj[this.chart00ID + '-Iteration']) {
            this.gds.chartsObj[this.chart00ID + '-Iteration'] = setInterval(function () {
                _this.gds.chartsObj[_this.chart00ID].data.labels.push(Math.round(Math.random() * 100).toString());
                for (var i = 0; i < _this.gds.chartsObj[_this.chart00ID].data.datasets.length; i++) {
                    _this.gds.chartsObj[_this.chart00ID].data.datasets[i].data.push(Math.round(Math.random() * 60));
                    _this.gds.chartsObj[_this.chart00ID].data.datasets[i].data.splice(0, 1);
                }
                _this.gds.chartsObj[_this.chart00ID].data.labels.splice(0, 1);
                _this.gds.chartsObj[_this.chart00ID].update();
            }, 2000);
        }
        else {
            console.log("00 Iteration called again!!!");
        }
    };
    ReportsComponent.prototype.updateChart01 = function (label, data) {
        var _this = this;
        if (!this.gds.chartsObj[this.chart01ID + '-Iteration']) {
            this.gds.chartsObj[this.chart01ID + '-Iteration'] = setInterval(function () {
                _this.gds.chartsObj[_this.chart01ID].data.labels.push(Math.round(Math.random() * 100).toString());
                for (var i = 0; i < _this.gds.chartsObj[_this.chart01ID].data.datasets.length; i++) {
                    _this.gds.chartsObj[_this.chart01ID].data.datasets[i].data.push(Math.round(Math.random() * 60));
                    _this.gds.chartsObj[_this.chart01ID].data.datasets[i].data.splice(0, 1);
                }
                _this.gds.chartsObj[_this.chart01ID].data.labels.splice(0, 1);
                _this.gds.chartsObj[_this.chart01ID].update();
            }, 2000);
        }
        else {
            console.log("01 Iteration called again!!!");
        }
    };
    ReportsComponent.prototype.stopChart00Iteration = function (ev) {
        if (!this.gds.chartsObj[this.chart00ID + '-Iteration']) {
            clearInterval(this.gds.chartsObj[this.chart00ID + '-Iteration']);
            this.gds.chartsObj[this.chart00ID + '-Iteration'] = null;
        }
    };
    ReportsComponent.prototype.stopChart01Iteration = function (ev) {
        if (!this.gds.chartsObj[this.chart01ID + '-Iteration']) {
            clearInterval(this.gds.chartsObj[this.chart01ID + '-Iteration']);
            this.gds.chartsObj[this.chart01ID + '-Iteration'] = null;
        }
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/components/cp/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cp/reports/reports.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_4__services_requests_service__["a" /* RequestsService */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_requests_service__["a" /* RequestsService */]) === "function" && _e || Object])
], ReportsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cp/sendnotification/sendnotification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cp/sendnotification/sendnotification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-danger\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\">Send Notification</div>\n  <div class=\"panel-body\" *ngIf=\"show\">\n    <form class=\"form-horizontal\" [formGroup]=\"notificationForm\" (ngSubmit)=\"send(notificationForm.value, notificationForm.valid)\">\n      \n      <div class=\"form-group\">\n        <label for=\"notType\" class=\"col-sm-2 control-label\">Type</label>\n        <div class=\"col-sm-4\">\n          <select class=\"form-control\" id=\"notType\" (change)=\"changeType($event.target.value)\">\n            <option value=\"sms\" selected>SMS</option>\n            <option value=\"mail\">Email</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"type == 'sms'\">\n        <label for=\"to\" class=\"col-sm-2 control-label\">Phone(s) Num</label>\n        <div class=\"col-sm-9\">\n           <tags-input [idname]=\"type\" (onAddingTags)=\"addContact($event)\"></tags-input> \n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"type == 'mail'\">\n        <label for=\"subject\" class=\"col-sm-2 control-label\">Email(s)</label>\n        <div class=\"col-sm-9\">\n           <tags-input [idname]=\"type\" (onAddingTags)=\"addContact($event)\"></tags-input> \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"subject\" class=\"col-sm-2 control-label\">Subject</label>\n        <div class=\"col-sm-9\">\n           <input formControlName=\"subject\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\">\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"type == 'mail'\">\n        <label for=\"body\" class=\"col-sm-2 control-label\">Message</label>\n        <div class=\"col-sm-9\">\n          <tinymce [content]=\"message_body\" (onEditorKeyup)=\"keyupHandlerFunction($event)\"></tinymce>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-9\">\n          <button type=\"submit\" class=\"btn btn-success\">Send</button>\n        </div>\n      </div>\n    </form>\n\n  </div>\n\n  <!-- Table -->\n  <!-- <table class=\"table\">\n    ...\n  </table> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cp/sendnotification/sendnotification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendnotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_functions_forms__ = __webpack_require__("../../../../../src/app/_services/_functions/forms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendnotificationComponent = (function () {
    function SendnotificationComponent(fs, req, funs, gds) {
        this.fs = fs;
        this.req = req;
        this.funs = funs;
        this.gds = gds;
        this.type = 'sms';
        this.classname = 'form-control';
        this.id = 'to';
        this.message_body = null;
        this.show = false;
    }
    SendnotificationComponent.prototype.ngOnInit = function () {
        this.notificationForm = this.fs.group([
            { "key": "receivers", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_1__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "subject", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_1__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "body", "defaultValue": "" }
        ]);
        this.show = true;
    };
    SendnotificationComponent.prototype.changeType = function (value) {
        this.type = value;
        this.notificationForm = this.fs.update(this.notificationForm, [
            { "key": "receivers", "defaultValue": "" },
            { "key": "subject", "defaultValue": "" },
            { "key": "body", "defaultValue": "" }
        ]);
    };
    SendnotificationComponent.prototype.addContact = function (arrayOfContacts) {
        if (arrayOfContacts.length > 0) {
            this.notificationForm = this.fs.update(this.notificationForm, [{ "key": "receivers", "defaultValue": arrayOfContacts }]);
        }
        else {
            this.notificationForm = this.fs.update(this.notificationForm, [{ "key": "receivers", "defaultValue": "" }]);
        }
    };
    SendnotificationComponent.prototype.keyupHandlerFunction = function (body) {
        this.notificationForm = this.fs.update(this.notificationForm, [{ "key": "body", "defaultValue": '<html>' + body + '</html>' }]);
    };
    SendnotificationComponent.prototype.send = function (data, isValid) {
        if (isValid) {
            if (this.gds.objects_of_ids.customer_id != null) {
                if (this.type == 'sms') {
                    try {
                        delete data.body;
                    }
                    catch (e) {
                        data["body"] = undefined;
                    }
                }
                this.proccedSending(data);
            }
            else {
                this.funs.notify({
                    type: 'danger',
                    icon: 'fa fa-exclamation-triangle',
                    title: 'Errer',
                    message: 'Please specify you CID first!'
                });
            }
        }
        // console.log(data, isValid);
    };
    SendnotificationComponent.prototype.proccedSending = function (data) {
        var _this = this;
        this.req.sendNotification(this.gds.objects_of_ids.customer_id, this.type, data).subscribe(function (res) {
            _this.funs.notify({
                type: 'success',
                icon: 'fa fa-flag',
                title: 'Message Status',
                message: res.json()
            });
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json().err
            });
        });
    };
    return SendnotificationComponent;
}());
SendnotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sendnotification',
        template: __webpack_require__("../../../../../src/app/components/cp/sendnotification/sendnotification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cp/sendnotification/sendnotification.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */], __WEBPACK_IMPORTED_MODULE_1__services_functions_forms__["a" /* FormsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_functions_forms__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_functions_forms__["a" /* FormsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _d || Object])
], SendnotificationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sendnotification.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/error404/error404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  error404 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/error404/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    return Error404Component;
}());
Error404Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error404',
        template: __webpack_require__("../../../../../src/app/components/error404/error404.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/error404/error404.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Error404Component);

//# sourceMappingURL=error404.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landingpage/landingpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landingpage/landingpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  landingpage works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/landingpage/landingpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingpageComponent = (function () {
    function LandingpageComponent() {
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    return LandingpageComponent;
}());
LandingpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landingpage',
        template: __webpack_require__("../../../../../src/app/components/landingpage/landingpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landingpage/landingpage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingpageComponent);

//# sourceMappingURL=landingpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12 text-center\">\n\n      <!--Start Login section-->\n      <div class=\"login\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Log In</h3>\n          </div>\n\n          <div class=\"panel-body\">\n            <div class=\"panel-body\">\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"loggin(loginForm.value, loginForm.valid)\" class=\"form-horizontal\" id=\"login\">\n\n                <div class=\"form-group\">\n                  <i class=\"fa fa-users fa-5x\"></i>\n\n                  <div class=\"clearfix margin-top\"></div>\n\n                  <label for=\"username\" class=\"col-sm-1 control-label\"><i class=\"fa fa-user fa-2x\"></i></label>\n\n                  <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"Username\">\n                    <small [hidden]=\"!submitted || loginForm.controls.username.valid\" style=\"color:red;\">Username required!</small>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"Password\" class=\"col-sm-1 control-label\"><i class=\"fa fa-lock fa-2x\"></i></label>\n\n                  <div class=\"col-sm-10\">\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" id=\"Password\" placeholder=\"Password\">\n                    <small [hidden]=\"!submitted || loginForm.controls.password.valid\" style=\"color:red;\">Password required!</small>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"btn-left col-sm-offset-1 col-sm-11\">\n                    <div class=\"checkbox\">\n                      <label>\n                        <input formControlName=\"checkbox\" type=\"checkbox\">&nbsp;Remember me\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                \n                <div *ngIf=\"loading\" class=\"log-result col-lg-12\" style=\"border-radius: 50px; margin-bottom: 10px;background: #999; color: darkred\">\n                  <i class='fa fa-cog fa-2x fa-spin fa-fw'></i>\n                  <h3 style='color:darkred; display:inline-block'>Loading...</h3>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"btn-left col-sm-12\">\n                    <input [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"login-btn btn btn-primary\" value=\"Log In\">\n                  </div>\n                </div>\n              </form>\n\n            </div>\n          </div>\n\n          <div class=\"panel-footer\"><i class=\"fa fa-warning\" style=\"color: red\"></i>&nbsp;&nbsp;You are not registerd\n            click <a [routerLink]=\"['', 'cp']\">here</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__ = __webpack_require__("../../../../../src/app/_services/_functions/forms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(funs, fs, auth, router, gds) {
        this.funs = funs;
        this.fs = fs;
        this.auth = auth;
        this.router = router;
        this.gds = gds;
        this.submitted = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth.clearCash();
        this.loginForm = this.fs.group([
            { "key": "username", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "password", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "checkbox", "defaultValue": false }
        ]);
    };
    LoginComponent.prototype.loggin = function (data, isValid) {
        var _this = this;
        this.submitted = true;
        if (isValid) {
            this.loading = true;
            this.auth.login(data).subscribe(function (res) {
                _this.funs.notify({ type: 'success',
                    icon: 'fa fa-flag',
                    title: 'Login Status',
                    message: "Welcome, <i>" + res.json().user.name + "</i>" });
                _this.loading = false;
                _this.gds.pushToQmetrixData("userLogin", res.json());
                _this.funs.delay(function () {
                    _this.router.navigate(['']);
                }, 2500);
            }, function (err) {
                window.localStorage.clear();
                window.sessionStorage.clear();
                if (err.json().err != null) {
                    _this.funs.notify({ type: 'danger',
                        icon: 'fa fa-exclamation-triangle',
                        title: 'Login Status',
                        message: err.json().err });
                }
                _this.loading = false;
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["a" /* FormsService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["a" /* FormsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/charts/charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{chartID+'-body'}}\">\n  <div class=\"chart-controls\">\n    <div class=\"col-xs-4 pull-right\">\n      <a href=\"#\" (click)=\"ClearIteration('stop')\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stop data series flow\">\n        <i class=\"fa fa-stop\" aria-hidden=\"true\"></i>\n      </a>\n      <a (click)=\"triggerDownloadDatasets($event)\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download CSV file\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </a>\n      <a (click)=\"getBase64Image()\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download an PNG image\">\n        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n      </a>\n      <a (click)=\"defaultZoom()\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Default zoom\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n      </a>\n      <a (click)=\"fullScreen(chartID+'-body')\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Full screen\">\n        <i class=\"fa fa-arrows-alt zoomingMode\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n    <div class=\"col-xs-4\">\n      <app-datetimepicker [classid]=\"chartID\" (onDatePickerChange)=\"onDatePickerChanged($event)\"></app-datetimepicker>\n    </div>\n    <div class=\"col-xs-4\">\n      <div class='input-group'>\n        <select class=\"form-control\" id=\"periode\" [(ngModel)]=\"periode\" (change)=\"onChangePeriode($event)\">\n          <optgroup label=\"minutes\">\n            <option id=\"periode_-1\" class=\"\" value=\"-1\">1 minute</option>\n            <option id=\"periode_-5\" class=\"\" value=\"-5\">5 minutes</option>\n            <option id=\"periode_-15\" class=\"\" value=\"-15\">15 minutes</option>\n            <option id=\"periode_-30\" class=\"\" value=\"-30\">30 minutes</option>\n          </optgroup>\n          <optgroup label=\"hours\">\n            <option id=\"periode_-60\" class=\"\" value=\"-60\">1 hour</option>\n            <option id=\"periode_-120\" class=\"\" value=\"-120\">2 hours</option>\n            <option id=\"periode_-180\" class=\"\" value=\"-180\">3 hours</option>\n            <option id=\"periode_-360\" class=\"\" value=\"-360\">6 hours</option>\n            <option id=\"periode_-720\" class=\"\" value=\"-720\">12 hours</option>\n          </optgroup>\n          <optgroup label=\"days\">\n            <option id=\"periode_-1001\" class=\"\" value=\"-1001\">today</option>\n            <option id=\"periode_-1101\" class=\"\" value=\"-1101\">yesterday</option>\n            <option id=\"periode_1\" class=\"\" value=\"1\">1 day</option>\n            <option id=\"periode_2\" class=\"\" value=\"2\">2 days</option>\n          </optgroup>\n          <optgroup label=\"weeks\">\n            <option id=\"periode_-1007\" class=\"\" value=\"-1007\">current week</option>\n            <option id=\"periode_-1107\" class=\"\" value=\"-1107\">last week</option>\n            <option id=\"periode_7\" class=\"\" value=\"7\">1 week</option>\n            <option id=\"periode_14\" class=\"\" value=\"14\">2 weeks</option>\n          </optgroup>\n          <optgroup label=\"months\">\n            <option id=\"periode_-1031\" class=\"\" value=\"-1031\">current month</option>\n            <option id=\"periode_-1131\" class=\"\" value=\"-1131\">last month</option>\n            <option id=\"periode_31\" class=\"\" value=\"31\">1 month</option>\n            <option id=\"periode_62\" class=\"\" value=\"62\">2 months</option>\n            <option id=\"periode_93\" class=\"\" value=\"93\">3 months</option>\n            <option id=\"periode_186\" class=\"\" value=\"186\">6 months</option>\n            <option id=\"periode_372\" class=\"\" value=\"372\">12 months</option>\n          </optgroup>\n          <optgroup label=\"years\">\n            <option id=\"periode_-1372\" class=\"\" value=\"-1372\">current year</option>\n            <option id=\"periode_-2372\" class=\"\" value=\"-2372\">last year</option>\n          </optgroup>\n          <optgroup label=\"special\">\n            <option id=\"periode_-1441\" class=\"\" value=\"-1441\">until now</option>\n            <option id=\"periode_-1442\" class=\"\" value=\"-1442\">end of data</option>\n          </optgroup>\n        </select>\n        <span class=\"input-group-addon\">\n          <span class=\"fa fa-clock-o\"></span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"chart-Container {{chartID+'-container'}}\"></div>\n  <div class=\"clearfix\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartsComponent = (function () {
    function ChartsComponent(gds) {
        this.gds = gds;
        this.isFullScreen = false;
        this.periode = '-30';
        this.onChartInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onStopIteration = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onStartDateOfDataSeries = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onPeriodeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onTriggerDownload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.colors = {
            red: "rgb(255, 99, 132)",
            blue: "rgb(54, 162, 235)",
            green: "rgb(75, 192, 192)",
            grey: "rgb(201, 203, 207)",
            orange: "rgb(255, 159, 64)",
            purple: "rgb(153, 102, 255)",
            yellow: "rgb(255, 205, 86)"
        };
        this.colorNames = Object.keys(this.colors);
    }
    ChartsComponent.prototype.uuidv4 = function () {
        return 'xxxxxyxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    ChartsComponent.prototype.ngOnInit = function () {
        this.chartID = 'chart-' + this.uuidv4();
        $('[data-toggle="tooltip"]').tooltip();
    };
    ChartsComponent.prototype.ngAfterViewInit = function () {
        $('.' + this.chartID + '-container').append($('<canvas id=' + this.chartID + ' style="height:95vh; width:100vw;"></canvas>'));
        this.config(this.chartConfig);
        this.onChartInit.emit(this.chartID);
    };
    ChartsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.gds.chartsObj[this.chartID + '-Iteration']);
        this.gds.chartsObj[this.chartID].clear();
        this.gds.chartsObj[this.chartID].destroy();
        try {
            delete this.gds.chartsObj[this.chartID];
        }
        catch (e) {
            this.gds.chartsObj[this.chartID] = undefined;
        }
    };
    ChartsComponent.prototype.randomRGBColor = function () {
        return 'rgb(' + [Math.floor(Math.random() * 250), Math.floor(Math.random() * 250), Math.floor(Math.random() * 250)].join() + ')';
    };
    ChartsComponent.prototype.basicColors = function () {
        if (this.colorNames.length == 0) {
            return this.randomRGBColor();
        }
        var randomNum = Math.floor(Math.random() * (this.colorNames.length - 1)), randomColorName = this.colorNames[randomNum];
        this.colorNames.splice(randomNum, 1);
        return randomColorName;
    };
    ChartsComponent.prototype.config = function (config) {
        for (var i = 0; i < config.data.datasets.length; i++) {
            var color = this.basicColors();
            config.data.datasets[i]['backgroundColor'] = color;
            config.data.datasets[i]['borderColor'] = color;
            config.data.datasets[i]['fill'] = false;
            config.data.datasets[i]['spanGaps'] = false;
            config.data.datasets[i]['radius'] = 0;
        }
        ;
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
                                min: 0,
                                beginAtZero: true,
                                // forces step size to be 5 units
                                stepSize: config.YStepSize || 10,
                                callback: function (tickValue, index, ticks) {
                                    if (!(index % parseInt((ticks.length / 15).toString()))) {
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
                }
            }
        };
        this.drowChart();
    };
    ChartsComponent.prototype.drowChart = function () {
        var _this = this;
        this.ctx = $('#' + this.chartID).get(0).getContext('2d');
        var showAvarage = true;
        this.gds.chartsObj[this.chartID] = new Chart(this.ctx, this.configuration);
        // Define a plugin to provide data labels
        Chart.plugins.register({
            beforeDraw: function (chart) {
                _this.ctx.fillStyle = "#FFF";
                _this.ctx.fillRect(0, 0, chart.width, chart.height);
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
    };
    ChartsComponent.prototype.onDatePickerChanged = function (date) {
        this.onStartDateOfDataSeries.emit(date);
    };
    ChartsComponent.prototype.onChangePeriode = function (e) {
        this.onPeriodeChange.emit(e.target.value);
    };
    ChartsComponent.prototype.defaultZoom = function () {
        this.gds.chartsObj[this.chartID].resetZoom();
    };
    ChartsComponent.prototype.getBase64Image = function () {
        var ancher = document.createElement('a');
        ancher.href = this.gds.chartsObj[this.chartID].toBase64Image();
        ancher.download = this.chartID + '.png';
        ancher.click();
        ancher = undefined;
    };
    ChartsComponent.prototype.triggerDownloadDatasets = function (e) {
        var a = document.createElement('a'), data = ',' + this.gds.chartsObj[this.chartID].data.labels.concat(",") + '\n', blob, url;
        for (var i = 0; i < this.gds.chartsObj[this.chartID].data.datasets.length; i++) {
            data += this.gds.chartsObj[this.chartID].data.datasets[i].label + ',' + this.gds.chartsObj[this.chartID].data.datasets[i].data.concat(',') + '\n';
        }
        blob = new Blob(["\ufeff", data], { type: "text/plain" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = this.configuration.options.title.text + '.csv';
        a.click();
        return false;
    };
    ChartsComponent.prototype.fullScreen = function (chartIdBody) {
        if (!this.isFullScreen) {
            $('.' + chartIdBody).css({
                position: "fixed",
                zIndex: '9999',
                background: "#fff"
            }).find('.zoomingMode').removeClass('fa-arrows-alt').addClass('fa-compress');
            $('.' + chartIdBody).animate({
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
            }, 300);
            this.isFullScreen = !this.isFullScreen;
        }
        else {
            $('.' + chartIdBody).css({
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
    };
    ChartsComponent.prototype.ClearIteration = function (ev) {
        this.onStopIteration.emit(this.gds.chartsObj[this.chartID + '-Iteration']);
        return false;
    };
    return ChartsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ChartsComponent.prototype, "chartConfig", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ChartsComponent.prototype, "onChartInit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ChartsComponent.prototype, "onStopIteration", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ChartsComponent.prototype, "onStartDateOfDataSeries", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ChartsComponent.prototype, "onPeriodeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ChartsComponent.prototype, "onTriggerDownload", void 0);
ChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-charts',
        template: __webpack_require__("../../../../../src/app/frameworkComponents/charts/charts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/frameworkComponents/charts/charts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _a || Object])
], ChartsComponent);

var _a;
//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/datetimepicker/datetimepicker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/datetimepicker/datetimepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='input-group date' id='{{classid}}-datepicker'>\n    <input type='text' class=\"form-control\" />\n    <span class=\"input-group-addon\">\n        <span class=\"fa fa-calendar\"></span>\n    </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/datetimepicker/datetimepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatetimepickerComponent = (function () {
    function DatetimepickerComponent() {
        this.onDatePickerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DatetimepickerComponent.prototype.ngOnInit = function () { };
    DatetimepickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dp = $('#' + this.classid + '-datepicker').datetimepicker({
            format: "DD-MMM-YYYY HH:mm"
        });
        this.dp.on("dp.hide", function (e) {
            _this.onDatePickerChange.emit(e.date);
        });
    };
    DatetimepickerComponent.prototype.ngOnDestroy = function () {
        this.dp.data("DateTimePicker").destroy();
    };
    return DatetimepickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DatetimepickerComponent.prototype, "classid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], DatetimepickerComponent.prototype, "onDatePickerChange", void 0);
DatetimepickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-datetimepicker',
        template: __webpack_require__("../../../../../src/app/frameworkComponents/datetimepicker/datetimepicker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/frameworkComponents/datetimepicker/datetimepicker.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DatetimepickerComponent);

//# sourceMappingURL=datetimepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/measurement-units/measurement-units.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/measurement-units/measurement-units.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"units-wrapper\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/measurement-units/measurement-units.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasurementUnitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeasurementUnitsComponent = (function () {
    function MeasurementUnitsComponent(req, gds, funs) {
        this.req = req;
        this.gds = gds;
        this.funs = funs;
        this.unitID = [];
        this.canvas = [];
    }
    MeasurementUnitsComponent.prototype.uuidv4 = function () {
        return 'xxxxxyxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    MeasurementUnitsComponent.prototype.ngOnInit = function () { };
    MeasurementUnitsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var units = '';
        for (var key in this.datasets) {
            this.unitID.push(this.uuidv4());
            units += "\n      <div class=\"unitsStyle unit-" + this.unitID[this.unitID.length - 1] + "-container\">\n        <div class=\"caption-header\">\n            <small><strong>" + this.datasets[key].label + "</strong></small>\n        </div>\n        <canvas id=\"unit-" + this.unitID[this.unitID.length - 1] + "\"></canvas>\n        <div class=\"caption-footer\">\n            <small class=\"pull-right\"><strong>Timestamp</strong></small>\n        </div>\n      </div>";
        }
        $('.units-wrapper').append($(units));
        this.requestPer5Minutes();
        this.loop = setInterval(function () {
            _this.requestPer5Minutes();
        }, 60000);
    };
    MeasurementUnitsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.loop);
        for (var i = 0; i < this.datasets.length; i++) {
            this.removeCanvas(i);
        }
    };
    MeasurementUnitsComponent.prototype.removeCanvas = function (index) {
        var ctx = this.canvas[index].getContext('2d');
        ctx.clearRect(0, 0, this.canvas[index].width, this.canvas[index].height);
    };
    MeasurementUnitsComponent.prototype.requestPer5Minutes = function () {
        var _this = this;
        this.req.lastMeasurements(this.gds.objects_of_ids.customer_id, this.gds.objects_of_ids.site_id, { "select": this.querySelect }).subscribe(function (res) {
            var lastMeas = _this.funs.flatten(res.json());
            for (var i = 0; i < lastMeas[1].length; i++) {
                if (_this.canvas[i] != undefined) {
                    _this.removeCanvas(i);
                }
                _this.draw(i, lastMeas[0], lastMeas[1][i]);
            }
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json().err
            });
        });
    };
    MeasurementUnitsComponent.prototype.draw = function (index, date, data) {
        this.canvas.push($('#unit-' + this.unitID[index]).get(0));
        var ctx = (this.canvas[index]).getContext('2d');
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';
        ctx.fillStyle = "#FFF";
        ctx.fillRect(0, 0, this.canvas[index].width, this.canvas[index].height);
        ctx.font = "55px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText(data, this.canvas[index].width / 2, this.canvas[index].height / 2);
        $('.unit-' + this.unitID[index] + '-container .caption-footer small strong').text(date);
    };
    return MeasurementUnitsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MeasurementUnitsComponent.prototype, "datasets", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MeasurementUnitsComponent.prototype, "querySelect", void 0);
MeasurementUnitsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-measurement-units',
        template: __webpack_require__("../../../../../src/app/frameworkComponents/measurement-units/measurement-units.component.html"),
        styles: [__webpack_require__("../../../../../src/app/frameworkComponents/measurement-units/measurement-units.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_1__services_requests_service__["a" /* RequestsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_requests_service__["a" /* RequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _c || Object])
], MeasurementUnitsComponent);

var _a, _b, _c;
//# sourceMappingURL=measurement-units.component.js.map

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/tagsinput/tagsinput.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/tagsinput/tagsinput.component.html":
/***/ (function(module, exports) {

module.exports = "<input class=\"form-control tagsInput\" id=\"{{idname}}\">"

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/tagsinput/tagsinput.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsinputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagsinputComponent = (function () {
    function TagsinputComponent() {
        this.onAddingTags = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.tags = [];
    }
    TagsinputComponent.prototype.ngOnInit = function () {
        $('.tagsInput').tagsinput('items');
        $('.tagsInput').tagsinput({
            confirmKeys: [13, 44]
        });
        $('.tagsInput').tagsinput({
            maxChars: 15
        });
        this.events();
    };
    TagsinputComponent.prototype.events = function () {
        var _this = this;
        $('.tagsInput').on({
            'itemAdded': function (event) {
                _this.tags.push(event.item);
                _this.onAddingTags.emit(_this.tags);
            },
            'itemRemoved': function (event) {
                var index = _this.tags.indexOf(event.item);
                _this.tags.splice(index, 1);
                _this.onAddingTags.emit(_this.tags);
            }
        });
    };
    TagsinputComponent.prototype.ngOnDestroy = function () {
        this.tags = null;
        $('.tagsInput').tagsinput('destroy');
    };
    return TagsinputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TagsinputComponent.prototype, "defaultTags", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TagsinputComponent.prototype, "idname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TagsinputComponent.prototype, "onAddingTags", void 0);
TagsinputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tags-input',
        template: __webpack_require__("../../../../../src/app/frameworkComponents/tagsinput/tagsinput.component.html"),
        styles: [__webpack_require__("../../../../../src/app/frameworkComponents/tagsinput/tagsinput.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TagsinputComponent);

//# sourceMappingURL=tagsinput.component.js.map

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/tinymce/tinymce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/tinymce/tinymce.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea class=\"tinymce\"></textarea>"

/***/ }),

/***/ "../../../../../src/app/frameworkComponents/tinymce/tinymce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinymceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_functions_backendurl__ = __webpack_require__("../../../../../src/app/_services/_functions/backendurl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TinymceComponent = (function () {
    function TinymceComponent() {
        this.onEditorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TinymceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log();
        tinymce.init({
            skin_url: '../../../../assets/skins/lightgray',
            selector: '.tinymce',
            height: 500,
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
            ],
            toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify',
            toolbar2: 'bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | codesample help',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('Change', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
                editor.on('Keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
            file_browser_callback: function (field_name, url, type, win) {
                window.onmessage = function (event) {
                    var evt = evt || window.event;
                    win.document.getElementById(field_name).value = evt.data;
                    tinymce.activeEditor.windowManager.close();
                };
                tinymce.activeEditor.windowManager.open({
                    title: 'Image Manager',
                    width: 520,
                    height: 400,
                    url: __WEBPACK_IMPORTED_MODULE_1__services_functions_backendurl__["a" /* URL */] + "filemanager/",
                }, {
                    window: win,
                    input: field_name
                });
                return false;
            }
        });
        if (this.content != null) {
            tinymce.activeEditor.setContent(this.content.po_post);
        }
    };
    TinymceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return TinymceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TinymceComponent.prototype, "onEditorKeyup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TinymceComponent.prototype, "content", void 0);
TinymceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tinymce',
        template: __webpack_require__("../../../../../src/app/frameworkComponents/tinymce/tinymce.component.html"),
        styles: [__webpack_require__("../../../../../src/app/frameworkComponents/tinymce/tinymce.component.css")]
    })
], TinymceComponent);

//# sourceMappingURL=tinymce.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map