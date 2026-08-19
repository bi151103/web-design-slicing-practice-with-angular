import { Routes } from '@angular/router';
import ListComponent from './list/list.component';
import JobCardsComponent from './job-cards/job-cards.component';
import BuySubscriptionSectionComponent from './buy-subscription-section/buy-subscription-section.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'job-cards',
    component: JobCardsComponent,
  },
  {
    path: 'buy-subscription-section',
    component: BuySubscriptionSectionComponent,
  },
];
