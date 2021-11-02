import { Component } from '@angular/core';

import {
  Action,
  Reducer,
  Store,
  createStore,
} from 'redux'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// interface AppState{
//   messages: string[],
// }

// let initialState: AppState = { 
//   messages: [],
// }


export class AppComponent {
  title = 'redux-test';
}
