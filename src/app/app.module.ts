import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BindingComponent } from 'src/learning/binding/binding.component';
import { TrackbyComponent } from 'src/learning/binding/trackby.component';
import { DIModule } from 'src/learning/di/di.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,BindingComponent,TrackbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,DIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
