import { createBrowserRouter } from 'react-router-dom';
import Main from '@/pages/Main';
import About from '@/pages/About';
import Posts from '@/pages/Posts';
import Albums from '@/pages/Albums';
import PostId from '@/pages/PostId';
import AlbumId from '@/pages/AlbumId';
import Error from '~/error/Error';

export default createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/users/:id/posts',
    element: <Posts />,
  },
  {
    path: '/users/:id/albums',
    element: <Albums />,
  },
  {
    path: '/posts/:id',
    element: <PostId />,
  },
  {
    path: '/albums/:id',
    element: <AlbumId />,
  },
  {
    path: '*',
    element: <Error code={404} message="Not found" />,
  },
]);
