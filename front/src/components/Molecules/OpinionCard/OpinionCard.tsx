import React from 'react';
import './OpinionCard.scss';
import ProfilePicture from '../../Atoms/ProfilePicture/ProfilePicture';

type OpinionCardProps = {
  title: string;
  profilePictureSrc: string;
  children: string;
};

const OpinionCard = ({
  title,
  profilePictureSrc,
  children,
}: OpinionCardProps) => {
  return (
    <div id="opinionCardContainer">
      <div className="opinionCardBody">
        <div className="profilePicAndTitle">
          <ProfilePicture imageSrc={profilePictureSrc} size="sm" />
          <span>{title}</span>
        </div>
        <div className="description">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
