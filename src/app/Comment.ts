import {User} from "./User";

export interface Comment {
  id?: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: string;
  replies: Comment[];
}
