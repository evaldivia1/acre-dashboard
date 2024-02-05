import { Routes } from '@angular/router';
import { InscripcionsPageComponent } from './inscripcions/inscripcions.page/inscripcions.page.component';
import { HabilitatsPageComponent } from './habilitats/habilitats.page/habilitats.page.component';
import { AssessoramentPageComponent } from './assessorament/assessorament-page/assessorament-page.component';
import { AvaluacioPageComponent } from './avalucio/avaluacio-page/avaluacio-page.component';

export const routes: Routes = [
  { path: 'habilitats', component: HabilitatsPageComponent },
  { path: 'inscripcions', component: InscripcionsPageComponent },
  { path: 'assessorament', component: AssessoramentPageComponent },
  { path: 'avaluacio', component: AvaluacioPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'habilitats' },
];
