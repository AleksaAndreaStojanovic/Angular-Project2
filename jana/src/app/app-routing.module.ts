import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSingleComponent } from './components/car-single/car-single.component';
import { CarListingComponent } from './components/car-listing/car-listing.component';
import { AddcarComponent } from './components/addcar/addcar.component';

const routes: Routes = [
  {path: '', redirectTo:'cars',pathMatch:'full'},
  {path: 'cars',component:CarListingComponent},
  {path: 'cars/:id',component:CarSingleComponent},
  {path: 'addcar',component:AddcarComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
