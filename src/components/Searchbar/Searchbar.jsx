import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(this.state);
  };

  handleSubmit = e => {
    console.log(this.props);
    e.preventDefault();
    const { name } = this.state;
    if (name === '') {
      alert('Write text for search');
    }
    this.props.onSubmit(name.trim().toLowerCase());
    console.log(this.props);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={css.input}
            type="text"
            autocomplete="off"
            name="name"
            value={this.state.name || ''}
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
