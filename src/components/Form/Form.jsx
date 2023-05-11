import { Component } from 'react';
import css from './Form.module.css';
import { Input } from '../inputs/Input';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    console.log(e.target.value);
    // console.log(e.tatget.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    e.target.reset();
  };

  render() {
    const { form, submit } = css;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off" className={form}>
        <Input
          onChange={this.handleChange}
          type={'text'}
          name={'name'}
          pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
          label={'Name'}
          required
        />
        <Input
          onChange={this.handleChange}
          type={'tel'}
          name={'number'}
          pattern={
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}'
          }
          label={'Number'}
          required
        />
        <button type="submit" className={submit}>
          Add contact
        </button>
      </form>
    );
  }
}
