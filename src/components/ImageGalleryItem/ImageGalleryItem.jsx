import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';
export default function ImageGalleryItem({ smallImgURL, id }) {
  return (
    <li className={s.galleryItem}>
      <img src={smallImgURL} alt={id} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};