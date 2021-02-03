(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qlns-ChamCong-dataChamCong-module"],{

/***/ "./src/app/directives/prevent-double-click.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/directives/prevent-double-click.directive.ts ***!
  \**************************************************************/
/*! exports provided: PreventDoubleClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventDoubleClickDirective", function() { return PreventDoubleClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreventDoubleClickDirective = /** @class */ (function () {
    function PreventDoubleClickDirective() {
        this.throttleTime = 300;
        this.throttledClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PreventDoubleClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.clicks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(this.throttleTime)).subscribe(function (e) { return _this.emitThrottledClick(e); });
    };
    PreventDoubleClickDirective.prototype.emitThrottledClick = function (e) {
        this.throttledClick.emit(e);
    };
    PreventDoubleClickDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PreventDoubleClickDirective.prototype.clickEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreventDoubleClickDirective.prototype, "throttleTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PreventDoubleClickDirective.prototype, "throttledClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], PreventDoubleClickDirective.prototype, "clickEvent", null);
    PreventDoubleClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mwPreventDoubleClick]'
        }),
        __metadata("design:paramtypes", [])
    ], PreventDoubleClickDirective);
    return PreventDoubleClickDirective;
}());



/***/ }),

/***/ "./src/app/directives/prevent-double-click.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/directives/prevent-double-click.module.ts ***!
  \***********************************************************/
/*! exports provided: PreventDoubleClickModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventDoubleClickModule", function() { return PreventDoubleClickModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _prevent_double_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prevent-double-click.directive */ "./src/app/directives/prevent-double-click.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PreventDoubleClickModule = /** @class */ (function () {
    function PreventDoubleClickModule() {
    }
    PreventDoubleClickModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_prevent_double_click_directive__WEBPACK_IMPORTED_MODULE_4__["PreventDoubleClickDirective"]],
            exports: [
                _prevent_double_click_directive__WEBPACK_IMPORTED_MODULE_4__["PreventDoubleClickDirective"]
            ]
        })
    ], PreventDoubleClickModule);
    return PreventDoubleClickModule;
}());



/***/ }),

/***/ "./src/app/qlns/ChamCong/dataChamCong.module.ts":
/*!******************************************************!*\
  !*** ./src/app/qlns/ChamCong/dataChamCong.module.ts ***!
  \******************************************************/
/*! exports provided: dataChamCongModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataChamCongModule", function() { return dataChamCongModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_prevent_double_click_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/prevent-double-click.module */ "./src/app/directives/prevent-double-click.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _dataChamCong_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataChamCong.page */ "./src/app/qlns/ChamCong/dataChamCong.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { PreventDoubleClickDirective } from '../../directives/prevent-double-click.directive';



var routes = [
    {
        path: '',
        component: _dataChamCong_page__WEBPACK_IMPORTED_MODULE_6__["dataChamCong"]
    }
];
var dataChamCongModule = /** @class */ (function () {
    function dataChamCongModule() {
    }
    dataChamCongModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _directives_prevent_double_click_module__WEBPACK_IMPORTED_MODULE_4__["PreventDoubleClickModule"]
            ],
            declarations: [_dataChamCong_page__WEBPACK_IMPORTED_MODULE_6__["dataChamCong"]]
        })
    ], dataChamCongModule);
    return dataChamCongModule;
}());



/***/ }),

/***/ "./src/app/qlns/ChamCong/dataChamCong.page.html":
/*!******************************************************!*\
  !*** ./src/app/qlns/ChamCong/dataChamCong.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"content-app-desktop\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button (click)=\"backToHome()\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Thông tin chấm công</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"dark\" href=\"app/main/announcement\">\n          <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n          <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n        </ion-button>        \n      </ion-buttons>\n    </ion-toolbar>\n  </div>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class=\"content-app-desktop\">\n      <form #f=\"ngForm\" (ngSubmit)=\"filterProcessDate(f)\">\n        <div *ngIf=\"branchType == 'NV'; else other_content\">\n          <ion-row>\n            <section style=\"width: 100%\">\n              <ion-label style=\"font-size: 0.9em;\">\n                Ngày đã chọn : {{ dateFrom.format('DD/MM/yyyy') }} đến {{ dateTo.format('DD/MM/yyyy')}}\n              </ion-label>\n              <div class=\"clearfix\">\n                <div style=\"width: 50%; float:left;\">\n                  <ion-button size=\"small\" mwPreventDoubleClick (throttledClick)=\"openCalendar()\">\n                    Chọn ngày lọc tại đây\n                  </ion-button>\n                </div>\n               <div style=\"width: 50%; float:left; text-align: right;\">\n                <ion-button size=\"small\" *ngIf=\"showBtnRefresh\" (click)=\"refresh()\" style=\"--background:linear-gradient(to right, #00cc99 0%, #006666e8 100%)\"><i class=\"fa fa-refresh\"></i></ion-button>\n                <ion-button disabled size=\"small\" *ngIf=\"!showBtnRefresh\" (click)=\"refresh()\" style=\"--background:linear-gradient(to right, #00cc99 0%, #006666e8 100%)\"><i class=\"fa fa-refresh\"></i></ion-button>\n                <ion-button  size=\"small\" type=\"submit\" style=\"--background:linear-gradient(to right, #ffcc00 0%, #ff6600c7 101%)\"><i class=\"fa fa-filter\"></i></ion-button>\n              </div>\n              </div>\n            </section>\n        </ion-row>\n        </div>\n        <ng-template #other_content>\n          <ion-row>\n              <section style=\"width: 100%\">\n                <ion-label style=\"font-size: 0.9em;\">\n                  Ngày đã chọn : {{ dateFrom.format('DD/MM/yyyy') }} đến {{ dateTo.format('DD/MM/yyyy')}}\n                </ion-label>\n                <div class=\"clearfix\">\n                  <div style=\"width: 50%; float:left;\">\n                    <ion-button size=\"small\" mwPreventDoubleClick (throttledClick)=\"openCalendar()\">\n                      Chọn ngày lọc tại đây\n                    </ion-button>\n                  </div>\n                 <div style=\"width: 50%; float:left; text-align: right;\">\n                  <ion-button size=\"small\" *ngIf=\"showBtnRefresh\" (click)=\"refresh()\" style=\"--background:linear-gradient(to right, #00cc99 0%, #006666e8 100%)\"><i class=\"fa fa-refresh\"></i></ion-button>\n                  <ion-button disabled size=\"small\" *ngIf=\"!showBtnRefresh\" (click)=\"refresh()\" style=\"--background:linear-gradient(to right, #00cc99 0%, #006666e8 100%)\"><i class=\"fa fa-refresh\"></i></ion-button>\n                  <ion-button  size=\"small\" type=\"submit\" style=\"--background:linear-gradient(to right, #ffcc00 0%, #ff6600c7 101%)\"><i class=\"fa fa-filter\"></i></ion-button>\n                \n                </div>\n                </div>\n              </section>\n          </ion-row>\n          <ion-row>\n            <ion-col> \n              <ion-label position=\"stacked\" style=\"margin-bottom: 5px;\"> Chọn kiểu lọc:</ion-label>\n              <div class=\"type-filter\">\n                  <ion-select class=\"custom-options\" interface=\"popover\" [(ngModel)]=\"typeGlobal\" name=\"typeGlobal\">\n                    <ion-select-option value=\"individual\">Cá nhân</ion-select-option>\n                    <ion-select-option value=\"all\" class=\"brown-option\">Tất cả</ion-select-option>\n                  </ion-select>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"typeGlobal == 'all'\">\n            <ion-col> \n              <div>\n                  <ion-label position=\"stacked\" style=\"margin-bottom: 5px;\"> Thông tin nhân viên:</ion-label>\n                  <div class=\"hovaten\">\n                    <div *ngIf=\"isItemAvailable\">\n                        <div id=\"autocomplete_holder\">\n                          <div id=\"autocomplete\">\n                            <li *ngFor=\"let item of items\" class=\"autocomplete_li\" (click)=\"sendValueHovaten(item)\">{{ item }}</li>\n                          </div>\n                        </div>\n                    </div>\n                      <ion-searchbar value=\"{{search}}\"  name=\"search\" style=\"padding-top: 0px; height: 40px; padding-bottom: 0px\" type=\"text\" debounce=\"500\" (ionChange)=\"getItems($event)\"></ion-searchbar>\n                  </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n     \n    </form>\n    <div *ngIf=\"groupList && groupList.length > 0;else elsecontent\">\n      <ion-card *ngFor=\"let item of groupList\" style=\"margin:10px 0px; background:#f5f8fd;border:1px solid lightgray\">\n        <ion-item *ngIf=\"flagGlobal\">\n          <ion-label style=\"font-size: 15px; margin: 0px;\" color=\"primary\"> {{item.hoVaTen}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon style=\"font-size: 24px;\" name=\"calendar\" color=\"primary\"></ion-icon>\n          <ion-label color=\"primary\" style=\"text-transform: capitalize; font-size: 15px;\">{{item.processDateFormat}}</ion-label>\n        </ion-item>\n        <ion-card-content style=\"color: #3880ff;padding:0 10px\">\n          <ion-row>\n            <ion-col col-6> \n              <p style=\"margin: 0px;\n              font-size: 13px; margin-bottom: 4px;\" >CHECK IN</p>\n              <div class=\"info-check\"><p style=\"margin: 0px;\n                font-size: 13px;\">{{item.checkIn}}</p></div>\n            </ion-col>\n            <ion-col col-6>\n              <p style=\"margin: 0px;\n              font-size: 13px; margin-bottom: 4px;\" >CHECK OUT</p>\n              <div class=\"info-check\">\n                <p style=\"margin: 0px;\n                font-size: 13px;\" *ngIf=\"item.checkOut != null\">{{item.checkOut}}</p>\n                <p style=\"margin: 0px;\n                font-size: 13px;\" *ngIf=\"item.checkOut == null\">Không có dữ liệu</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ng-template #elsecontent>\n      <p>Không tìm thấy dữ liệu</p>\n    </ng-template>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/qlns/ChamCong/dataChamCong.page.scss":
/*!******************************************************!*\
  !*** ./src/app/qlns/ChamCong/dataChamCong.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-datetime {\n  position: relative;\n  border-radius: 5px; }\n\n.caret-down-datetime {\n  position: absolute;\n  top: 8px;\n  right: 36px; }\n\n:host(.in-item) {\n  position: static;\n  max-width: 55%; }\n\n#autocomplete {\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  width: calc(100% - 20px);\n  top: 40px;\n  left: 10px;\n  max-height: 175px;\n  overflow-y: auto;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.hovaten {\n  position: relative; }\n\n.autocomplete_li {\n  list-style-type: none;\n  padding: 8px 20px;\n  border-bottom: 1px solid #eee; }\n\n.mr-10 {\n  display: inline-block;\n  margin-right: 10px; }\n\n.type-filter {\n  border: 1px solid #eee;\n  border-radius: 8px; }\n\n.box-datetime {\n  padding: 11px 6px 8px 8px; }\n\n.box-datetime::after {\n  font-family: fontAwesome;\n  content: \"\\f0dd\";\n  font-size: 15px;\n  display: inline-block;\n  position: absolute;\n  top: 18px;\n  color: #989797;\n  right: 17px; }\n\n.clearfix {\n  overflow: auto; }\n\n.info-check {\n  text-align: center;\n  width: 80%;\n  font-weight: bold;\n  color: #3880ff;\n  border: 1px dotted #3880ff;\n  padding: 2px;\n  font-style: italic;\n  border-radius: 4px; }\n\n.totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n"

/***/ }),

/***/ "./src/app/qlns/ChamCong/dataChamCong.page.ts":
/*!****************************************************!*\
  !*** ./src/app/qlns/ChamCong/dataChamCong.page.ts ***!
  \****************************************************/
/*! exports provided: AUTH_KEY, dataChamCong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataChamCong", function() { return dataChamCong; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var _date_range_calendar_date_range_calendar_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../date-range-calendar/date-range-calendar.page */ "./src/app/date-range-calendar/date-range-calendar.page.ts");
/* harmony import */ var _service_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/logger.service */ "./src/service/logger.service.ts");
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/signalR.service */ "./src/service/signalR.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var AUTH_KEY = 'AUTH';
var dataChamCong = /** @class */ (function () {
    function dataChamCong(_loadingCtrl, _utilService, _alertController, _router, _dataChamCongsServiceProxy, _localStorageService, _tokenAuthServiceProxy, modalController, loggerService, _signalRSevice, _announcementServiceProxy) {
        var _this = this;
        this._loadingCtrl = _loadingCtrl;
        this._utilService = _utilService;
        this._alertController = _alertController;
        this._router = _router;
        this._dataChamCongsServiceProxy = _dataChamCongsServiceProxy;
        this._localStorageService = _localStorageService;
        this._tokenAuthServiceProxy = _tokenAuthServiceProxy;
        this.modalController = modalController;
        this.loggerService = loggerService;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this.typeGlobal = "individual";
        this.isItemAvailable = false;
        this.items = [];
        this.listHovaten = [];
        this.showBtnRefresh = false;
        this.totalUnred = 0;
        this.calendarData = {
            dateFrom: null,
            dateTo: null,
            scrollPosition: 0,
            selectedButtonName: _date_range_calendar_date_range_calendar_page__WEBPACK_IMPORTED_MODULE_8__["FilterBtnConstants"].empthyString
        };
        this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi').startOf("month");
        this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi');
        this.isLoading = false;
        this.userId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.userId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    dataChamCong.prototype.ngOnInit = function () {
        this.showBtnRefresh = false;
        this.search = '';
        this.searchTmp = '';
        this.groupList = [];
        this.maChamCong = this._localStorageService.getItem(AUTH_KEY).maChamCong;
        this.branchType = this._localStorageService.getItem(AUTH_KEY).branchType;
        this.branchId = this._localStorageService.getItem(AUTH_KEY).branchId;
        this.userId = this._localStorageService.getItem(AUTH_KEY).userId;
    };
    dataChamCong.prototype.initializeItems = function () {
        this.items = this.listHovaten;
    };
    dataChamCong.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.userId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.getAllFullNameByFilterKeyWord();
        this.getDataChamCongTrongThang();
    };
    //nút tìm kiếm
    dataChamCong.prototype.filterProcessDate = function (form) {
        this.loadingDefault();
        this.startDateUserChoose = moment__WEBPACK_IMPORTED_MODULE_4__(this.dateFrom.clone().locale('vi').startOf('day'));
        this.endDateUserChoose = moment__WEBPACK_IMPORTED_MODULE_4__(this.dateTo.clone().locale('vi').startOf('day'));
        this.getAllByBranch();
    };
    dataChamCong.prototype.getAllFullNameByFilterKeyWord = function () {
        var _this = this;
        this._dataChamCongsServiceProxy.getAllFullNameByFilterKeyWord(this.branchId).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (res && res.length > 0) {
                        res.map(function (value) {
                            _this.listHovaten.push(value);
                        });
                    }
                    return [2 /*return*/];
                });
            }); }, error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    dataChamCong.prototype.getAllByBranch = function () {
        var _this = this;
        this.flagGlobal = true ? this.typeGlobal == "all" : undefined;
        if (this.search.length < 1) {
            this.search = this.searchTmp;
        }
        this._dataChamCongsServiceProxy.getAllByBranchId(this.branchId, this.endDateUserChoose, this.startDateUserChoose, this.maChamCong, this.search, this.flagGlobal).timeout(5000).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var listArrayResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            listArrayResult = [];
                            if (res && res.length > 0) {
                                res.forEach(function (item, index) {
                                    item['processDateFormat'] = item.processDate.locale("vi").format('dddd, DD/MM/YYYY');
                                    var array_tmp = [];
                                    array_tmp['processDateFormat'] = item['processDateFormat'];
                                    array_tmp['checkOut'] = item.checkOut;
                                    array_tmp['checkIn'] = item.checkIn;
                                    array_tmp['hoVaTen'] = item.hoVaTen;
                                    listArrayResult.push(array_tmp);
                                });
                            }
                            this.showBtnRefresh = true;
                            return [4 /*yield*/, this.getResultToList(listArrayResult)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, error: function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.dismissLoading();
                    console.log(err);
                    return [2 /*return*/];
                });
            }); }
        });
    };
    dataChamCong.prototype.refresh = function () {
        this.loadingDefault();
        this.typeGlobal = "individual";
        this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi').startOf("month");
        this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi');
        this.search = '';
        this.searchTmp = '';
        this.flagGlobal = false;
        this.showBtnRefresh = false;
        this.getDataChamCongTrongThang();
    };
    dataChamCong.prototype.getResultToList = function (listArrayResult) {
        this.groupList = [];
        this.groupList = listArrayResult;
        this.search = '';
        this.searchTmp = '';
        this.dismissLoading();
    };
    dataChamCong.prototype.getDataChamCongTrongThang = function () {
        var _this = this;
        this._dataChamCongsServiceProxy.getAllByMaChamCong(this.maChamCong).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var listArrayResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            listArrayResult = [];
                            if (res && res.length > 0) {
                                res.forEach(function (item, index) {
                                    item['processDateFormat'] = item.processDate.locale("vi").format('dddd, DD/MM/YYYY');
                                    var array_tmp = [];
                                    array_tmp['processDateFormat'] = item['processDateFormat'];
                                    array_tmp['checkOut'] = item['checkOut'];
                                    array_tmp['checkIn'] = item['checkIn'];
                                    listArrayResult.push(array_tmp);
                                });
                            }
                            return [4 /*yield*/, this.getResultToList(listArrayResult)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            error: function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.dismissLoading();
                    console.log(err);
                    return [2 /*return*/];
                });
            }); }
        });
    };
    dataChamCong.prototype.ShowError = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = data;
                        return [4 /*yield*/, this._alertController.create({
                                header: 'Error',
                                subHeader: obj.error.message,
                                message: obj.error.details,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    dataChamCong.prototype.getItems = function (ev) {
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        this.searchTmp = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '' && val.trim() != this.search) {
            this.isItemAvailable = true;
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.isItemAvailable = false;
        }
    };
    dataChamCong.prototype.sendValueHovaten = function (item) {
        this.search = item;
        this.isItemAvailable = false;
    };
    dataChamCong.prototype.openCalendar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.modalController.create({
                                component: _date_range_calendar_date_range_calendar_page__WEBPACK_IMPORTED_MODULE_8__["DateRangeCalendarPage"],
                                componentProps: {
                                    previousState: this.calendarData
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present().then(function () {
                                // loader.dismiss();
                            })];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (!data.data) {
                                return;
                            }
                            _this.calendarData = data.data['calendarData'];
                            if (_this.calendarData.dateFrom) {
                                _this.dateFrom = _this.calendarData.dateFrom;
                                _this.dateTo = _this.calendarData.dateTo;
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.loggerService.error("HomePage->openCalendar():err", err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    dataChamCong.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({
                            // message: 'Đang xử lý........',
                            // duration: 3000
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    dataChamCong.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    dataChamCong.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    dataChamCong.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    dataChamCong.prototype.backToHome = function () {
        var _this = this;
        setTimeout(function () {
            _this._router.navigateByUrl('app/main/home');
        }, 1000);
    };
    dataChamCong = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-chamcong',
            template: __webpack_require__(/*! ./dataChamCong.page.html */ "./src/app/qlns/ChamCong/dataChamCong.page.html"),
            styles: [__webpack_require__(/*! ./dataChamCong.page.scss */ "./src/app/qlns/ChamCong/dataChamCong.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["CHAMCONGServiceProxy"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["TokenAuthServiceProxy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _service_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_10__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["AnnouncementServiceProxy"]])
    ], dataChamCong);
    return dataChamCong;
}());



/***/ }),

/***/ "./src/service/logger.service.ts":
/*!***************************************!*\
  !*** ./src/service/logger.service.ts ***!
  \***************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.invokeConsoleMethod(console.log, objects);
    };
    LoggerService.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.invokeConsoleMethod(console.warn, objects);
    };
    LoggerService.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.invokeConsoleMethod(console.error, objects);
    };
    LoggerService.prototype.invokeConsoleMethod = function (func, objects) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            func.apply(console, objects);
        }
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ })

}]);
//# sourceMappingURL=qlns-ChamCong-dataChamCong-module.js.map