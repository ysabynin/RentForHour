"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var apartment_details_component_1 = require("./apartment-details.component");
var index_1 = require("ng2-bootstrap/index");
var forms_1 = require("@angular/forms");
var ApartmentDetailsModule = (function () {
    function ApartmentDetailsModule() {
    }
    return ApartmentDetailsModule;
}());
ApartmentDetailsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            index_1.CarouselModule,
            index_1.RatingModule
        ],
        declarations: [apartment_details_component_1.ApartmentDetailsComponent]
    })
], ApartmentDetailsModule);
exports.ApartmentDetailsModule = ApartmentDetailsModule;
//# sourceMappingURL=apartment-details.module.js.map