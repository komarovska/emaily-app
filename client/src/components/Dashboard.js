import React, { Component } from 'react';
import * as mobx from 'mobx';
import { inject, observer } from "mobx-react";
import mongoApi from '../api/mongoApi';

@inject('application')
@observer
class Dashboard extends Component {

    componentDidMount() {
        mongoApi.getMovies().then(res => {
            console.log(res);
            this.props.application.setMovies(res.data);
            console.log(mobx.toJS(this.props.application.movies));
        })
    }

    render () {
        const movies = mobx.toJS(this.props.application.movies);
        return (
        <div>
            <ul>
                {Object.keys(this.props.application.movies).map((movie, index) => <li>{this.props.application.movies[movie].title}</li>)}
            </ul>
        </div>
        )
    }
}

export default Dashboard;
