import React, {Component} from 'react';
import {
    Grid,
    Typography,
    Card
} from '@material-ui/core';

// import { Container } from './styles';
import "../assets/index.css"
export default class Home extends Component {
    render() {
        return (
            <Card className="home">
                <div>
                    <Grid container spacing={24}>
                        <div className="container">
                            <Typography
                                style={{
                                textAlign: 'center'
                            }}
                                variant="h4">
                                <h3 className="header">Welcome </h3>
                            </Typography>
                        </div>
                        <div className="listContainer">
                        </div>
                    </Grid>
                </div>
            </Card>

        );
    }
}