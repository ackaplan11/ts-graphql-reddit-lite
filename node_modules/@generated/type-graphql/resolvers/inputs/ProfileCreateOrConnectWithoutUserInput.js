"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileCreateWithoutUserInput_1 = require("../inputs/ProfileCreateWithoutUserInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileCreateOrConnectWithoutUserInput = class ProfileCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], ProfileCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput)
], ProfileCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ProfileCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], ProfileCreateOrConnectWithoutUserInput);
exports.ProfileCreateOrConnectWithoutUserInput = ProfileCreateOrConnectWithoutUserInput;
