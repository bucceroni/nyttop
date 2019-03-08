import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import axios from 'axios'

const styles = {
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        margin: 20,
    },
    media: {
        height: 140,
    },
};



async function getCryptocoins() {
    const res = await axios.get(api);
    if (res.status >= 200 && res.status <= 207) {
        return res.data;
    } else {
        throw new Error(`HTTP status ${res.status}`);
    }
}


class Cards extends Component {
    state = {
        science: []
    }

    async componentDidMount() {
        getCryptocoins().then(resolve => this.setState({ science: resolve.results }));
    }

    handleAlert() {
        alert("test")
    }

    render() {
        const { science } = this.state
        const { classes } = this.props;

        const a = console
        a.log(science)

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>

                    {science !== [] ?
                        science.map((item, index) => {
                            return (
                                <Grid container item xs={4} spacing={24}>
                                    <Card className={classes.card} key={index}>
                                        <CardActionArea
                                            onClick={this.handleAlert}>
                                            <CardMedia
                                                className={classes.media}
                                                image={item.multimedia[0] ? item.multimedia[0].url : null}
                                                title={item.title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.title}
                                                </Typography>
                                                <Typography component="p">
                                                    {item.published_date}
                                                </Typography>
                                                <Typography component="p">
                                                    {item.byline}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        }) : "Error"}
                </Grid>
            </div>
        );
    }
}

Cards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);
