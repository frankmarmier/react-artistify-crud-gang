import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../Auth/UserContext';

function IconSignout(props) {
  return (
    <UserContext.Consumer>
      {(context) => {
        return (
          <FontAwesomeIcon
            onClick={() => context.removeUser()}
            className="link icon-signout is-clickable"
            icon={faSignOutAlt}
            size="xs"
            title="signout"
          />
        );
      }}
    </UserContext.Consumer>
  );
}

export default IconSignout;
