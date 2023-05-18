import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Statistic = ({ title, stats }) => {
  return (
    <StatisticStyled className="statistics">
      {title && <TitleStyled className="title">{title}</TitleStyled>}
      <StatListStyled className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <ItemStyled key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </ItemStyled>
        ))}
      </StatListStyled>
    </StatisticStyled>
  );
};

const StatisticStyled = styled.section`
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
const TitleStyled = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0;
  padding-top: 10px;
`;
const StatListStyled = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  flex-grow: 1;
  margin-top: 40px;
  height: calc(100% - 40px);
`;
const getRandomHexColor = idx =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
const ItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100%;
  background-color: ${props => getRandomHexColor(props.index)};
`;
Statistic.defaultProps = {
  title: '',
};
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
