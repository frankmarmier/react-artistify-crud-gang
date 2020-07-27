import React from 'react';
// custom tools
import FormEditAccount from '../components/form/FormEditAccount';
import UserFavorites from '../components/admin/UserFavorites';
import DataViz from '../components/admin/DataViz';
import IconSignout from '../components/icon/IconSignout';
import UserContext from '../components/Auth/UserContext';

class Dashboard extends React.Component {
  static contextType = UserContext;

  state = {
    UIState: 'edit',
  };

  handleUIState = (UIState) => {
    this.setState({ UIState });
  };

  render() {
    const { UIState } = this.state;

    return (
      <>
        <h1 className="title">
          <span>Dashboard</span>
          <IconSignout />
        </h1>

        <div className="row">
          <button
            onClick={() => this.handleUIState('edit')}
            className={`btn ${UIState === 'edit' ? 'is-active' : ''}`}
          >
            edit infos
          </button>
          <button
            onClick={() => this.handleUIState('favorites')}
            className={`btn ${UIState === 'favorites' ? 'is-active' : ''}`}
          >
            my favorites
          </button>
          <button
            onClick={() => this.handleUIState('statistics')}
            className={`btn ${UIState === 'statistics' ? 'is-active' : ''}`}
          >
            statistics
          </button>
        </div>
        {UIState === 'edit' && <FormEditAccount />}
        {UIState === 'favorites' && <UserFavorites />}
        {UIState === 'statistics' && <DataViz />}
      </>
    );
  }
}

export default Dashboard;
