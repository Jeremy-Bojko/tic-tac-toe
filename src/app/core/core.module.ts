import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    UiModule,
    NavBarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
