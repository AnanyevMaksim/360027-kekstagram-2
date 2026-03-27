import {renderThumbnails} from './render-thumbnails.js';
import {openBigPicture} from './render-big-picture.js';
import {initUploadForm} from './form/upload-photo-form.js';
import {getData} from './api.js';
import {showDataErrorMessage} from './message.js';
import {initFilters} from './filter.js';

getData()
  .then((photos) => {
    renderThumbnails(photos, openBigPicture);
    initFilters(photos);
  })
  .catch(() => {
    showDataErrorMessage();
  });

initUploadForm();
