import { Component } from 'react';
import css from './ContactRender.module.css';

export class ContactRender extends Component {
  handleDelet = e => {
    console.log(e.target.name);

    this.props.onClick(e.target.name);
  };

  render() {
    const { contacts, search } = this.props;
    return contacts
      .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
      .map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            name={el.id}
            onClick={this.handleDelet}
            className={css.delete}
          >
            Delete
          </button>
        </li>
      ));
  }
}
