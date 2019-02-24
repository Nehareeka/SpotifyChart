"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var song_list_component_1 = require("./song/song-list.component");
var song_detail_component_1 = require("./song/song-detail.component");
var sort_directive_1 = require("./directives/sort.directive");
var data_service_1 = require("./shared/data.service");
var pager_service_1 = require("./shared/pager.service");
var song_list_resolver_1 = require("./song/song-list.resolver");
var add_header_interceptor_1 = require("./shared/add-header.interceptor");
var cache_interceptor_1 = require("./shared/cache.interceptor");
var route = [
    { path: 'index', component: song_list_component_1.SongListComponent, resolve: { initData: song_list_resolver_1.SongListResolver } },
    { path: 'detail/:symbol', component: song_detail_component_1.SongDetailComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', redirectTo: 'index', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                song_list_component_1.SongListComponent,
                song_detail_component_1.SongDetailComponent,
                sort_directive_1.SortDirective
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(route)
            ],
            providers: [
                data_service_1.DataService,
                pager_service_1.PagerService,
                song_list_resolver_1.SongListResolver,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: add_header_interceptor_1.AddHeaderInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: cache_interceptor_1.CacheInterceptor, multi: true }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map