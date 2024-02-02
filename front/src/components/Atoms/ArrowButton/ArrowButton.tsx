import React from 'react';
// import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './ArrowButton.scss';

type ArrowButtonProps = {
  direction: 'back' | 'forward';
  arrowColor?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
};

const ArrowButton = ({
  direction = 'back',
  arrowColor = 'white',
  size = 'md',
  onClick,
}: ArrowButtonProps) => {
  return (
    <>
      <button id="arrowButton" className={size}>
        {/* {direction === 'back' ? (
          <ArrowBack onClick={onClick} htmlColor={arrowColor} />
        ) : (
          <ArrowForward onClick={onClick} htmlColor={arrowColor} />
        )} */}
      </button>
    </>
  );
};

export default ArrowButton;
