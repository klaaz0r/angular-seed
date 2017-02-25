import { Component } from '@angular/core';
import * as R from 'ramda';
import { log } from '../../logger';
const { map } = R;

@Component({

})
export class Home {
    constructor() {
        log('info','hello world')
    }
}
