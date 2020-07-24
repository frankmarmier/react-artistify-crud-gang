import React from 'react';
import IconPlusAdmin from './../components/icon/IconPlusAdmin';

const AdminStyle = () => {
  return (
    <div>
      <h1 className="title">
        <span>Admin Styles</span>
        <IconPlusAdmin endpoint="style" />
      </h1>
      Display table here
    </div>
  );
};

export default AdminStyle;
