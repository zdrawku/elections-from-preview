import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { CandidatesAndVotesComponent } from './candidates-and-votes/candidates-and-votes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'candidates-and-votes', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'candidates-and-votes',
    component: CandidatesAndVotesComponent,
    data: {
      text: 'Candidates and votes'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
