import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selamat Datang';
  description = 'Untuk Dapat Mengakses Lagu, silahkan sign in terlebih dahulu :)'
  clientId = '3926f1313b24408a942e4cd64a7b74cd'
  responseType = 'code'
  redirectUri = 'http%3A%2F%2Flocalhost%3A4200%2Fcallback'
  scope = 'user-read-email user-read-birthdate playlist-modify-public playlist-read-private'
}