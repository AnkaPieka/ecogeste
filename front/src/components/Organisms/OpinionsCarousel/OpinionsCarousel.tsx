import React from 'react';
import OpinionCard from '../../Molecules/OpinionCard/OpinionCard';
import ArrowButton from '../../Atoms/ArrowButton/ArrowButton';
import Mike from '../../../assets/james-denton.jpg';
import Percy from '../../../assets/Logan_Lerman.jpg';
import Shakira from '../../../assets/shakira.jpg';

import './OpinionsCarousel.scss';

type OpinionsCarouselProps = {};

const OpinionsCarousel = ({}: OpinionsCarouselProps) => {
  let mockData: { pic: string; name: string; opinion: string }[] = [
    {
      pic: Mike,
      name: 'Mike',
      opinion: 'A nice moment between friends! Thx Ecogestes',
    },
    {
      pic: Percy,
      name: 'Percy',
      opinion: 'Helped me and my family develop new good habits',
    },
    {
      pic: Shakira,
      name: 'Shakira',
      opinion: 'I saw an improvement in my teams relations',
    },
  ];

  return (
    <div id="opinionCarousel">
      {/* <ArrowButton
        direction="back"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      /> */}

      <div className="opinions">
        {mockData.map((data) => {
          return (
            <OpinionCard title={data.name} profilePictureSrc={data.pic}>
              {data.opinion}
            </OpinionCard>
          );
        })}
      </div>

      {/* <ArrowButton
        direction="forward"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      /> */}
    </div>
  );
};

export default OpinionsCarousel;
