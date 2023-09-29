import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlbumService from '@/api/services/AlbumService';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';
import Photos from '~/photos/Photos';
import { useQuery } from '@/hooks';
import Loader from '@/components/UI/loader/Loader';

export default function AlbumId() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    query,
    data: photos,
    loading,
    error,
  } = useQuery(AlbumService.getPhotos);

  useEffect(() => {
    id && query(id);
  }, [id, query]);

  useEffect(() => {
    Array.isArray(photos) && !photos.length && navigate('/');
  }, [photos, navigate]);

  return (
    <SimpleLayout>
      <h2 className="text-center my-md">Photo</h2>
      <div className="flex justify-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="mt-md">{error.message}</div>
        ) : (
          <Photos photos={photos || []} />
        )}
      </div>
    </SimpleLayout>
  );
}
