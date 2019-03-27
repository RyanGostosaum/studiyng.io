import React, {Component} from 'react';

// import { Container } from './styles';

export default class Register extends Component {
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
                <h2>Hei, se registre</h2>
            </div>
        )
    }
}
