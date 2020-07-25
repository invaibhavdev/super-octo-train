import React from 'react';
import styled from 'styled-components';

const News = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 10% auto;
  grid-gap: 10px;
  padding: 10px;
`;
export default (props) => (
	<News>
		<span>{props.comments}</span>
		<span>{props.votes}</span>
		<span>upvote</span>
		<span>
		{props.createdAt}
		{props.title}
		{props.author}
		</span>
	</News>
)