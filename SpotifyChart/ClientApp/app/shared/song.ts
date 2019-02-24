export class Song {

    constructor(
        public name: string,
        public artist: string,
        public danceability: number,
        public energy: number,
        public key: number,
        public loudness: number,
        public mode: number,
        public speechiness: number,
        public acousticness: number,
        public instrumentalness: number,
        public liveness: number,
        public valence: number,
        public tempo: number,
        public duration: number,
        public timeSignature: number,
        public rank: number
    ) {
    }
}

export interface SongData{
    TopSongs: Song[],
    AllSongs: Song[]
}