import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import {HomeComponent} from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [

    { path: '',   component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', component: HomeComponent} //should be last route.
  ]
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  

