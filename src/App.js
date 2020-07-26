import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Line} from 'react-chartjs-2';
import Button from 'components/UI/Button';
import { RiLoader4Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, hideArticle, upvoteArticle } from 'js/actions/home';
import getQueryParam from 'utils/getQueryParam';
import NewsItem from 'components/NewsItem';
import './App.css';

const PaginationButton = styled(Button)`
  padding: 5px;
  outline: none;
  border: none;
  color: ${(props) => props.disabled ? '#e5e6e0' : '#ff6600'};
  font-weight: bold;
  background: transparent;

`;
const PaginationSection = styled.section`
  color: #ff6600;
  text-align: right;
`;
function App() {
  const dispatch = useDispatch()
  const [pageNum, setPageNum] = useState(getQueryParam() || 0);

  const hidePost = (id) => {
    dispatch(hideArticle(id));
  }

  useEffect(() => {
    dispatch(fetchNews(pageNum));
  }, [pageNum, dispatch]);

  const newsItems = useSelector(state => state.pageData);
  const nextPage = useSelector(state => state.nextPage);
  const prevPage = useSelector(state => state.prevPage);
  const isLoading = useSelector(state => state.isLoading);
const state = {
  labels: newsItems.map((item) => item.objectID ),
  datasets: [
    {
      label: 'Votes',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#F3F2EB',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: newsItems.map((item) => item.points),
    }
  ]
}
  const renderNewsList = () => {
    return newsItems.map((newsItem, index) => {
      return (<article key={newsItem.objectID}>
        <NewsItem
          comments={newsItem.num_comments}
          createdAt={newsItem.created_at}
          title={newsItem.title}
          votes={newsItem.points}
          author={newsItem.author}
          url={newsItem.url}
          hidePost={hidePost}
          id={newsItem.objectID}
          upvoteArticle={() => {
            dispatch(upvoteArticle(newsItem.objectID));
          }}
        />
      </article>)
    })
  }

  return (
    <div className="App">
      <header className="Grid-head Header-style">
        <div>
          <img src="/ychn.png" alt="Y Combinator logo" />
          <span>Hacker News</span>
        </div>
        <span>Comments</span>
        <span>Vote Count</span>
        <span>UpVote</span>
        <span>News Details</span>
      </header>
      <main>
        <section role="list">
            {renderNewsList(newsItems)}
        </section>
        {
          (isLoading) ? <RiLoader4Line color="#ff6600" /> : null
        }
        <PaginationSection>
          <PaginationButton disabled={!prevPage} onClick={() => {setPageNum(prevPageNum => prevPageNum - 1)}}>Previous</PaginationButton>
          <span>|</span>
          <PaginationButton disabled={!nextPage} onClick={() => {setPageNum(prevPageNum => prevPageNum + 1)}}>Next</PaginationButton>
        </PaginationSection>
        <section>
          <Line
            data={state}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
