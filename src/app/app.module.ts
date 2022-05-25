import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NpagefoundComponent } from './npagefound/npagefound.component';

import { ApproutingModule } from './approuting.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    NpagefoundComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    PagesModule,
    AuthModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
