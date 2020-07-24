import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function IconSignout(props) {
  const handleSignout = () => {
    console.log('Clicked mamene');
  };

  return (
    <FontAwesomeIcon
      onClick={handleSignout}
      className="link icon-signout is-clickable"
      icon={faSignOutAlt}
      size="xs"
      title="signout"
    />
  );
}

export default IconSignout;
