import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SongData } from '../shared/song';
import { DataService } from '../shared/data.service';

@Injectable({providedIn: 'root'})
export class SongListResolver implements Resolve<SongData> {
    constructor(private dataService: DataService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SongData> {
        return this.dataService.loadSongs();
    }

}