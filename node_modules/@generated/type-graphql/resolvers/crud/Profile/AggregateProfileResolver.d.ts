import { GraphQLResolveInfo } from "graphql";
import { AggregateProfileArgs } from "./args/AggregateProfileArgs";
import { AggregateProfile } from "../../outputs/AggregateProfile";
export declare class AggregateProfileResolver {
    aggregateProfile(ctx: any, info: GraphQLResolveInfo, args: AggregateProfileArgs): Promise<AggregateProfile>;
}
