import { GraphQLResolveInfo } from "graphql";
import { GroupByProfileArgs } from "./args/GroupByProfileArgs";
import { ProfileGroupBy } from "../../outputs/ProfileGroupBy";
export declare class GroupByProfileResolver {
    groupByProfile(ctx: any, info: GraphQLResolveInfo, args: GroupByProfileArgs): Promise<ProfileGroupBy[]>;
}
