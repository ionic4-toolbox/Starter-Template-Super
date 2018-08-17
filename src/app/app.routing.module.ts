import { NgModule }                         from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',       loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home',    loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list',    loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'tabs',    loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'about',   loadChildren: './pages/about/about.module#AboutPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
