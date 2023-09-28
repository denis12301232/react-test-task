import type { IUser } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseLayout from '@/layouts/BaseLayout';
import UserService from '@/api/services/UserService';
import Input from '@/components/input/Input';

export default function Main() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);
  const searchedUsers = useMemo(
    () =>
      users.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );
  const sortedAndSearchedUsers = useMemo(
    () =>
      [...searchedUsers].sort(
        (a, b) => a.username.localeCompare(b.username) * (sort ? -1 : 1)
      ),
    [sort, searchedUsers]
  );

  function fetchUsers() {
    UserService.index().then((users) => setUsers(users));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <BaseLayout>
      <div className="flex flex-col items-center">
        <h1 className="text-center">Users</h1>
        <Input
          label="Search..."
          classes="mt-md"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className="mt-md">
          <tbody>
            <tr>
              <th onClick={() => setSort((v) => !v)}>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Posts</th>
              <th>Albums</th>
            </tr>
            {sortedAndSearchedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => navigate(`/users/${user.id}/posts`)}>
                    Open Posts
                  </button>
                </td>
                <td>
                  <button onClick={() => navigate(`/users/${user.id}/albums`)}>
                    Open Albums
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
}
