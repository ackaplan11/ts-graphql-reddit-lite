import { ProfileCreateOrConnectWithoutUserInput } from "../inputs/ProfileCreateOrConnectWithoutUserInput";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateWithoutUserInput } from "../inputs/ProfileUpdateWithoutUserInput";
import { ProfileUpsertWithoutUserInput } from "../inputs/ProfileUpsertWithoutUserInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";
export declare class ProfileUpdateOneWithoutUserInput {
    create?: ProfileCreateWithoutUserInput | undefined;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | undefined;
    upsert?: ProfileUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ProfileWhereUniqueInput | undefined;
    update?: ProfileUpdateWithoutUserInput | undefined;
}
