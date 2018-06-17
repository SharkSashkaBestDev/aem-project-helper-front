import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentService } from './service/component.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path: '', component: ComponentComponent},
      {path: 'home', redirectTo: ''},
      {path: 'not-found', component: ErrorPageComponent, data: {'message': 'Page not found!'}},
      {path: '**', redirectTo: 'not-found'}
    ])
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
