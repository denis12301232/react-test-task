import type { IAlbum } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';
import AlbumService from '@/api/services/AlbumService';
import { useEffect, useState } from 'react';
import SimpleLayout from '@/layouts/SimpleLayout';

export default function Albums() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  function fetchAlbums(id: string) {
    AlbumService.index(id).then((albums) => setAlbums(albums));
  }

  useEffect(() => {
    id && fetchAlbums(id);
  }, [id]);

  return (
    <SimpleLayout>
      <div>{id}</div>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h5>{album.title}</h5>
            <button onClick={() => navigate(`/albums/${album.id}`)}>
              Open
            </button>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}
