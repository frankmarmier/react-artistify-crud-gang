import React from 'react';
import IconPlusAdmin from './../components/icon/IconPlusAdmin';
const AdminLabel = () => {
  return (
    <div>
      <h1 className="title">
        <span>Admin Labels</span>
        <IconPlusAdmin endpoint="label" />
      </h1>
      Display table here
    </div>
  );
};

export default AdminLabel;
