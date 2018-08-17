import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuPage } from './menu';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: MenuPage }])
  ],
  declarations: [MenuPage]
})
export class SearchPageModule {}
