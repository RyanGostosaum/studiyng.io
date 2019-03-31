import React, {Component} from 'react'
import { TextField } from '@material-ui/core';

export default class CustomInput extends Component {
    render() {
        return (
            <div class="input-row">
                <TextField
                    id="outlined-email-input"
                    label="Nome"
                    type={this.props.type}
                    autoComplete={this.props.autoComplete}
                    margin="normal"
                    variant="outlined"/>
            </div>
        )
    }
}