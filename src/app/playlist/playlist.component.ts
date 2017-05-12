import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../helpers/session-manager.service';
import { PlaylistService } from './playlist.service';
import { PlayListResponse, PlayList } from '../models/playlist';
import { RedirectHelperService } from '../helpers/redirect-helper.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [SessionManagerService, PlaylistService, RedirectHelperService]
})
export class PlaylistComponent implements OnInit {

  constructor(
    private redirectHelperService: RedirectHelperService,
    private playlistService: PlaylistService
  ) { }

  playlists: PlayList[]

  ngOnInit() {
    this.playlistService.getPlayLists()
      .subscribe((data: PlayListResponse) => {
        this.playlists = data.items
      }, error => {
        this.redirectHelperService.redirectNotAuthorization()
      });
  }

}
