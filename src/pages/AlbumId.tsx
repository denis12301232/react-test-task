import type { IPhoto } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AlbumService from '@/api/services/AlbumService';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';
import Photos from '~/photos/Photos';

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
      <h2 className="text-center my-md">Photo</h2>
      <div className="flex justify-center">
        <Photos photos={photos} />
      </div>
    </SimpleLayout>
  );
}
