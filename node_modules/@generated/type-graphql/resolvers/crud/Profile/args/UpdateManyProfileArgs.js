"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileUpdateManyMutationInput_1 = require("../../../inputs/ProfileUpdateManyMutationInput");
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
let UpdateManyProfileArgs = class UpdateManyProfileArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileUpdateManyMutationInput_1.ProfileUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileUpdateManyMutationInput_1.ProfileUpdateManyMutationInput)
], UpdateManyProfileArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereInput_1.ProfileWhereInput)
], UpdateManyProfileArgs.prototype, "where", void 0);
UpdateManyProfileArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyProfileArgs);
exports.UpdateManyProfileArgs = UpdateManyProfileArgs;
