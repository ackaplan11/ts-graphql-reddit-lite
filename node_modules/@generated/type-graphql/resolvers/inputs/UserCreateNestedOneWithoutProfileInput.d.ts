import { UserCreateOrConnectWithoutProfileInput } from "../inputs/UserCreateOrConnectWithoutProfileInput";
import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutProfileInput {
    create?: UserCreateWithoutProfileInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
