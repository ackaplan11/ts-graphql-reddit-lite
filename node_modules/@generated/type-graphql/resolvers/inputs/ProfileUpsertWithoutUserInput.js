"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileCreateWithoutUserInput_1 = require("../inputs/ProfileCreateWithoutUserInput");
const ProfileUpdateWithoutUserInput_1 = require("../inputs/ProfileUpdateWithoutUserInput");
let ProfileUpsertWithoutUserInput = class ProfileUpsertWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput)
], ProfileUpsertWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput)
], ProfileUpsertWithoutUserInput.prototype, "create", void 0);
ProfileUpsertWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileUpsertWithoutUserInput", {
        isAbstract: true
    })
], ProfileUpsertWithoutUserInput);
exports.ProfileUpsertWithoutUserInput = ProfileUpsertWithoutUserInput;
