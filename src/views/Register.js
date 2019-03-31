import React, {Component} from 'react';
import RegisterForm from "../components/forms/register.js";
import { connect } from 'react-redux'
import {register} from "../actions/actions"
class Register extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values); 
        this.props.dispatch(register(values))
      }
    render() {
        return (
            <div>
                <RegisterForm onSubmit={this.submit}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  state: state.rootReducer
});
 export default connect()(Register)