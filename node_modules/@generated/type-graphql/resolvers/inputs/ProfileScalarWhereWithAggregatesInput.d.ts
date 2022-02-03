import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    bio?: StringNullableWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
}
