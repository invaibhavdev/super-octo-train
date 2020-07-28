import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BsFillTriangleFill } from 'react-icons/bs'
import dateFormat from 'utils/dateFormat'
import getUrlHost from 'utils/getUrlHost'
import Button from 'components/UI/Button'

const News = styled.div`
  @media only screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > button {
      width: 48px;
      height: 48px;
    }
    .only-desk {
      display: none;
    }
  }
`

const Link = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0 4px;
  text-align: left;
`

const Subtext = styled.span`
  color: #828282;
  font-size: 0.8em;
  padding: 0 4px;
`

const SubtextDark = styled(Subtext)`
  color: #000;
`
const NewsInfo = styled.div`
  display: flex;
  .visible-phone-inline {
    display: none;
  }
  text-align: left;
  @media only screen and (max-width: 767px) {
    width: calc(100% - 48px);
    .visible-phone-inline {
      display: inline-block;
    }
    flex-direction: column;
  }
`

const NewsItem = (props) => (
  <News className="Grid-head">
    <SubtextDark className="only-desk">{props.comments}</SubtextDark>
    <SubtextDark className="only-desk">{props.votes}</SubtextDark>
    <Button onClick={props.upvoteArticle}>
      <BsFillTriangleFill color="#9d9e98" />
    </Button>
    <NewsInfo>
      <div>
        <Link target="_blank" rel="noopener noreferrer" href={props.url}>
          {props.title}
        </Link>
        <Subtext>({getUrlHost(props.url)})</Subtext>
      </div>
      <div>
        <div className="visible-phone-inline">
          <SubtextDark>{props.comments} comments</SubtextDark>
          <SubtextDark>{props.votes} points</SubtextDark>
        </div>
        <Subtext>by</Subtext>
        <SubtextDark>{props.author}</SubtextDark>
        <Subtext>{dateFormat(props.createdAt)}</Subtext>
        <Button
          onClick={() => {
            props.hidePost(props.id)
          }}
        >
          <SubtextDark>[hide]</SubtextDark>
        </Button>
      </div>
    </NewsInfo>
  </News>
)

NewsItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  upvoteArticle: PropTypes.func,
  comments: PropTypes.number,
  votes: PropTypes.number,
  hidePost: PropTypes.func,
  author: PropTypes.string,
  createdAt: PropTypes.string,
  url: PropTypes.string,
}

export default NewsItem
