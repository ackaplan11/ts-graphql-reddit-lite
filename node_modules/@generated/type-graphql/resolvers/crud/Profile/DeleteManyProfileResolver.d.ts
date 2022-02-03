import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProfileArgs } from "./args/DeleteManyProfileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProfileResolver {
    deleteManyProfile(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProfileArgs): Promise<AffectedRowsOutput>;
}
