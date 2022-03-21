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
    IconSourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ScrollingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
