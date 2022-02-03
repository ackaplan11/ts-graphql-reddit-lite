"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByProfileArgs_1 = require("./args/GroupByProfileArgs");
const Profile_1 = require("../../../models/Profile");
const ProfileGroupBy_1 = require("../../outputs/ProfileGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProfileResolver = class GroupByProfileResolver {
    async groupByProfile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ProfileGroupBy_1.ProfileGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProfileArgs_1.GroupByProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByProfileResolver.prototype, "groupByProfile", null);
GroupByProfileResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], GroupByProfileResolver);
exports.GroupByProfileResolver = GroupByProfileResolver;
