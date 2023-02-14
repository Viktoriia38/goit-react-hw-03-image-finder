import * as basicLightbox from 'basiclightbox';

export function Modal({ largeImage, id, tag }) {
  const instance = basicLightbox.create(`
    <div className="overlay">
      <div className="modal" key=${id}>
        <img src=${largeImage} alt=${tag} />
      </div>
    </div>
`);

  instance.show();
}
