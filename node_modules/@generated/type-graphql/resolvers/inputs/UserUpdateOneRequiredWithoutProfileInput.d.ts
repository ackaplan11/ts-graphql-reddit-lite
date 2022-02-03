import { UserCreateOrConnectWithoutProfileInput } from "../inputs/UserCreateOrConnectWithoutProfileInput";
import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserUpdateWithoutProfileInput } from "../inputs/UserUpdateWithoutProfileInput";
import { UserUpsertWithoutProfileInput } from "../inputs/UserUpsertWithoutProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutProfileInput {
    create?: UserCreateWithoutProfileInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | undefined;
    upsert?: UserUpsertWithoutProfileInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutProfileInput | undefined;
}
