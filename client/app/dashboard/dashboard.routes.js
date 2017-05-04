"use strict";
var home_component_1 = require('./home/home.component');
var consultores_component_1 = require('./consultores/consultores.component');
var consultores_proposta_component_1 = require('./consultores-proposta/consultores-proposta.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'consultores', component: consultores_component_1.ConsultoresComponent },
    { path: 'consultores-proposta/:consultorId', component: consultores_proposta_component_1.ConsultoresPropostaComponent },
    { path: 'propostas', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: '', redirectTo: 'consultores', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    consultores_component_1.ConsultoresComponent,
    consultores_proposta_component_1.ConsultoresPropostaComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
];
//# sourceMappingURL=dashboard.routes.js.map