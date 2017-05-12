import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from '../models/profile';
import { SessionManagerService } from '../helpers/session-manager.service';
import { RedirectHelperService } from '../helpers/redirect-helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProfileService, SessionManagerService, RedirectHelperService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private sessionManagerService: SessionManagerService,
    private redirectHelperService: RedirectHelperService
  ) { }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe((data: Profile) => {
        this.sessionManagerService.saveUserId(data.id);
      }, error => {
        this.redirectHelperService.redirectNotAuthorization()
      });
  }

}
