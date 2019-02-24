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
var data_service_1 = require("../shared/data.service");
var pager_service_1 = require("../shared/pager.service");
var router_1 = require("@angular/router");
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
        this.topSongs = this.stock.topSongs;
        this.allSongs = this.stock.allSongs;
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
            { title: 'Rank', sort: '' },
            { title: 'Name', sort: '' },
            { title: 'Artist', sort: '' },
        ];
        this.config = {
            sorting: { columns: this.columns }
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
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
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
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        // let data = this.moviesInfo.slice(0);
        var sortedData = this.changeSort(this.topSongs, this.config);
        this.setPage(1, sortedData);
    };
    SongListComponent = __decorate([
        core_1.Component({
            selector: "song-list",
            templateUrl: "song-list.component.html",
            styleUrls: ["song-list.component.css"]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, pager_service_1.PagerService, router_1.ActivatedRoute])
    ], SongListComponent);
    return SongListComponent;
}());
exports.SongListComponent = SongListComponent;
//# sourceMappingURL=song-list.component.js.map