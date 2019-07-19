import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicecComponent } from './servicec/servicec.component';
import { ServicenameService } from './servicemodel/servicename.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicenameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
