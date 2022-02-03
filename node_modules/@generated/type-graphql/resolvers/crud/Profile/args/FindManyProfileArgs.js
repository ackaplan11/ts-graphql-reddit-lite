"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileOrderByWithRelationInput_1 = require("../../../inputs/ProfileOrderByWithRelationInput");
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
const ProfileWhereUniqueInput_1 = require("../../../inputs/ProfileWhereUniqueInput");
const ProfileScalarFieldEnum_1 = require("../../../../enums/ProfileScalarFieldEnum");
let FindManyProfileArgs = class FindManyProfileArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereInput_1.ProfileWhereInput)
], FindManyProfileArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyProfileArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], FindManyProfileArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyProfileArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyProfileArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProfileScalarFieldEnum_1.ProfileScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyProfileArgs.prototype, "distinct", void 0);
FindManyProfileArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyProfileArgs);
exports.FindManyProfileArgs = FindManyProfileArgs;
