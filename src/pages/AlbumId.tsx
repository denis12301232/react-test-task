import type { IPhoto } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AlbumService from '@/api/services/AlbumService';
import SimpleLayout from '@/layouts/SimpleLayout';

export default function AlbumId() {
  const { id } = useParams();
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  function fetchPhotos(id: string) {
    AlbumService.getPhotos(id).then((photos) => setPhotos(photos));
  }

  useEffect(() => {
    id && fetchPhotos(id);
  }, [id]);

  return (
    <SimpleLayout>
      <div>{id}</div>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <h5>{photo.title}</h5>
            <img src={photo.url} alt="" />
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}
