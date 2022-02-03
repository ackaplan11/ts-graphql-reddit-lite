"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProfileArgs_1 = require("./args/AggregateProfileArgs");
const Profile_1 = require("../../../models/Profile");
const AggregateProfile_1 = require("../../outputs/AggregateProfile");
const helpers_1 = require("../../../helpers");
let AggregateProfileResolver = class AggregateProfileResolver {
    async aggregateProfile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProfile_1.AggregateProfile, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProfileArgs_1.AggregateProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateProfileResolver.prototype, "aggregateProfile", null);
AggregateProfileResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], AggregateProfileResolver);
exports.AggregateProfileResolver = AggregateProfileResolver;
