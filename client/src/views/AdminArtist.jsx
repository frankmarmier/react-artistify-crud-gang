import React from 'react';
import IconPlusAdmin from './../components/icon/IconPlusAdmin';

const AdminArtist = (props) => {
  return (
    <div>
      <h1 className="title">
        <span>Admin Artists</span>
        <IconPlusAdmin endpoint="artist" />
      </h1>
      Display table here
    </div>
  );
};

export default AdminArtist;
