import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Input } from './inputs/Input';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
    const { name } = this.state;
    this.setState(prev => {
      console.log(prev.contacts.concat(name, uniqid()));
      return { contacts: prev.contacts };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <Input
            onChange={this.handleChange}
            value={this.state.name}
            type={'text'}
            name={'name'}
            pattern={
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            }
            label={'Name'}
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
