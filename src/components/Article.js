import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ info }) => {
  const {
    title,
    text,
    date,
  } = info;

  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
};

Article.defaultProps = {
  title: 'No title',
  text: 'No text',
  date: 'No date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};