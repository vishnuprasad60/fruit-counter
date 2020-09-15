import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private authData: any;
  constructor() { }
  getAuthData(): object {
    this.authData = {
      user1 : {
        name: 'Admin',
        permission: 'all',
        password: 'Admin',
      },
      user2 : {
        name: 'MyName',
        permission: 'none',
        password: 'test',
      }
    };
    return this.authData;
  }
  validate(username: string, password: string): number {
    let selectedUser: any;
    if(username === this.authData.user1.name && password === this.authData.user1.password) {
    selectedUser = this.authData.user1;
    }
    else if(username === this.authData.user2.name && password === this.authData.user2.password){
      selectedUser = this.authData.user2;
    }
    if(selectedUser){
      if(selectedUser.permission === 'all'){
        return 1;
      }
      else{
        return 0;
      }
    }
    else{
      return -1;
    }
  }
  getPosition(): void{
  }
}
