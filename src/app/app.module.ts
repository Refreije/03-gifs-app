import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; // import

import { AppRoutingModule } from './app-routing.module';
import { GifsModule } from './gifs/gifs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    SharedModule
  ],
  providers: [
    provideHttpClient() //usage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
