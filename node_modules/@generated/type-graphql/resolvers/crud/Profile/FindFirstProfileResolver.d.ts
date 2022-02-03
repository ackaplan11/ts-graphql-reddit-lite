import { GraphQLResolveInfo } from "graphql";
import { FindFirstProfileArgs } from "./args/FindFirstProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class FindFirstProfileResolver {
    findFirstProfile(ctx: any, info: GraphQLResolveInfo, args: FindFirstProfileArgs): Promise<Profile | null>;
}
