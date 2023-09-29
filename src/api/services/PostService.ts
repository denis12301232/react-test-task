import type { IComment, IPost } from '@/types';
import { $api } from '@/api';

export default class PostService {
  static index(id: string) {
    return $api.get(`users/${id}/posts`).json<IPost[]>();
  }

  static show(postId: string) {
    return $api.get('posts', { searchParams: { id: postId } }).json<IPost[]>();
  }

  static getComments(postId: string) {
    return $api.get(`posts/${postId}/comments`).json<IComment[]>();
  }
}
