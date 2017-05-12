import { Image } from './image';

export class PlayList {
    id: string;
    name: string;
    images: Image[];
}

export class PlayListResponse {
    items: PlayList[];
}