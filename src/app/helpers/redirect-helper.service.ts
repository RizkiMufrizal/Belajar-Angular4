import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RedirectHelperService {

  constructor(private router: Router) { }

  redirectNotAuthorization() {
    this.router.navigate(['/home'])
  }

}
