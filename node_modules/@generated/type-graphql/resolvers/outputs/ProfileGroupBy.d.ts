import { ProfileAvgAggregate } from "../outputs/ProfileAvgAggregate";
import { ProfileCountAggregate } from "../outputs/ProfileCountAggregate";
import { ProfileMaxAggregate } from "../outputs/ProfileMaxAggregate";
import { ProfileMinAggregate } from "../outputs/ProfileMinAggregate";
import { ProfileSumAggregate } from "../outputs/ProfileSumAggregate";
export declare class ProfileGroupBy {
    id: number;
    bio: string | null;
    userId: number;
    _count: ProfileCountAggregate | null;
    _avg: ProfileAvgAggregate | null;
    _sum: ProfileSumAggregate | null;
    _min: ProfileMinAggregate | null;
    _max: ProfileMaxAggregate | null;
}
