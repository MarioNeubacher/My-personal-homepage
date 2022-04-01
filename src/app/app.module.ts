import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollingService } from './scrolling.service';
import { FooterComponent } from './footer/footer.component';
import { IconSourcesComponent } from './icon-sources/icon-sources.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { OnePageComponent } from './one-page/one-page.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarkmodeService } from './darkmode.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    DataProtectionComponent,
    MenuComponent,
    HomeComponent,
    PortfolioComponent,
    TechnologiesComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    IconSourcesComponent,
    DisclaimerComponent,
    OnePageComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-EN', //language by default when page loaded
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    ScrollingService,
    DarkmodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
