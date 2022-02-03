"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutProfileInput_1 = require("../inputs/UserCreateOrConnectWithoutProfileInput");
const UserCreateWithoutProfileInput_1 = require("../inputs/UserCreateWithoutProfileInput");
const UserUpdateWithoutProfileInput_1 = require("../inputs/UserUpdateWithoutProfileInput");
const UserUpsertWithoutProfileInput_1 = require("../inputs/UserUpsertWithoutProfileInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutProfileInput = class UserUpdateOneRequiredWithoutProfileInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProfileInput_1.UserCreateOrConnectWithoutProfileInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutProfileInput_1.UserCreateOrConnectWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutProfileInput_1.UserUpsertWithoutProfileInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutProfileInput_1.UserUpsertWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutProfileInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutProfileInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProfileInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutProfileInput);
exports.UserUpdateOneRequiredWithoutProfileInput = UserUpdateOneRequiredWithoutProfileInput;
