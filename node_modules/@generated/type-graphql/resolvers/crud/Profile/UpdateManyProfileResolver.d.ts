import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProfileArgs } from "./args/UpdateManyProfileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProfileResolver {
    updateManyProfile(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProfileArgs): Promise<AffectedRowsOutput>;
}
