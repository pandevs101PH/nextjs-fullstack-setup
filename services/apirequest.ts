// *** For Frontend *** //
import { Fetcher } from 'swr';
import { User } from './types';
import { getUsersQry } from './graphql-query';

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export const getUsers: Fetcher<{ users: User[] }, string> = () => fetcher(getUsersQry);
