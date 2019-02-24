import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Song, SongData } from "./song";

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private http: HttpClient) {}

    public songs: Song[] = [];
    loadSongs(): Observable<SongData> {
        return this.http.get<SongData>("/api/song")
        .pipe(map((data: SongData) => {
            this.songs=data.AllSongs;
            return data;
        }));
    }
    getSongDetails(symbol: string): Observable<Song[]> {
        return this.http.get(`/api/song/${symbol}`)
            .pipe(map((data: Song[]) => {
                return data;
            }));
    }
}