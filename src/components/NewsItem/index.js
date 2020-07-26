import React from 'react';
import styled from 'styled-components';
import { BsFillTriangleFill } from 'react-icons/bs';
import dateFormat from 'utils/dateFormat';
import Button from 'components/UI/Button';
const News = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 10% auto;
  grid-gap: 10px;
  padding: 10px;
  @media only screen and (min-width: 768px) {
  	div {
/*  		display: none;
*/ 	}
  }
`;
// .red-bg {
//   background-color: red;
// }
export default (props) => (
	<News>
		<span>{props.comments}</span>
		<span>{props.votes}</span>
		<Button><BsFillTriangleFill color="#9d9e98" /></Button>
		<div>
		{props.title}
		&nbsp;by {props.author}
		&nbsp;{dateFormat(props.createdAt)}
		<div>
			{props.comments}
			{props.votes}
		</div>
		&nbsp;<Button>hide</Button>
		</div>
	</News>
)