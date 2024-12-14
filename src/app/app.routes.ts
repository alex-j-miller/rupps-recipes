import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recipe/:id', component: RecipePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: '' },
];
