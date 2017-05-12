import { Injectable } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class SessionManagerService {

  @LocalStorage('access_token')
  private accessToken;

  constructor(private localStorageService: LocalStorageService) { }

  getAccessToken(): string {
    return this.accessToken
  }

  saveUserId(userId: string) {
    this.localStorageService.store('userId', userId)
  }

  isAccessToken(): boolean {
    return this.accessToken != null ? true : false
  }
}
