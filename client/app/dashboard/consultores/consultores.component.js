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
var ConsultoresComponent = (function () {
    function ConsultoresComponent(http) {
        this.http = http;
        this.consultores = {};
    }
    ConsultoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/api/entity/consultores").toPromise().then(function (res) {
            _this.consultores = {};
            res.json().forEach(function (consultor) {
                if (!_this.consultores.hasOwnProperty(consultor.data.tipo)) {
                    _this.consultores[consultor.data.tipo] = [];
                }
                _this.consultores[consultor.data.tipo].push(consultor);
            });
            console.log(_this.consultores);
        }).catch(function (reason) {
            console.error(reason);
        });
    };
    ConsultoresComponent = __decorate([
        core_1.Component({
            selector: 'consultores-cmp',
            moduleId: module.id,
            templateUrl: 'consultores.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConsultoresComponent);
    return ConsultoresComponent;
}());
exports.ConsultoresComponent = ConsultoresComponent;
//# sourceMappingURL=consultores.component.js.map