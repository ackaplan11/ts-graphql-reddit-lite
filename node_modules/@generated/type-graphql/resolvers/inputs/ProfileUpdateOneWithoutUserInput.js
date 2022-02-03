"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileCreateOrConnectWithoutUserInput_1 = require("../inputs/ProfileCreateOrConnectWithoutUserInput");
const ProfileCreateWithoutUserInput_1 = require("../inputs/ProfileCreateWithoutUserInput");
const ProfileUpdateWithoutUserInput_1 = require("../inputs/ProfileUpdateWithoutUserInput");
const ProfileUpsertWithoutUserInput_1 = require("../inputs/ProfileUpsertWithoutUserInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileUpdateOneWithoutUserInput = class ProfileUpdateOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput)
], ProfileUpdateOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateOrConnectWithoutUserInput_1.ProfileCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateOrConnectWithoutUserInput_1.ProfileCreateOrConnectWithoutUserInput)
], ProfileUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileUpsertWithoutUserInput_1.ProfileUpsertWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileUpsertWithoutUserInput_1.ProfileUpsertWithoutUserInput)
], ProfileUpdateOneWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ProfileUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ProfileUpdateOneWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], ProfileUpdateOneWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput)
], ProfileUpdateOneWithoutUserInput.prototype, "update", void 0);
ProfileUpdateOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], ProfileUpdateOneWithoutUserInput);
exports.ProfileUpdateOneWithoutUserInput = ProfileUpdateOneWithoutUserInput;
