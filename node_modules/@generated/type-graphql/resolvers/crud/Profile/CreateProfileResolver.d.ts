import { GraphQLResolveInfo } from "graphql";
import { CreateProfileArgs } from "./args/CreateProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class CreateProfileResolver {
    createProfile(ctx: any, info: GraphQLResolveInfo, args: CreateProfileArgs): Promise<Profile>;
}
