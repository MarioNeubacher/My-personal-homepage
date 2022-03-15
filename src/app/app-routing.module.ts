import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'data-protection', component: DataProtectionComponent},
  { path: 'home', component: HomeComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
