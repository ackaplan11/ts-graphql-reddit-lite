import { GraphQLResolveInfo } from "graphql";
import { UpsertProfileArgs } from "./args/UpsertProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class UpsertProfileResolver {
    upsertProfile(ctx: any, info: GraphQLResolveInfo, args: UpsertProfileArgs): Promise<Profile>;
}
