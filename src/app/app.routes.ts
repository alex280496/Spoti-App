import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES:Routes=[
    {path:'home',component:HomeComponent},
    {path:'search',component:SearchComponent},
    {path:'',pathMatch:'full',redirectTo:'home'}, //esto quiere decir  que cualquier otra ruta me deririja al home
    {path:'**',pathMatch:'full',redirectTo:'home'}
];