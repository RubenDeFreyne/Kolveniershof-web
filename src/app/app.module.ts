// everything still has to be put in seperate modules
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDialogModule, MatCheckboxModule, MatSliderModule, MatSlideToggleModule,
  MatRadioModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationModule } from './authentication/authentication.module';
import { httpInterceptorProviders } from './http-interceptors';
import { PictoAgendaComponent } from './picto-agenda/picto-agenda.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkdayDataService } from './services/workday.data.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { WeekdayComponent } from './weekday/weekday.component';
import { WeekendComponent } from './weekend/weekend.component';
import { WeekendDayComponent } from './weekend/weekend-day/weekend-day.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { environment } from '../environments/environment';
import { ColorPickerModule } from 'ngx-color-picker';
import localeNl from '@angular/common/locales/nl';
import { WorkdayTemplateDataService } from './services/workdayTemplate.data.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {BusDataService} from './services/bus.data.service';
import {LunchDataService} from './services/lunch.data.service';
import {ActivityDataService} from './services/activity.data.service';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {ScheduleModule} from './schedule/schedule.module';
import {PictoActivityComponent} from './weekday/activity/picto-activity.component';

registerLocaleData(localeNl, 'nl-BE');

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PictoAgendaComponent,
    WeekdayComponent,
    WeekendComponent,
    WeekendDayComponent,
    PictoActivityComponent,
    HolidayComponent
  ],
  imports: [
    FlexLayoutModule,
    MatDividerModule,
    CommonModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FontAwesomeModule,
    MatListModule,
    ScrollingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    ColorPickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    ImgFallbackModule,
    MatAutocompleteModule,
    MatRadioModule,
    AuthenticationModule,
    SharedModule,
    AdminModule,
    ScheduleModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'nl-BE'},
    httpInterceptorProviders,
    DatePipe,
    MatDatepickerModule,
    WorkdayDataService,
    WorkdayTemplateDataService,
    ActivityDataService,
    BusDataService,
    LunchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
