import { GraphQLResolveInfo } from "graphql";
import { DeleteProfileArgs } from "./args/DeleteProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class DeleteProfileResolver {
    deleteProfile(ctx: any, info: GraphQLResolveInfo, args: DeleteProfileArgs): Promise<Profile | null>;
}
