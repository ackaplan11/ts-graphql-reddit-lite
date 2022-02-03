import { GraphQLResolveInfo } from "graphql";
import { CreateManyProfileArgs } from "./args/CreateManyProfileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProfileResolver {
    createManyProfile(ctx: any, info: GraphQLResolveInfo, args: CreateManyProfileArgs): Promise<AffectedRowsOutput>;
}
