import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodComponent } from './components/food/food.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { StoreModule } from '@ngrx/store';
import { food_reducer } from './components/food.reducer';
import { FormsModule } from '@angular/forms';

import { FoodEffects } from './components/food-effect';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({foods: food_reducer}),
    EffectsModule.forRoot([FoodEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
