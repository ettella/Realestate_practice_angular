import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HirdetesekComponent } from './hirdetesek/hirdetesek.component';
import { MyitooldalComponent } from './myitooldal/myitooldal.component';
import { UjHirdetesComponent } from './uj-hirdetes/uj-hirdetes.component';

const routes: Routes = [{
  path: '', component: MyitooldalComponent
},
{
  path: 'offers', component: HirdetesekComponent
},
{
  path: 'newad', component: UjHirdetesComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
