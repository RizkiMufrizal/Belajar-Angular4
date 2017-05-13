import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionManagerService } from '../helpers/session-manager.service';
import { RedirectHelperService } from '../helpers/redirect-helper.service';
import { TrackService } from './track.service';
import { Track, TrackResponse, Item } from '../models/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
  providers: [SessionManagerService, RedirectHelperService, TrackService]
})
export class TrackComponent implements OnInit {

  constructor(
    private redirectHelperService: RedirectHelperService,
    private trackService: TrackService,
    private activatedRoute: ActivatedRoute
  ) { }

  items: Item[]

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.trackService.getTracksByUserIdAndPlaylistId(params.playlistId))
      .subscribe((data: TrackResponse) => {
        this.items = data.items;
      }, error => {
        this.redirectHelperService.redirectNotAuthorization();
      });
  }

}
