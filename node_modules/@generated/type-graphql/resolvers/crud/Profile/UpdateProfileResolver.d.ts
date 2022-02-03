import { GraphQLResolveInfo } from "graphql";
import { UpdateProfileArgs } from "./args/UpdateProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class UpdateProfileResolver {
    updateProfile(ctx: any, info: GraphQLResolveInfo, args: UpdateProfileArgs): Promise<Profile | null>;
}
