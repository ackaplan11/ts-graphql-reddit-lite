import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
export declare class PostRelationsResolver {
    User(post: Post, ctx: any): Promise<User>;
}
