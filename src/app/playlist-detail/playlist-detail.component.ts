import { Component, Input } from '@angular/core';
import { PlayList } from '../models/playlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent {

  @Input()
  playlist: PlayList

  constructor(private router: Router) { }

  onSelect(playlist: PlayList) {
    this.router.navigate(['/track', playlist.id]);
  }

}
