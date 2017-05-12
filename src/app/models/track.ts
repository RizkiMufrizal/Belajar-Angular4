import { Album } from './album';
import { Artist } from './artist';
export class TrackResponse {
    items: Item[];
}

export class Item {
    track: Track;
}

export class Track {
    album: Album;
    artists: Artist[];
    name: string;
    preview_url: string;
}