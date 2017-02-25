import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import HomeModule from './home';

export const ROUTER_CONFIG = [
    { path: '', loadChildren: () => HomeModule }
];

@NgModule({
    providers: [
    ],
    declarations: [
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
    ],
})
export default class AppModule {
    static routes = ROUTER_CONFIG;
}
