import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ContainerStyled className="profile">
      <DescriptionStyled className="description">
        <AvatarStyled src={avatar} alt="User avatar" className="avatar" />
        <NameStyled className="name">{username}</NameStyled>
        <TagStyled className="tag">@{tag}</TagStyled>
        <LocationStyled className="location">{location}</LocationStyled>
      </DescriptionStyled>

      <StatsStyled className="stats">
        <ItemStyled>
          <LabelStyled className="label">Followers</LabelStyled>
          <QuantityStyled className="quantity">
            {stats.followers}
          </QuantityStyled>
        </ItemStyled>
        <ItemStyled>
          <LabelStyled className="label">Views</LabelStyled>
          <QuantityStyled className="quantity">{stats.views}</QuantityStyled>
        </ItemStyled>
        <ItemStyled>
          <LabelStyled className="label">Likes</LabelStyled>
          <QuantityStyled className="quantity">{stats.likes}</QuantityStyled>
        </ItemStyled>
      </StatsStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #000;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;
const AvatarStyled = styled.img`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  padding-top: 50px;
  border-radius: 50%;
`;
const NameStyled = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;
const TagStyled = styled.p`
  color: gray;
  margin-bottom: 10px;
`;
const LocationStyled = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: gray;
`;
const StatsStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 0;
  background-color: lightgray;
  height: 127px;
  list-style-type: none;
`;
const ItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
const LabelStyled = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const QuantityStyled = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
