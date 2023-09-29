import React from 'react';
import OpinionCard from '../../Molecules/OpinionCard/OpinionCard';
import ArrowButton from '../../Atoms/ArrowButton/ArrowButton';

import './OpinionsCarousel.scss';

type OpinionsCarouselProps = {};

const OpinionsCarousel = ({}: OpinionsCarouselProps) => {
  let mockData = [
    { pic: '', name: 'Mike', opinion: 'lorem ipsum dolor sit amet' },
    { pic: '', name: 'Percy', opinion: 'lorem ipsum dolor sit amet' },
    { pic: '', name: 'Shakira', opinion: 'lorem ipsum dolor sit amet' },
  ];
  return (
    <div id="opinionCarousel">
      <ArrowButton
        direction="back"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      <div className="opinions">
        {mockData.map((data) => {
          return (
            <OpinionCard title={data.name} profilePictureSrc={''}>
              {data.opinion}
            </OpinionCard>
          );
        })}
      </div>

      <ArrowButton
        direction="forward"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default OpinionsCarousel;
