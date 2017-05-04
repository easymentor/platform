"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var ConsultoresPropostaComponent = (function () {
    function ConsultoresPropostaComponent(route, http) {
        this.route = route;
        this.http = http;
        this.proposta = {};
        this.enviado = false;
    }
    ConsultoresPropostaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParamSubscribe = this.route.params.subscribe(function (params) {
            _this.http.get("/api/entity/consultores/" + params['consultorId']).toPromise().then(function (res) {
                _this.consultor = res.json();
            }).catch(function (reason) {
                console.error(reason);
            });
        });
    };
    ConsultoresPropostaComponent.prototype.ngOnDestroy = function () {
        this.routeParamSubscribe.unsubscribe();
    };
    ConsultoresPropostaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.http.post("/api/entity/propostas", {
            consultorId: this.consultor._id,
            data: new Date(),
            projeto: this.proposta.projeto,
            necessidade: this.proposta.necessidade,
            status: 'Aguardando aprovação'
        }).toPromise().then(function (res) {
            console.log('Sucesso');
            _this.enviado = true;
        }).catch(function (reason) {
            console.error(reason);
        });
    };
    ConsultoresPropostaComponent = __decorate([
        core_1.Component({
            selector: 'consultores-proposta-cmp',
            moduleId: module.id,
            templateUrl: 'consultores-proposta.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http])
    ], ConsultoresPropostaComponent);
    return ConsultoresPropostaComponent;
}());
exports.ConsultoresPropostaComponent = ConsultoresPropostaComponent;
//# sourceMappingURL=consultores-proposta.component.js.map