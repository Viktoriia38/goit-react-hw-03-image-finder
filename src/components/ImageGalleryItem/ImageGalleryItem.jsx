import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ smallImage, tag }) {
  return (
    <li className={css.galleryItem}>
      <img src={smallImage} alt={tag} />
    </li>
  );
}
