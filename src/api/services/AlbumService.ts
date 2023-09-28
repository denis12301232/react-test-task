import type { IAlbum, IPhoto } from '@/types';
import { $api } from '@/api';

export default class AlbumService {
  static index(id: string) {
    return $api.get(`users/${id}/albums`).json<IAlbum[]>();
  }

  static getPhotos(albumId: string) {
    return $api.get(`albums/${albumId}/photos`).json<IPhoto[]>();
  }
}
