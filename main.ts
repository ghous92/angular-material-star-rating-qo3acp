import "./polyfills";

import { CdkTableModule } from "@angular/cdk/table";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTooltipModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToDoListComponent } from "./app/to-do-list/to-do-list.component";
import { StarRatingComponent } from "./app/star-rating/star-rating.component";
import { AppComponent } from "./app/app/app.component";

@NgModule({
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, StarRatingComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
