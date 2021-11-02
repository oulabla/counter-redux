import { InjectionToken } from "@angular/core";
import { applyMiddleware, compose, createStore, Store, StoreEnhancer } from "redux";
import { Action } from "rxjs/internal/scheduler/Action";
import { AppState } from "./app.state";
import { counterReducer } from "./counter.reducer";
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

// const devtools: StoreEnhancer<AppState> = window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;
// const devtools: StoreEnhancer<AppState> =
//   window['devToolsExtension'] ?
//   window['devToolsExtension']() : f => f;

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
    let initState : AppState = { counter: 0 }
    return createStore<AppState, any, null, null>(counterReducer, devToolsEnhancer(
        {}
      ))
}

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
 ];