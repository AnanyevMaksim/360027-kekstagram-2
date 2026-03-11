const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderThumbnails = (userPhotos, onThumbnailClick) => {
  const thumbnailFragment = document.createDocumentFragment();

  userPhotos.forEach((photo) => {
    const {url, description, comments, likes} = photo;
    const thumbnailElement = thumbnailTemplate.cloneNode(true);
    const imageElement = thumbnailElement.querySelector('.picture__img');
    const commentsElement = thumbnailElement.querySelector('.picture__comments');
    const likesElement = thumbnailElement.querySelector('.picture__likes');

    imageElement.src = url;
    imageElement.alt = description;
    commentsElement.textContent = comments.length;
    likesElement.textContent = likes;

    thumbnailElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      onThumbnailClick(photo);
    });

    thumbnailFragment.appendChild(thumbnailElement);
  });

  thumbnailsContainer.appendChild(thumbnailFragment);
};

export {renderThumbnails};
