"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutProfileInput_1 = require("../inputs/UserCreateOrConnectWithoutProfileInput");
const UserCreateWithoutProfileInput_1 = require("../inputs/UserCreateWithoutProfileInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutProfileInput = class UserCreateNestedOneWithoutProfileInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput)
], UserCreateNestedOneWithoutProfileInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProfileInput_1.UserCreateOrConnectWithoutProfileInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutProfileInput_1.UserCreateOrConnectWithoutProfileInput)
], UserCreateNestedOneWithoutProfileInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutProfileInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutProfileInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutProfileInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutProfileInput);
exports.UserCreateNestedOneWithoutProfileInput = UserCreateNestedOneWithoutProfileInput;
