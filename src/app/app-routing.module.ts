import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsDetailComponent } from './templates/champions-detail/champions-detail.component';
import { ChampionsComponent } from './templates/champions/champions.component';

const routes: Routes = [
  { path: '', component: ChampionsComponent },
  { path: ':id', component: ChampionsDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
