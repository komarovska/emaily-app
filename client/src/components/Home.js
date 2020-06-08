import React, { Component } from 'react';
import * as mobx from 'mobx';
import axios from 'axios';
import { inject, observer } from "mobx-react";
import mongoApi from '../api/mongoApi';

@inject('application')
@observer
class HomePage extends Component {

    render () {
        return (
            <div>
              <a href="auth/google">Log me iiiin</a>
              {/* <a href="api/logout">Log me ouut</a> */}
            </div>
        )
    }
}

export default HomePage;
