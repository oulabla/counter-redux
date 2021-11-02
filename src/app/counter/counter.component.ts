import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { AppState } from '../app.state';
import { AppStore } from '../app.store';
import * as CounterActions from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  constructor(
    @Inject(AppStore) private store: Store<AppState>
  ) { 
    store.subscribe(()=> this.readState())
  }

  readState(){
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment(){
    this.store.dispatch(CounterActions.increment())
  }

  decrement(){
    this.store.dispatch(CounterActions.decrement())
  }

  ngOnInit(): void {
  }

}
