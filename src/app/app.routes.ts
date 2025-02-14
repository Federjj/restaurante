import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'dashboard', component: DashboardComponent}
];
