import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Form } from './Form/Form';
import { Input } from './inputs/Input';
import { ContactRender } from './ContactRender/ConstactRender';
import { getDefaultNormalizer } from '@testing-library/react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  handleDelete = nameEl => {
    // console.log(nameEl);
    // let index = this.state.contacts.indexOf(nameEl);
    console.log(nameEl);
    this.setState(prev => {
      return { contacts: prev.contacts.filter(({ id }) => id !== nameEl) };
    });
  };
  handleSubmit = (name, number) => {
    if (this.state.contacts.find(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
    }

    console.log(name, number);
    this.setState(prev => {
      return {
        contacts: prev.contacts.concat({
          name: name,
          number: number,
          id: uniqid(),
        }),
      };
    });
  };

  handleSearch = ({ target: { value: filter } }) => {
    this.setState({
      filter,
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <div>
          <h2>Contacts</h2>
          <Input
            onChange={this.handleSearch}
            value={this.state.filter}
            type={'text'}
            name={'filter'}
          />
          <ul>
            <ContactRender
              contacts={this.state.contacts}
              search={this.state.filter}
              onClick={this.handleDelete}
            />
          </ul>
        </div>
      </div>
    );
  }
}
