import React from 'react';
import IconPlusAdmin from './../components/icon/IconPlusAdmin';

const AdminAlbum = () => {
  return (
    <div>
      <h1 className="title">
        <span>Admin Albums</span>
        <IconPlusAdmin endpoint="album" />
      </h1>
      Display table here
    </div>
  );
};

export default AdminAlbum;
