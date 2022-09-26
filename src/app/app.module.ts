import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyitooldalComponent } from './myitooldal/myitooldal.component';
import { HirdetesekComponent } from './hirdetesek/hirdetesek.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UjHirdetesComponent } from './uj-hirdetes/uj-hirdetes.component';

import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MyitooldalComponent,
    HirdetesekComponent,
    UjHirdetesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
