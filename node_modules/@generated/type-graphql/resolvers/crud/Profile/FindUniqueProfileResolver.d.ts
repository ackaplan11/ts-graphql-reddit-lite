import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProfileArgs } from "./args/FindUniqueProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class FindUniqueProfileResolver {
    profile(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProfileArgs): Promise<Profile | null>;
}
