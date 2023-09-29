import { useNavigate, useParams } from 'react-router-dom';
import AlbumService from '@/api/services/AlbumService';
import { useEffect } from 'react';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';
import Album from '~/album/Album';
import { useQuery } from '@/hooks';
import Loader from '@/components/UI/loader/Loader';

export default function Albums() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { query, data: albums, loading, error } = useQuery(AlbumService.index);

  useEffect(() => {
    id && query(id);
  }, [id, query]);

  useEffect(() => {
    Array.isArray(albums) && !albums.length && navigate('/');
  }, [albums, navigate]);

  return (
    <SimpleLayout>
      <h2 className="text-center my-md">Albums</h2>
      <ul className="flex flex-col justify-center items-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="mt-md">{error.message}</div>
        ) : (
          albums?.map((album, index) => (
            <Album
              classes="mb-md"
              key={album.id}
              album={album}
              number={index + 1}
            />
          ))
        )}
      </ul>
    </SimpleLayout>
  );
}
