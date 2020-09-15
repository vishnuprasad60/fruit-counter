import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: number;
  constructor(private toastr: ToastrService) {
    this.login = 0;
  }
  getLoginResponse(response: number): void{
    this.login = response;
  }
}
