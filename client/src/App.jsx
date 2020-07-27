import React from 'react';
import { Route, Switch } from 'react-router-dom';
// pages components
import Home from './views/Home';

import Artists from './views/Artists';
import AdminArtist from './views/AdminArtist';
import AdminAlbum from './views/AdminAlbum';
import AdminLabel from './views/AdminLabel';
import AdminStyle from './views/AdminStyle';
import FormArtist from './components/form/FormArtist';
import Artist from './views/Artist';
import Albums from './views/Albums';
import Album from './views/Album';
import Contact from './views/Contact';
import Dashboard from './views/Dashboard';
import NotFound from './views/NotFound';
// partials
import HeaderMain from './components/HeaderMain';
import FooterMain from './components/FooterMain';
import NavMobile from './components/nav/NavMobile';
import Signin from './views/Signin';
import Signup from './views/Signup';

class App extends React.Component {
  state = {
    navMobileStatus: false,
  };

  handleNavMobileStatus = () => {
    this.setState({ navMobileStatus: !this.state.navMobileStatus });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderMain navMobileClbk={this.handleNavMobileStatus} />
        <NavMobile
          navMobileStatus={this.state.navMobileStatus}
          navMobileClbk={this.handleNavMobileStatus}
        />
        <main id="content_main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists" component={Artists} />
            <Route path="/artists/:id" component={Artist} />
            <Route exact path="/albums" component={Albums} />
            <Route path="/albums/:id" component={Album} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/admin/artists" component={AdminArtist} />
            <Route path="/admin/albums" component={AdminAlbum} />
            <Route path="/admin/styles" component={AdminStyle} />
            <Route path="/admin/labels" component={AdminLabel} />
            <Route path="/admin/artist/create" component={FormArtist} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <FooterMain />
      </React.Fragment>
    );
  }
}

export default App;
