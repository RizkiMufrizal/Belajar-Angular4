import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from '../models/profile';
import { SessionManagerService } from '../helpers/session-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProfileService, SessionManagerService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private sessionManagerService: SessionManagerService
  ) { }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe((data: Profile) => {
        this.sessionManagerService.saveUserId(data.id);
      });
  }

}
