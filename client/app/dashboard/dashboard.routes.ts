import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ConsultoresComponent } from './consultores/consultores.component';
import { ConsultoresPropostaComponent } from './consultores-proposta/consultores-proposta.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'consultores', component: ConsultoresComponent },
    { path: 'consultores-proposta/:consultorId', component: ConsultoresPropostaComponent },
    { path: 'propostas', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: '', redirectTo: 'consultores', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    ConsultoresComponent,
    ConsultoresPropostaComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
]
