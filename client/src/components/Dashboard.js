import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import mongoApi from '../api/mongoApi';

@inject('application')
@observer
class Dashboard extends Component {

    componentDidMount() {
        mongoApi.getMovies().then(response => {
            console.log(response);
            // this.props.subscriptionSchema.saveSchema(response.data);
        });
    }

    render () {
        return <div>ok</div>
    }
}

export default Dashboard;
