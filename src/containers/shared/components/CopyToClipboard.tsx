import React from 'react';
import PropTypes from 'prop-types';
import copy from '../images/copy.png';

interface Props {
  text: string;
  className?: string;
}

const CopyToClipboard = ({ text, className }: Props) => {
  return (
    <input
      className={className}
      type="image"
      src={copy}
      alt="Copy"
      onClick={() => navigator.clipboard.writeText(text)}
    />
  );
};
CopyToClipboard.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

CopyToClipboard.defaultProps = {
  text: '',
  className: null,
};

export default CopyToClipboard;
