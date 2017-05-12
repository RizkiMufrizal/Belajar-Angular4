import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { PlayListResponse } from '../models/playlist';
import { SessionManagerService } from '../helpers/session-manager.service';

@Injectable()
export class PlaylistService {

  constructor(
    private http: Http,
    @Inject(SessionManagerService) private sessionManagerService: SessionManagerService
  ) { }

  getPlayLists(): Observable<PlayListResponse> {
    let headers = new Headers({ 'Authorization': `Bearer ${this.sessionManagerService.getAccessToken()}` });
    let requestOpt = new RequestOptions({ headers: headers });

    return this.http.get('https://api.spotify.com/v1/me/playlists', requestOpt)
      .map((response: Response) => response.json())
      .catch(error => {
        if (error.status == 401) {
          return Observable.throw('error mas broe')
        }
      })
  }
}
