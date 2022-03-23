import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageComponent } from './one-page/one-page.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { IconSourcesComponent } from './icon-sources/icon-sources.component';

const routes: Routes = [
  { path: '', component: OnePageComponent},
  { path: 'data-protection', component: DataProtectionComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'disclaimer', component: DisclaimerComponent},
  { path: 'icon-sources', component: IconSourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
