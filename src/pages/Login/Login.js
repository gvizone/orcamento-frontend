/* eslint-disable no-undef */
import React, { Component } from 'react';
import './Login.scss';
import { ServiceApi } from '../../services/ServiceApi';

export default class Login extends Component {
  constructor () {
    super();
    this.api = new ServiceApi('http://localhost:3000');
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    const res = this.api.login(this.state)
      .then(res => {
        console.log(res.json());
        if (res.status === 404) throw new Error('error');
        return res;
      })
      .then(res => {
        const { email } = this.state;
        if (!email.length) return;
        localStorage.setItem('@Orcamento:email', email);
        this.props.history.push('/home');
      }).catch(erro => alert('erro'));
  }
  insertEmail = e => {
    this.setState({ email: e.target.value });
  }
  insertPassword = e => {
    this.setState({ password: e.target.value });
  }
  render () {
    return (
      <div className='login-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.email}
            name='email'
            onChange={this.insertEmail}
            placeholder='E-mail' />
          <input
            value={this.state.password}
            name='password'
            type='password'
            onChange={this.insertPassword}
            placeholder='Senha' />
          <button type='submit'>Entrar</button>
        </form>
      </div>
    );
  }
}
