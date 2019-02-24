"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var http_cache_service_1 = require("./http-cache.service");
var operators_1 = require("rxjs/operators");
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
            return rxjs_1.of(cachedResponse);
        }
        //send request to server and add response to cache
        return next.handle(req)
            .pipe(operators_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                _this.cache.put(req.url, event);
            }
        }));
    };
    CacheInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_cache_service_1.HttpCacheService])
    ], CacheInterceptor);
    return CacheInterceptor;
}());
exports.CacheInterceptor = CacheInterceptor;
//# sourceMappingURL=cache.interceptor.js.map