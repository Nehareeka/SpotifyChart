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
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());
exports.HttpCacheService = HttpCacheService;
//# sourceMappingURL=http-cache.service.js.map