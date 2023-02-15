import * as basicLightbox from 'basiclightbox';
// largeImage={hit.largeImageURL} id={hit.id} tag={hit.tags}
export function Modal({ images }) {
  const { id, largeImageURL, tags } = images;
  const instance = basicLightbox.create(`
    <div className="overlay">
      <div className="modal" key=${id}>
        <img src=${largeImageURL} alt=${tags} />
      </div>
    </div>
`);

  instance.show();
}
