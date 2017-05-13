import { clientId, responseType, redirectUri, scope } from './../constant';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Selamat Datang';
  description = 'Untuk Dapat Mengakses Lagu, silahkan sign in terlebih dahulu :)'
  clientId = clientId
  responseType = responseType
  redirectUri = redirectUri
  scope = scope
}
