import { Component, Input } from '@angular/core';
import { PlayList } from '../models/playlist';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent {

  @Input()
  playlist: PlayList

}
