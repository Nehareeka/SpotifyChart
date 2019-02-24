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
var SortDirective = /** @class */ (function () {
    function SortDirective() {
        this.sortChanged = new core_1.EventEmitter();
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
        core_1.Input(),
        __metadata("design:type", Object)
    ], SortDirective.prototype, "appSort", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SortDirective.prototype, "column", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SortDirective.prototype, "sortChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SortDirective.prototype, "config", null);
    __decorate([
        core_1.HostListener('click', ['$event', '$target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SortDirective.prototype, "onToggleSort", null);
    SortDirective = __decorate([
        core_1.Directive({
            selector: '[appSort]'
        })
    ], SortDirective);
    return SortDirective;
}());
exports.SortDirective = SortDirective;
//# sourceMappingURL=sort.directive.js.map