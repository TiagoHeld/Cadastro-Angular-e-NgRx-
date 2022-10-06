import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ACTIONS, IFood, MyAppState, Action } from '../food.reducer';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Observable<Array<IFood>>


  

  constructor(private store: Store<MyAppState>) { 
    this.foods = store.select('foods');
  }

  ngOnInit() {
    this.store.dispatch({
      type: ACTIONS.GET_FOODS
    })
  }

  deleteFood(food:IFood): void {
    let deleteAction:Action={
      type: ACTIONS.REMOVE_FOOD,
      payload: food
    }

    this.store.dispatch(deleteAction);
  }

}
