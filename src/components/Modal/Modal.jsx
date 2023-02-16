import propTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

export class Modal extends Component {
  onEscapePress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }

  render() {
    const { id, largeImageURL, tags } = this.props.images;

    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal} key={id}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}

Modal.propTypes = {
  closeModal: propTypes.func.isRequired,
  images: propTypes.objectOf(
    propTypes.exact({
      tags: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
      id: propTypes.object.isRequired,
    })
  ),
};
