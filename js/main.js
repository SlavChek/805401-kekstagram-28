// Импорты модулей
import { renderElements } from './util.js';
import { getRandomPhotoGallery } from './data.js';
import { createThumbnail, picturesСontainer } from './thumbnail.js';
import './big-picture.js';

renderElements(getRandomPhotoGallery(), createThumbnail, picturesСontainer);


