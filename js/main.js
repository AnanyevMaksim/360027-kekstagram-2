import {renderThumbnails} from './render-thumbnails.js';
import {generatePhotos} from './create-array-photos.js';
import {openBigPicture} from './render-big-picture.js';

const userPhotos = generatePhotos();
renderThumbnails(userPhotos, openBigPicture);
