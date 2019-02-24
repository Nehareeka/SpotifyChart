"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Song = /** @class */ (function () {
    function Song(name, artist, danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration, timeSignature, rank) {
        this.name = name;
        this.artist = artist;
        this.danceability = danceability;
        this.energy = energy;
        this.key = key;
        this.loudness = loudness;
        this.mode = mode;
        this.speechiness = speechiness;
        this.acousticness = acousticness;
        this.instrumentalness = instrumentalness;
        this.liveness = liveness;
        this.valence = valence;
        this.tempo = tempo;
        this.duration = duration;
        this.timeSignature = timeSignature;
        this.rank = rank;
    }
    return Song;
}());
exports.Song = Song;
//# sourceMappingURL=song.js.map