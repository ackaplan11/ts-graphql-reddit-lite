import { GraphQLResolveInfo } from "graphql";
import { FindManyProfileArgs } from "./args/FindManyProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class FindManyProfileResolver {
    profiles(ctx: any, info: GraphQLResolveInfo, args: FindManyProfileArgs): Promise<Profile[]>;
}
