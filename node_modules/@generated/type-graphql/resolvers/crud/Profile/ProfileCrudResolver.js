"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProfileArgs_1 = require("./args/AggregateProfileArgs");
const CreateManyProfileArgs_1 = require("./args/CreateManyProfileArgs");
const CreateProfileArgs_1 = require("./args/CreateProfileArgs");
const DeleteManyProfileArgs_1 = require("./args/DeleteManyProfileArgs");
const DeleteProfileArgs_1 = require("./args/DeleteProfileArgs");
const FindFirstProfileArgs_1 = require("./args/FindFirstProfileArgs");
const FindManyProfileArgs_1 = require("./args/FindManyProfileArgs");
const FindUniqueProfileArgs_1 = require("./args/FindUniqueProfileArgs");
const GroupByProfileArgs_1 = require("./args/GroupByProfileArgs");
const UpdateManyProfileArgs_1 = require("./args/UpdateManyProfileArgs");
const UpdateProfileArgs_1 = require("./args/UpdateProfileArgs");
const UpsertProfileArgs_1 = require("./args/UpsertProfileArgs");
const helpers_1 = require("../../../helpers");
const Profile_1 = require("../../../models/Profile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProfile_1 = require("../../outputs/AggregateProfile");
const ProfileGroupBy_1 = require("../../outputs/ProfileGroupBy");
let ProfileCrudResolver = class ProfileCrudResolver {
    async profile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async profiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProfile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProfile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProfileArgs_1.FindUniqueProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "profile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProfileArgs_1.FindFirstProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "findFirstProfile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Profile_1.Profile], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProfileArgs_1.FindManyProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "profiles", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProfileArgs_1.CreateProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "createProfile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProfileArgs_1.CreateManyProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "createManyProfile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProfileArgs_1.DeleteProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "deleteProfile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProfileArgs_1.UpdateProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "updateProfile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProfileArgs_1.DeleteManyProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "deleteManyProfile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProfileArgs_1.UpdateManyProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "updateManyProfile", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProfileArgs_1.UpsertProfileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProfileCrudResolver.prototype, "upsertProfile", null);
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
], ProfileCrudResolver.prototype, "aggregateProfile", null);
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
], ProfileCrudResolver.prototype, "groupByProfile", null);
ProfileCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], ProfileCrudResolver);
exports.ProfileCrudResolver = ProfileCrudResolver;
