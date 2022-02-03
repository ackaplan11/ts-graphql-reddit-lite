"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileUpdateInput_1 = require("../../../inputs/ProfileUpdateInput");
const ProfileWhereUniqueInput_1 = require("../../../inputs/ProfileWhereUniqueInput");
let UpdateProfileArgs = class UpdateProfileArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileUpdateInput_1.ProfileUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileUpdateInput_1.ProfileUpdateInput)
], UpdateProfileArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], UpdateProfileArgs.prototype, "where", void 0);
UpdateProfileArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProfileArgs);
exports.UpdateProfileArgs = UpdateProfileArgs;
