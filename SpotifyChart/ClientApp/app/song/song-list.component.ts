import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../shared/data.service";
import { PagerService } from '../shared/pager.service';
import { SortDirective } from '../directives/sort.directive';
import { Song, SongData } from "../shared/song";
import { Route, ActivatedRoute } from "@angular/router";

@Component({
    selector: "song-list",
    templateUrl: "song-list.component.html",
    styleUrls: ["song-list.component.css"]
})
export class SongListComponent implements OnInit {
    
    constructor(private data: DataService, private _pagerService: PagerService, private route: ActivatedRoute) {
    }

    public stock: SongData;
    public topSongs: Song[];
    public allSongs: Song[];
    // paged items
    pagedItems: Song[];
    public columns: Array<any> = [];
    // pager object
    pager: any = {};
    public config: any;

    ngOnInit(): void {
        this.stock = this.route.snapshot.data.initData;
        this.topSongs=this.stock.TopSongs;
        this.allSongs=this.stock.AllSongs;
        this.setPage(1);
        this.initTable(); 
    } 

    setPage(page: number, data: Song[] = this.topSongs) {
        // get pager object from service
        this.pager = this._pagerService.getPager(data.length, page);

        // get current page of items
        this.pagedItems = data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    initTable() {
        this.columns = [
            { title: 'rank', sort: false},
            { title: 'name', sort: '', filtering: { filterString: '', placeholder: 'Search by Name' }},
            { title: 'artist', sort: '', filtering: { filterString: '', placeholder: 'Search by Artist' }},
        ];
        this.config = {
            sorting: { columns: this.columns },
            filtering: { filterString: '' }
        };
    }

    public get configColumns(): any {
        let sortColumns: Array<any> = [];

        this.columns.forEach((column: any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });

        return { columns: sortColumns };
    }

    public changeFilter(data: any, config: any): any {
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
          if (column.filtering) {
            filteredData = filteredData.filter((item: any) => {
              return item[column.title].toString().match(column.filtering.filterString);
            });
          }
        });
    
        if (!config.filtering) {
          return filteredData;
        }
    
        if (config.filtering.columnName) {
          return filteredData.filter((item: any) =>
            item[config.filtering.columnName].match(this.config.filtering.filterString));
        }
    
        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
          let flag = false;
          this.columns.forEach((column: any) => {
            if (item[column.title].toString().match(this.config.filtering.filterString)) {
              flag = true;
            }
          });
          if (flag) {
            tempArray.push(item);
          }
        });
        filteredData = tempArray;
    
        return filteredData;
      }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].title;
                sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }
        if(columnName==="rank"){
            return data.sort((previous: any, current: any) => {
                if (previous[columnName] > current[columnName]) {
                    return sort === 'desc' ? -1 : 1;
                } else if (previous[columnName] < current[columnName]) {
                    return sort === 'asc' ? -1 : 1;
                }
                return 0;
            });
        }
        // simple sorting
        return data.sort((previous: any, current: any) => {
            if (previous[columnName].toString().toLowerCase() > current[columnName].toString().toLowerCase()) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName].toString().toLowerCase() < current[columnName].toString().toLowerCase()) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

    public onChangeTable(column: any): void {
        this.columns.forEach((col: any) => {
            if (col.title !== column.title) {
                col.sort = '';
            }
        });
        this.tableChanged({ sorting: this.configColumns });
    }

    public tableChanged(config: any) {
        if (config.filtering) {
          Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
          Object.assign(this.config.sorting, config.sorting);
        }
        let filteredData = this.changeFilter(this.allSongs, this.config);
        let sortedData;
        if(JSON.stringify(filteredData)===JSON.stringify(this.allSongs)){
            sortedData = this.changeSort(this.topSongs, this.config);
        }
        else {
            sortedData = this.changeSort(filteredData, this.config);
        }
        this.setPage(1, sortedData);
      }
}