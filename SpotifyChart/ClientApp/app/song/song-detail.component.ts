import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../shared/data.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../shared/song';

@Component({
    selector: "song-detail",
    templateUrl: "song-detail.component.html"
})
export class SongDetailComponent implements OnInit {
    name: string;
    song: Song;
    constructor(private data: DataService, private _route: ActivatedRoute, private _router: Router) {
    }
    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.name = params['name'];
        });
        this.song= this.data.songs.find(x=>x.name==this.name);
    }

    
    onBack(): void {
        this._router.navigate(['/index']);
    }

   
}