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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
const formateur_entity_1 = require("../formateur/formateur.entity");
const typeorm_1 = require("typeorm");
let Formation = class Formation {
    id;
    titre;
    description;
    dateDebut;
    dateFin;
    formateur;
    participants;
};
exports.Formation = Formation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Formation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Formation.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Formation.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Formation.prototype, "dateDebut", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Formation.prototype, "dateFin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => formateur_entity_1.Formateur, (formateur) => formateur.formations),
    __metadata("design:type", formateur_entity_1.Formateur)
], Formation.prototype, "formateur", void 0);
exports.Formation = Formation = __decorate([
    (0, typeorm_1.Entity)()
], Formation);
//# sourceMappingURL=formation.entity.js.map