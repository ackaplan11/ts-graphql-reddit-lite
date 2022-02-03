import { ProfileCreateInput } from "../../../inputs/ProfileCreateInput";
import { ProfileUpdateInput } from "../../../inputs/ProfileUpdateInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";
export declare class UpsertProfileArgs {
    where: ProfileWhereUniqueInput;
    create: ProfileCreateInput;
    update: ProfileUpdateInput;
}
