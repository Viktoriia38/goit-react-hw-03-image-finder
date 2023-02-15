import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ images, handleClickItem }) {
  const { hits } = images;
  console.log(images);
  return (
    <ul className={css.gallery}>
      {/* {console.log(hits)} */}
      {hits !== undefined &&
        hits.map(hit => (
          <>
            <ImageGalleryItem
              smallImage={hit.webformatURL}
              tag={hit.tags}
              key={hit.id}
              handleClickItem={handleClickItem}
            />
          </>
        ))}
    </ul>
  );
}

// My key - 33614509-c1f88af9b42b2af62dde3bb25

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// Робочий запит
// https://pixabay.com/api/?q=cat&page=1&key=33614509-c1f88af9b42b2af62dde3bb25&image_type=photo&orientation=horizontal&per_page=12
// "total": 23409,
//     "totalHits": 500,
//     "hits": [
//         {
//             "id": 736877,
//             "pageURL": "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/",
//             "type": "photo",
//             "tags": "tree, cat, silhouette",
//             "previewURL": "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg",
//             "previewWidth": 150,
//             "previewHeight": 100,
//             "webformatURL": "https://pixabay.com/get/g7028f0d1acfaf5db77007e3db2192847da85f3583c1a120cfc0c9ea92a3184bf876bda980e0f84e3f30ac489cd88b4ec_640.jpg",
//             "webformatWidth": 640,
//             "webformatHeight": 427,
//             "largeImageURL": "https://pixabay.com/get/g3d8436dff41f97d8c8307c4839a18846ba433121325ef039b0f7bbeb5e53ffeb4e70b6828ad3d755dc547bf7d7ab3634a56360ddb4de519a15acbb6e15257b8c_1280.jpg",
//             "imageWidth": 1920,
//             "imageHeight": 1282,
//             "imageSize": 97150,
//             "views": 1175256,
//             "downloads": 587751,
//             "collections": 2289,
//             "likes": 2773,
//             "comments": 543,
//             "user_id": 909086,
//             "user": "Bessi",
//             "userImageURL": "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg"
//         }.collections]
