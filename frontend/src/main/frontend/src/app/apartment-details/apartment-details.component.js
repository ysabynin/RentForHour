"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var ApartmentDetailsComponent = (function () {
    function ApartmentDetailsComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.max = 10;
        this.rate = 7;
        this.isReadonly = true;
    }
    ApartmentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    ApartmentDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ApartmentDetailsComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    return ApartmentDetailsComponent;
}());
__decorate([
    core_1.Input()
], ApartmentDetailsComponent.prototype, "hero");
ApartmentDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-apartment-details',
        templateUrl: './apartment-details.component.html',
        styleUrls: ['./apartment-details.component.css']
    })
], ApartmentDetailsComponent);
exports.ApartmentDetailsComponent = ApartmentDetailsComponent;
//# sourceMappingURL=apartment-details.component.js.map