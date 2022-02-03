"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileWhereUniqueInput_1 = require("../../../inputs/ProfileWhereUniqueInput");
let FindUniqueProfileArgs = class FindUniqueProfileArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], FindUniqueProfileArgs.prototype, "where", void 0);
FindUniqueProfileArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueProfileArgs);
exports.FindUniqueProfileArgs = FindUniqueProfileArgs;
