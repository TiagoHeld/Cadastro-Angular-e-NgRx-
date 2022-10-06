import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action, ACTIONS, IFood, MyAppState } from '../food.reducer';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food=<IFood>{};

  constructor(private store: Store<MyAppState>) { }

  ngOnInit() {
  }

  addFood(food:IFood) {
   let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({},food)
    }

    this.store.dispatch(addAction)

    this.food={id: null,name:"", description:"", color:"", group:""}

  }

 
}
