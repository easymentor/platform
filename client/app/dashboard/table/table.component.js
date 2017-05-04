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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var TableComponent = (function () {
    function TableComponent(http) {
        this.http = http;
        this.propostas = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/api/entity/propostas").toPromise().then(function (res) {
            _this.propostas = res.json();
            _this.propostas.forEach(function (proposta) {
                _this.http.get("/api/entity/consultores/" + proposta.data.consultorId).toPromise().then(function (res) {
                    proposta.consultor = res.json();
                }).catch(function (reason) {
                    console.error(reason);
                });
            });
            console.log(_this.propostas);
        }).catch(function (reason) {
            console.error(reason);
        });
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-cmp',
            moduleId: module.id,
            templateUrl: 'table.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map