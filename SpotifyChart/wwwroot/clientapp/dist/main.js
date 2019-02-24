(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.css":
/*!*****************************************!*\
  !*** ./ClientApp/app/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spotify-chart',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _song_song_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song/song-list.component */ "./ClientApp/app/song/song-list.component.ts");
/* harmony import */ var _song_song_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./song/song-detail.component */ "./ClientApp/app/song/song-detail.component.ts");
/* harmony import */ var _directives_sort_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/sort.directive */ "./ClientApp/app/directives/sort.directive.ts");
/* harmony import */ var _directives_filter_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/filter.directive */ "./ClientApp/app/directives/filter.directive.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/data.service */ "./ClientApp/app/shared/data.service.ts");
/* harmony import */ var _shared_pager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pager.service */ "./ClientApp/app/shared/pager.service.ts");
/* harmony import */ var _song_song_list_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./song/song-list.resolver */ "./ClientApp/app/song/song-list.resolver.ts");
/* harmony import */ var _shared_add_header_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/add-header.interceptor */ "./ClientApp/app/shared/add-header.interceptor.ts");
/* harmony import */ var _shared_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/cache.interceptor */ "./ClientApp/app/shared/cache.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var route = [
    { path: 'index', component: _song_song_list_component__WEBPACK_IMPORTED_MODULE_5__["SongListComponent"], resolve: { initData: _song_song_list_resolver__WEBPACK_IMPORTED_MODULE_11__["SongListResolver"] } },
    { path: 'detail/:name', component: _song_song_detail_component__WEBPACK_IMPORTED_MODULE_6__["SongDetailComponent"] },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', redirectTo: 'index', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _song_song_list_component__WEBPACK_IMPORTED_MODULE_5__["SongListComponent"],
                _song_song_detail_component__WEBPACK_IMPORTED_MODULE_6__["SongDetailComponent"],
                _directives_sort_directive__WEBPACK_IMPORTED_MODULE_7__["SortDirective"],
                _directives_filter_directive__WEBPACK_IMPORTED_MODULE_8__["FilterDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(route)
            ],
            providers: [
                _shared_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
                _shared_pager_service__WEBPACK_IMPORTED_MODULE_10__["PagerService"],
                _song_song_list_resolver__WEBPACK_IMPORTED_MODULE_11__["SongListResolver"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared_add_header_interceptor__WEBPACK_IMPORTED_MODULE_12__["AddHeaderInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__["CacheInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/directives/filter.directive.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/directives/filter.directive.ts ***!
  \******************************************************/
/*! exports provided: FilterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDirective", function() { return FilterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function setProperty(renderer, elementRef, propName, propValue) {
    renderer.setElementProperty(elementRef, propName, propValue);
}
var FilterDirective = /** @class */ (function () {
    function FilterDirective(element, renderer) {
        this.appFilter = {
            filterString: '',
            columnName: 'name'
        };
        this.tableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
        this.renderer = renderer;
        // Set default value for filter
        setProperty(this.renderer, this.element, 'value', this.appFilter.filterString);
    }
    Object.defineProperty(FilterDirective.prototype, "config", {
        get: function () {
            return this.appFilter;
        },
        set: function (value) {
            this.appFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    FilterDirective.prototype.onChangeFilter = function (event) {
        this.appFilter.filterString = event;
        this.tableChanged.emit({ filtering: this.appFilter });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterDirective.prototype, "appFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterDirective.prototype, "tableChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FilterDirective.prototype, "config", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event.target.value']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FilterDirective.prototype, "onChangeFilter", null);
    FilterDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFilter]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], FilterDirective);
    return FilterDirective;
}());



/***/ }),

/***/ "./ClientApp/app/directives/sort.directive.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/directives/sort.directive.ts ***!
  \****************************************************/
/*! exports provided: SortDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirective", function() { return SortDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortDirective = /** @class */ (function () {
    function SortDirective() {
        this.sortChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SortDirective.prototype, "config", {
        get: function () {
            return this.appSort;
        },
        set: function (value) {
            this.appSort = value;
        },
        enumerable: true,
        configurable: true
    });
    SortDirective.prototype.onToggleSort = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.appSort && this.column && this.column.sort !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.sortChanged.emit(this.column);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortDirective.prototype, "appSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortDirective.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortDirective.prototype, "sortChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SortDirective.prototype, "config", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event', '$target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SortDirective.prototype, "onToggleSort", null);
    SortDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSort]'
        })
    ], SortDirective);
    return SortDirective;
}());



/***/ }),

/***/ "./ClientApp/app/shared/add-header.interceptor.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/shared/add-header.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AddHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeaderInterceptor", function() { return AddHeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddHeaderInterceptor = /** @class */ (function () {
    function AddHeaderInterceptor() {
    }
    AddHeaderInterceptor.prototype.intercept = function (req, next) {
        var modifiedRequest = req.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return next.handle(modifiedRequest);
    };
    AddHeaderInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AddHeaderInterceptor);
    return AddHeaderInterceptor;
}());



/***/ }),

/***/ "./ClientApp/app/shared/cache.interceptor.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/shared/cache.interceptor.ts ***!
  \***************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-cache.service */ "./ClientApp/app/shared/http-cache.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CacheInterceptor = /** @class */ (function () {
    function CacheInterceptor(cache) {
        this.cache = cache;
    }
    CacheInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //pass along non-cacheable requests(Post, Put and delete) and invalidate cache
        if (req.method !== 'GET') {
            this.cache.invalidateCache();
            return next.handle(req);
        }
        //attempt to retrive a cached response
        var cachedResponse = this.cache.get(req.url);
        //return cached response
        if (cachedResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(cachedResponse);
        }
        //send request to server and add response to cache
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.cache.put(req.url, event);
            }
        }));
    };
    CacheInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"]])
    ], CacheInterceptor);
    return CacheInterceptor;
}());



/***/ }),

/***/ "./ClientApp/app/shared/data.service.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/shared/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.songs = [];
    }
    DataService.prototype.loadSongs = function () {
        var _this = this;
        return this.http.get("/api/song")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.songs = data.AllSongs;
            return data;
        }));
    };
    DataService.prototype.getSongDetails = function (symbol) {
        return this.http.get("/api/song/" + symbol)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/http-cache.service.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/shared/http-cache.service.ts ***!
  \****************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpCacheService = /** @class */ (function () {
    function HttpCacheService() {
        this.requests = {};
    }
    //add the HttpResponse from server to the request object with the url as key parameter
    HttpCacheService.prototype.put = function (url, response) {
        this.requests[url] = response;
    };
    //fetch the HttpResponse value from cache for the url if present, or returns undefined if not present
    HttpCacheService.prototype.get = function (url) {
        return this.requests[url];
    };
    //remove the response value for the url in case the data is updated and fresh call needs to be made to server
    HttpCacheService.prototype.invalidateRequestUrl = function (url) {
        this.requests[url] = undefined;
    };
    //empty the entire cache
    HttpCacheService.prototype.invalidateCache = function () {
        this.requests = {};
    };
    HttpCacheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/pager.service.ts":
/*!***********************************************!*\
  !*** ./ClientApp/app/shared/pager.service.ts ***!
  \***********************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./ClientApp/app/song/song-detail.component.html":
/*!*******************************************************!*\
  !*** ./ClientApp/app/song/song-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div><h2>Song Details : {{song?.name}} at Rank {{song?.rank}}</h2></div>\r\n<div class=\"control-section\">\r\n    <div id=\"container\">\r\n            <div class=\"row\">\r\n    \r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Name:</div>\r\n                            <div class=\"col-md-6\">{{song?.name}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Artist:</div>\r\n                            <div class='col-md-6'>{{song?.artist}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Danceability:</div>\r\n                            <div class=\"col-md-6\">{{song?.danceability}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Energy:</div>\r\n                            <div class=\"col-md-6\">{{song?.energy}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Key:</div>\r\n                            <div class=\"col-md-6\">{{song?.key}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Loudness:</div>\r\n                            <div class=\"col-md-6\">{{song?.loudness}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Mode:</div>\r\n                            <div class=\"col-md-6\">{{song?.mode}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">Speechiness:</div>\r\n                            <div class=\"col-md-6\">{{song?.speechiness}}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-md-3\">Acousticness:</div>\r\n                                <div class=\"col-md-6\">{{song?.acousticness}}</div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                    <div class=\"col-md-3\">Instrumentalness:</div>\r\n                                    <div class=\"col-md-6\">{{song?.instrumentalness}}</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                        <div class=\"col-md-3\">Liveness:</div>\r\n                                        <div class=\"col-md-6\">{{song?.liveness}}</div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-md-3\">Valence:</div>\r\n                                            <div class=\"col-md-6\">{{song?.valence}}</div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                                <div class=\"col-md-3\">Tempo:</div>\r\n                                                <div class=\"col-md-6\">{{song?.tempo}}</div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                    <div class=\"col-md-3\">Valence:</div>\r\n                                                    <div class=\"col-md-6\">{{song?.duration}}</div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-md-3\">Valence:</div>\r\n                                                        <div class=\"col-md-6\">{{song?.timeSignature}}</div>\r\n                                                    </div>\r\n\r\n                    </div>\r\n        \r\n                </div>\r\n    </div>\r\n</div>\r\n<div class='panel-footer'>\r\n    <button class='btn btn-success' (click)='onBack()' style='width:80px'>\r\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back\r\n    </button>\r\n</div>\r\n    \r\n            \r\n    "

/***/ }),

/***/ "./ClientApp/app/song/song-detail.component.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/song/song-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: SongDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDetailComponent", function() { return SongDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data.service */ "./ClientApp/app/shared/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongDetailComponent = /** @class */ (function () {
    function SongDetailComponent(data, _route, _router) {
        this.data = data;
        this._route = _route;
        this._router = _router;
    }
    SongDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.name = params['name'];
        });
        this.song = this.data.songs.find(function (x) { return x.name == _this.name; });
    };
    SongDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/index']);
    };
    SongDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "song-detail",
            template: __webpack_require__(/*! ./song-detail.component.html */ "./ClientApp/app/song/song-detail.component.html")
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SongDetailComponent);
    return SongDetailComponent;
}());



/***/ }),

/***/ "./ClientApp/app/song/song-list.component.css":
/*!****************************************************!*\
  !*** ./ClientApp/app/song/song-list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type: none;\n}\n\nli {\n    display: block;\n    line-height: 30px;\n}\n\n.description {\n    font-size: 16px;\n    padding-top: 10px;\n}\n\n.pagination {\n    display: inline-flex;\n}\n"

/***/ }),

/***/ "./ClientApp/app/song/song-list.component.html":
/*!*****************************************************!*\
  !*** ./ClientApp/app/song/song-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n            <div><h2>The top 50 songs on our chart are: </h2></div>\r\n    </div>\r\n    <div class='panel-body'>\r\n\r\n\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                <tr>\r\n                    <th *ngFor=\"let column of columns\" [appSort]=\"config\" [column]=\"column\" (sortChanged)=\"onChangeTable($event)\">\r\n                        {{column.title | titlecase}}\r\n                        <i class=\"fa\" [ngClass]=\"{'fa-angle-down': column.sort === 'desc', 'fa-angle-up': column.sort === 'asc'}\"></i>\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td *ngFor=\"let column of columns\">\r\n                                <input *ngIf=\"column.filtering\" placeholder=\"{{column.filtering.placeholder}}\"\r\n                                [appFilter]=\"column.filtering\"\r\n                                class=\"form-control\"\r\n                                style=\"width: auto;\"\r\n                                (tableChanged)=\"tableChanged(config)\"/>\r\n                              </td>\r\n                            </tr>\r\n                <tr *ngFor='let song of pagedItems'>\r\n                    <td>\r\n                        {{ song.rank }}\r\n                    </td>\r\n                    <td>\r\n                        <a [routerLink]=\"['/detail', song?.name]\">{{ song?.name }}</a>\r\n                    </td>\r\n                    <td>{{ song?.artist }}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"text-center\">\r\n\r\n    <!-- pager -->\r\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n            <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n        </li>\r\n        <li *ngFor=\"let page of pager.pages\" class=\"page-item\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n            <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/song/song-list.component.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/song/song-list.component.ts ***!
  \***************************************************/
/*! exports provided: SongListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function() { return SongListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data.service */ "./ClientApp/app/shared/data.service.ts");
/* harmony import */ var _shared_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pager.service */ "./ClientApp/app/shared/pager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongListComponent = /** @class */ (function () {
    function SongListComponent(data, _pagerService, route) {
        this.data = data;
        this._pagerService = _pagerService;
        this.route = route;
        this.columns = [];
        // pager object
        this.pager = {};
    }
    SongListComponent.prototype.ngOnInit = function () {
        this.stock = this.route.snapshot.data.initData;
        this.topSongs = this.stock.TopSongs;
        this.allSongs = this.stock.AllSongs;
        this.setPage(1);
        this.initTable();
    };
    SongListComponent.prototype.setPage = function (page, data) {
        if (data === void 0) { data = this.topSongs; }
        // get pager object from service
        this.pager = this._pagerService.getPager(data.length, page);
        // get current page of items
        this.pagedItems = data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    SongListComponent.prototype.initTable = function () {
        this.columns = [
            { title: 'rank', sort: false },
            { title: 'name', sort: '', filtering: { filterString: '', placeholder: 'Search by Name' } },
            { title: 'artist', sort: '', filtering: { filterString: '', placeholder: 'Search by Artist' } },
        ];
        this.config = {
            sorting: { columns: this.columns },
            filtering: { filterString: '' }
        };
    };
    Object.defineProperty(SongListComponent.prototype, "configColumns", {
        get: function () {
            var sortColumns = [];
            this.columns.forEach(function (column) {
                if (column.sort) {
                    sortColumns.push(column);
                }
            });
            return { columns: sortColumns };
        },
        enumerable: true,
        configurable: true
    });
    SongListComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.title].toString().match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.title].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    SongListComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].title;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        if (columnName === "rank") {
            return data.sort(function (previous, current) {
                if (previous[columnName] > current[columnName]) {
                    return sort === 'desc' ? -1 : 1;
                }
                else if (previous[columnName] < current[columnName]) {
                    return sort === 'asc' ? -1 : 1;
                }
                return 0;
            });
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName].toString().toLowerCase() > current[columnName].toString().toLowerCase()) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName].toString().toLowerCase() < current[columnName].toString().toLowerCase()) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    SongListComponent.prototype.onChangeTable = function (column) {
        this.columns.forEach(function (col) {
            if (col.title !== column.title) {
                col.sort = '';
            }
        });
        this.tableChanged({ sorting: this.configColumns });
    };
    SongListComponent.prototype.tableChanged = function (config) {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.allSongs, this.config);
        var sortedData;
        if (JSON.stringify(filteredData) === JSON.stringify(this.allSongs)) {
            sortedData = this.changeSort(this.topSongs, this.config);
        }
        else {
            sortedData = this.changeSort(filteredData, this.config);
        }
        this.setPage(1, sortedData);
    };
    SongListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "song-list",
            template: __webpack_require__(/*! ./song-list.component.html */ "./ClientApp/app/song/song-list.component.html"),
            styles: [__webpack_require__(/*! ./song-list.component.css */ "./ClientApp/app/song/song-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SongListComponent);
    return SongListComponent;
}());



/***/ }),

/***/ "./ClientApp/app/song/song-list.resolver.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/song/song-list.resolver.ts ***!
  \**************************************************/
/*! exports provided: SongListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListResolver", function() { return SongListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data.service */ "./ClientApp/app/shared/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongListResolver = /** @class */ (function () {
    function SongListResolver(dataService) {
        this.dataService = dataService;
    }
    SongListResolver.prototype.resolve = function (route, state) {
        return this.dataService.loadSongs();
    };
    SongListResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SongListResolver);
    return SongListResolver;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Practice\SpotifyChart\SpotifyChart\SpotifyChart\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map