"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CabinetComponent = (function () {
    function CabinetComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.title = 'Tour of Heroes1';
    }
    ;
    CabinetComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    CabinetComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    CabinetComponent.prototype["delete"] = function (hero) {
        var _this = this;
        this.heroService["delete"](hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    CabinetComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    CabinetComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    CabinetComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return CabinetComponent;
}());
CabinetComponent = __decorate([
    core_1.Component({
        selector: 'app-cabinet',
        templateUrl: './cabinet.component.html',
        styleUrls: ['./cabinet.component.css']
    })
], CabinetComponent);
exports.CabinetComponent = CabinetComponent;
//# sourceMappingURL=cabinet.component.js.map