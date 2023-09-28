import type { IAlbum } from '@/types';
import { useParams } from 'react-router-dom';
import AlbumService from '@/api/services/AlbumService';
import { useEffect, useState } from 'react';
import SimpleLayout from '@/layouts/simple-layout/SimpleLayout';
import Album from '~/album/Album';

export default function Albums() {
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
      <h2 className="text-center my-md">Albums</h2>
      <ul className="flex flex-col justify-center items-center">
        {albums.map((album, index) => (
          <Album
            classes="mb-md"
            key={album.id}
            album={album}
            number={index + 1}
          />
        ))}
      </ul>
    </SimpleLayout>
  );
}
