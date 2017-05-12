import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.activeRoute.fragment.subscribe((params) => {
      this.localStorageService.store('access_token', params.split('&')[0].split('=')[1]);
      this.router.navigate(['/dashboard']);
    });
  }

}
