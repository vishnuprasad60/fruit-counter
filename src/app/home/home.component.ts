import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Fruit} from '../fruit';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruitStack: string[];
  count: number;
  fruits: Fruit[];

  constructor(private toastr: ToastrService, private dataService: DataService) {
    this.count = 0;
    this.fruitStack = [];
    this.fruits = [
      {id: 0, name: 'apple', count: 10},
      {id: 1, name: 'orange', count: 10},
      {id: 2, name: 'grapes', count: 10}];
  }

  onAdd(id: number): void{
    if(this.fruits[id].count!==0) {
      this.fruits[id].count--;
      this.fruitStack.push(this.fruits[id].name);
      this.count++;
    }
    else {
      this.toastr.error('No ' + this.fruits[id].name + 'left!');
    }
  }
  onRemove(id: number): void{
    const len: number = this.count;
    if(this.fruitStack[len - 1] === this.fruits[id].name) {
      this.fruitStack.pop();
      this.count--;
      this.fruits[id].count++;
    }
    else if(this.count === 0){
      this.toastr.error('Basket is empty!');
    }else{
      this.toastr.error('Wrong fruit chosen!');
    }
  }
  getLocation(): void{
    this.dataService.getPosition();
  }
  ngOnInit(): void {
  }
}
