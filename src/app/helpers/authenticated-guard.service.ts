import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionManagerService } from './session-manager.service';

@Injectable()
export class AuthenticatedGuardService implements CanActivate {

  constructor(
    private router: Router,
    @Inject(SessionManagerService) private sessionManagerService: SessionManagerService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.sessionManagerService.isAccessToken()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

}
