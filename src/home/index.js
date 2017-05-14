/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import axios from 'axios';
import Wind from './components/wind.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TableData from './components/table-data';
var ReactDOM = require('react-dom');
var NotificationSystem = require('react-notification-system');

var MyComponent = React.createClass({
  _notificationSystem: null,

  _addNotification: function(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  },

  componentDidMount: function() {
    this._notificationSystem = this.refs.notificationSystem;
  },

  render: function() {
    return (
      <div>
        <button onClick={this._addNotification}>Add notification</button>
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
});
class HomePage extends React.Component {
  state = {
    posts: {

    }
  }

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
    document.title = title;
    axios.get(`https://bookit-80365.firebaseio.com/posts.json`)
      .then(res => {
        console.log(res.data)
        this.setState({ posts:res.data });
      });
  }

  render() {
    return (
      <MuiThemeProvider>
      <Layout className={s.content}>
        <MyComponent />
        {/*<div*/}
          {/*// eslint-disable-next-line react/no-danger*/}
          {/*dangerouslySetInnerHTML={{ __html: html }}*/}
        {/*/>*/}
        <h4></h4>
        <Wind data={this.state.posts} />
<TableData />
        <p>
          <br /><br />
        </p>
      </Layout>
      </MuiThemeProvider>
    );
  }

}




export default HomePage;
