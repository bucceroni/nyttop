import React, { Component } from 'react';

import axios from 'axios'


class Cards extends Component {
    state = {
        science: []
    }

    async componentDidMount() {
        const response = await axios.get()
        const data = await response.data;
        this.setState({ science: [data] });
    }

    render() {
        const { science } = this.state
        let a = console
        a.log(science)

        return (
            <div>
                {science !== undefined ?
                    science.map((item, index) => {
                        return (
                            <p key={index}>{item.title}</p>
                        )
                    }) : "Error"}
            </div>
        );
    }
}

export default Cards;
