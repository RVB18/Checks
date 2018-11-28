import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import '../polyfills';
import { UserService } from './services/user.service';
import {DataService} from './services/data.service';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,

  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,

  MatExpansionModule,
  MatGridListModule,

  MatListModule,
  MatMenuModule,
  MatNativeDateModule,

  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,


  MatTabsModule,

  MatTooltipModule,
  MatStepperModule,




  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule,



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
import { AddComponent } from './add/add.component';


import { MattableaddComponent } from './mattableadd/mattableadd.component';
import { MattabledeleteComponent } from './mattabledelete/mattabledelete.component';
import { MattableeditComponent } from './mattableedit/mattableedit.component';


import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { TableviewComponent } from './tableview/tableview.component';



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
  declarations: []
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    ChequeslistComponent,
    VendorComponent,
    AddComponent,
    VendorchecksdetailsComponent,
    SinglechequeprintComponent,
    MulticheckComponent, Multicheck2Component,
    TabletestComponent, AddComponent, MattableaddComponent, MattabledeleteComponent, MattableeditComponent,TableviewComponent,
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


MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
MatTableModule, MatToolbarModule,




  ],

  entryComponents: [
      AddComponent,
      MattableeditComponent,

      MattabledeleteComponent
    ],


  providers: [UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
