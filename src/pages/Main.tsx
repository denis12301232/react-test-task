import type { IUser } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import BaseLayout from '@/layouts/base-layout/BaseLayout';
import UserService from '@/api/services/UserService';
import Input from '~/UI/input/Input';
import UserList from '~/user-list/UserList';

export default function Main() {
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

  function sortFn() {
    setSort((v) => !v);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <BaseLayout>
      <div
        className="flex flex-col items-center m-auto"
        style={{ width: '50%' }}
      >
        <h1 className="text-center my-md">Users</h1>
        <Input
          label="Search by username..."
          classes="mt-md"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {sortedAndSearchedUsers.length ? (
          <UserList
            classes="mt-md mb-md"
            users={sortedAndSearchedUsers}
            sortFn={sortFn}
            sort={sort}
          />
        ) : (
          <div className="my-md" style={{ color: 'red' }}>
            Nothing was found
          </div>
        )}
      </div>
    </BaseLayout>
  );
}
