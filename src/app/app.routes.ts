import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'dashboard', component:DashboardComponent },
    {path: 'detail/:id', component:HeroDetaliComponent }
]

export const ROUTINGS = RouterModule.forRoot(routes);

