import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { SessionManagerService } from '../helpers/session-manager.service';
import { TrackResponse } from '../models/track';

@Injectable()
export class TrackService {

  constructor(
    private http: Http,
    @Inject(SessionManagerService) private sessionManagerService: SessionManagerService
  ) { }

  getTracksByUserIdAndPlaylistId(playlistId: string): Observable<TrackResponse> {
    let headers = new Headers({ 'Authorization': `Bearer ${this.sessionManagerService.getAccessToken()}` });
    let requestOpt = new RequestOptions({ headers: headers });

    return this.http.get(`https://api.spotify.com/v1/users/${this.sessionManagerService.getUserId()}/playlists/${playlistId}/tracks`, requestOpt)
      .map((response: Response) => response.json())
      .catch(error => {
        if (error.status == 401) {
          return Observable.throw('error mas broe')
        }
      })
  }
}
