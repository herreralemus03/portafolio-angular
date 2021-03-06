import { SearchComponent } from './pages/search/search.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item/:productId', component: ItemComponent},
  { path: 'search/:termino', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
