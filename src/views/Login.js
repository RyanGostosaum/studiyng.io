import React, {Component} from 'react';
import {Input, Button} from '@material-ui/core';

// import { Container } from './styles';

export default class Login extends Component {
    constructor(props){
        super(props); 
        this.state = {
            username: '', 
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value })
    }
    handleSubmit() {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit()}>
                    <Input name="username" onChange={this.handleChange} placeholder="Username"/>
                    <Input name="password" onChange={this.handleChange} placeholder="Senha"/>
                    <Button type="submit">Submit</Button>
                </form>

            </div>
        )
    }
}
