import React from 'react';
import { useSelector } from 'react-redux';

const UserShow = () => {
  const { name } = useSelector((state) => state.user);

  return <label>{name}</label>;
};

export default UserShow;
