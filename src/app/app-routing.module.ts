import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'main', loadChildren:()=>import('./main/main.module').then (m=> m.MainModule)},
  {path : 'home', component:HomeComponent},
  {path : '', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent},
  {path : 'details', component:DetailsComponent},
  {path : 'javascriptEx', component:JavascriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
