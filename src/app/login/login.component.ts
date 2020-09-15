import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {DataService} from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  private authData: any;
  valid: number;
  @Output() eventEmitter = new EventEmitter();

  constructor(private toastr: ToastrService, private dataService: DataService) {
  }
  validate(): void {
    this.valid = this.dataService.validate(this.username, this.password);
    if (this.valid === 1){
        this.toastr.success('Logged in!');
   } else if (this.valid === 0){
        this.toastr.error('You are not authorized!');
    }
    else{
        this.toastr.error('Invalid Username/Password!');
    }
    this.eventEmitter.emit(this.valid);
  }

  ngOnInit(): void {
    this.authData = this.dataService.getAuthData();
  }

}
