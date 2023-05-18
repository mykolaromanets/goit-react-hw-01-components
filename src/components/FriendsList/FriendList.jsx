import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemStyled className="item">
      <StatusStyled
        className={`status ${isOnline ? 'online' : 'offline'}`}
        isOnline={isOnline}
      ></StatusStyled>
      <AvatarStyled
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <NameStyled className="name">{name}</NameStyled>
    </ItemStyled>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListStyled>
  );
};

const FriendListStyled = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
`;

const ItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  gap: 10px;
  border: 1px solid #000;
  width: 300px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
const AvatarStyled = styled.img`
  width: 50px;
  height: 50px;
  padding: 5px;
`;
const NameStyled = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;
const StatusStyled = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
