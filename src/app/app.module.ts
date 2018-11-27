import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import '../polyfills';
import { UserService } from './services/user.service';
//S
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChequeslistComponent } from './chequeslist/chequeslist.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorchecksdetailsComponent } from './vendorchecksdetails/vendorchecksdetails.component';
import { SinglechequeprintComponent } from './singlechequeprint/singlechequeprint.component';
import { MulticheckComponent } from './multicheck/multicheck.component';
import { CommonModule } from '@angular/common';
import { Multicheck2Component } from './multicheck2/multicheck2.component';
import { TabletestComponent } from './tabletest/tabletest.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [TabletestComponent]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    ChequeslistComponent,
    VendorComponent,
    VendorchecksdetailsComponent,
    SinglechequeprintComponent,
    MulticheckComponent, Multicheck2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
   MatNativeDateModule,
   FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
CommonModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
