import propTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const { hits } = this.props.images;
    return (
      <>
        <ul className={css.gallery}>
          {hits !== undefined &&
            hits.map(hit => <ImageGalleryItem images={hit} key={hit.id} />)}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: propTypes.object.isRequired,
};
