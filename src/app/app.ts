import { Component } from '@angular/core';
import { AppStore } from './app-store';
import { log } from '../logger';

@Component({})
export class App {
    constructor(public appStore: AppStore) {
        log('info', 'Hello Angular 2 Webpack 2')
    }
}
