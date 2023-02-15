import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ smallImage, tag, handleClickItem, id }) {
  return (
    <li className={css.galleryItem} onClick={handleClickItem}>
      <img src={smallImage} alt={tag} id={id} />
    </li>
  );
}
