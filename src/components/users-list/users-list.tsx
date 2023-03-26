import React from 'react';

import { useAppData } from '../../contexts';

import './users-list.scss';

export const UsersList = () => {
  const { data, isLoading } = useAppData();
};
