import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Card, Grid, TextField} from '@material-ui/core';
import './index.css';

let RegisterForm = (props) => {
    const {handleSubmit} = props

    return (
        <Grid container direction="column" alignItems="center" spacing={24}>
            <Card>
                <Grid item xs={12} className="registration-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="name"
                                component={(field) => {
                                return (
                                    <div class="input-row">
                                        <TextField
                                            {...field.input}
                                            label="Nome"
                                            autoComplete="username"
                                            margin="normal"
                                            variant="outlined"/>
                                    </div>
                                )
                            }}/>
                        </div>
                        <div>
                            <Field
                                name="email"
                                component={(field) => {
                                return (
                                    <div class="input-row">
                                        <TextField
                                            {...field.input}
                                            label="Email"
                                            type="email"
                                            autoComplete="email"
                                            margin="normal"
                                            variant="outlined"/>
                                    </div>
                                )
                            }}
                                type="email"/>
                        </div>

                        <div>
                            <Field
                                name="username"
                                component={(field) => {
                                return (
                                    <div class="input-row">
                                        <TextField {...field.input} label="Apelido" margin="normal" variant="outlined"/>
                                    </div>
                                )
                            }}/>
                        </div>
                        <div>
                            <Field
                                name="password"
                                component={(field) => {
                                return (
                                    <div class="input-row">
                                        <TextField
                                            {...field.input}
                                            label="Senha"
                                            margin="normal"
                                            autoComplete="current-password"
                                            type="password"
                                            variant="outlined"/>
                                    </div>
                                )
                            }}/>
                        </div>
                        <Button type="submit" variant="contained" color="primary" disableRipple>
                            Cadastrar
                        </Button>
                        <br/>
                    </form>
                </Grid>
            </Card>
        </Grid>
    )
}
RegisterForm = reduxForm({
    // a unique name for the form
    form: 'register'
})(RegisterForm)

export default RegisterForm