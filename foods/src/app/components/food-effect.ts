import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ACTIONS } from './food.reducer';



@Injectable()
export class FoodEffects {


    @Effect() getFood$:Observable<Action>=this.actions$.pipe(
        ofType(ACTIONS.GET_FOODS),
        mergeMap(action =>
            this.http.get("http://localhost:3000/foods").pipe(
                map(data=>({
                    type:ACTIONS.GET_FOODS_SUCCESS, 
                    payload: data})),
                catchError(()=>of({type:'GET_FOOD_FAILED'}))
            )
        )
    )
 
    constructor(
        private http: HttpClient,
        private actions$: Actions
    ){}
    

}