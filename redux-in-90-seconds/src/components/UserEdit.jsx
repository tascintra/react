import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUser } from '../redux/userSlice';

const UserEdit = () => {
  const { name, setName } = useState('');
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <input
        placeholder='Usuário'
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <button onClick={() => dispatch(changeUser(name))}>Salvar</button>
    </div>
  );
};

export default UserEdit;
