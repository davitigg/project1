import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { registerLocaleData } from '@angular/common';
import localeKa from '@angular/common/locales/ka';
import localeKaExtra from '@angular/common/locales/extra/ka';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeKa, 'ka-GE', localeKaExtra);

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
