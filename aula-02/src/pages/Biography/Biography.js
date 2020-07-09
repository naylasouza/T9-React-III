import React, { Component } from 'react';
import api from '../../services/api/Api';

import './Styles.css'

class Biography extends Component {
    state = {
        biography = {}
    }
    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/biography/${id}`)
    }
    render() {
        const { biography } = this.state;

        return (
            <div>
                <h1>{biography.nome}</h1>
                <p>{biography.desc}</p>
            </div>
        )
    }
}
export default Biography;
