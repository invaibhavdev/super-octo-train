import React from 'react';
import styled from 'styled-components';
import { BsFillTriangleFill } from 'react-icons/bs';
import dateFormat from 'utils/dateFormat';
import getUrlHost from 'utils/getUrlHost';
import Button from 'components/UI/Button';

const News = styled.div`
  @media only screen and (min-width: 768px) {
  	div {
/*  		display: none;
*/ 	}
  }
`;

const Link = styled.a`
	text-decoration: none;
	color: #000;
	padding: 0 4px;
	text-align: left;
`;

const Subtext = styled.span`
	color: #828282;
	font-size: .8em;
	padding: 0 4px;
`;

const Author = styled(Subtext)`
	color: #000;
`;

export default (props) => (
	<News className="Grid-head">
		<span>{props.comments}</span>
		<span>{props.votes}</span>
		<Button><BsFillTriangleFill color="#9d9e98" /></Button>
		<div>
			<Link target="_blank" rel="noopener noreferrer" href={props.url}>{props.title}</Link>
			<Subtext>({getUrlHost(props.url)})</Subtext>
			<Subtext>by</Subtext>
			<Author>{props.author}</Author>
			<Subtext>{dateFormat(props.createdAt)}</Subtext>
			<Button><Author>[hide]</Author></Button>
		</div>
	</News>
)
