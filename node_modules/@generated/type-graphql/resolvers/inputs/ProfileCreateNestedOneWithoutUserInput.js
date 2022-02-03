"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileCreateOrConnectWithoutUserInput_1 = require("../inputs/ProfileCreateOrConnectWithoutUserInput");
const ProfileCreateWithoutUserInput_1 = require("../inputs/ProfileCreateWithoutUserInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileCreateNestedOneWithoutUserInput = class ProfileCreateNestedOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput)
], ProfileCreateNestedOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateOrConnectWithoutUserInput_1.ProfileCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateOrConnectWithoutUserInput_1.ProfileCreateOrConnectWithoutUserInput)
], ProfileCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], ProfileCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
ProfileCreateNestedOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], ProfileCreateNestedOneWithoutUserInput);
exports.ProfileCreateNestedOneWithoutUserInput = ProfileCreateNestedOneWithoutUserInput;
