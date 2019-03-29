import React, {Component} from 'react';
import RegisterForm from "../components/forms/register.js";

class Register extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values); 
      }
    render() {
        return (
            <div>
                <RegisterForm onSubmit={this.submit}/>
            </div>
        )
    }
}

 export default Register