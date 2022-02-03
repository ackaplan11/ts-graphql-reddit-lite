import { ProfileCreateOrConnectWithoutUserInput } from "../inputs/ProfileCreateOrConnectWithoutUserInput";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";
export declare class ProfileCreateNestedOneWithoutUserInput {
    create?: ProfileCreateWithoutUserInput | undefined;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | undefined;
    connect?: ProfileWhereUniqueInput | undefined;
}
