import { ProfileOrderByWithRelationInput } from "../../../inputs/ProfileOrderByWithRelationInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";
export declare class AggregateProfileArgs {
    where?: ProfileWhereInput | undefined;
    orderBy?: ProfileOrderByWithRelationInput[] | undefined;
    cursor?: ProfileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
