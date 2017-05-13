import { Component, Input } from '@angular/core';
import { Track } from '../models/track';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.css']
})
export class TrackDetailComponent {

  @Input()
  track: Track

  arrayArtistsToString(artists: Artist[]): string[] {
    return artists.map((data) => {
      return data.name
    });
  }
}
