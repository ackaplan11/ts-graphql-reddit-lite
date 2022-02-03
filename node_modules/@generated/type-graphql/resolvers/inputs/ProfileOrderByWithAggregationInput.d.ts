import { ProfileAvgOrderByAggregateInput } from "../inputs/ProfileAvgOrderByAggregateInput";
import { ProfileCountOrderByAggregateInput } from "../inputs/ProfileCountOrderByAggregateInput";
import { ProfileMaxOrderByAggregateInput } from "../inputs/ProfileMaxOrderByAggregateInput";
import { ProfileMinOrderByAggregateInput } from "../inputs/ProfileMinOrderByAggregateInput";
import { ProfileSumOrderByAggregateInput } from "../inputs/ProfileSumOrderByAggregateInput";
export declare class ProfileOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    bio?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: ProfileCountOrderByAggregateInput | undefined;
    _avg?: ProfileAvgOrderByAggregateInput | undefined;
    _max?: ProfileMaxOrderByAggregateInput | undefined;
    _min?: ProfileMinOrderByAggregateInput | undefined;
    _sum?: ProfileSumOrderByAggregateInput | undefined;
}
