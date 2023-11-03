import React from 'react';
import './ProfilePicture.scss';

type ProfilePictureProps = { imageSrc: string; size?: 'sm' | 'md' | 'lg' };

const ProfilePicture = ({ imageSrc, size = 'md' }: ProfilePictureProps) => {
  return (
    <div id="profilePicture" className={size}>
      <div
        className="imageTag"
        style={
          imageSrc
            ? {
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }
            : { backgroundColor: 'white' }
        }></div>
    </div>
  );
};

export default ProfilePicture;
