import React, { useEffect, useState } from 'react';
import Button from 'components/UI/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from 'js/actions/home';
import getQueryParam from 'utils/getQueryParam';
import NewsItem from 'components/NewsItem';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const [pageNum, setPageNum] = useState(getQueryParam() || 0);

  useEffect(() => {
    dispatch(fetchNews(pageNum));
  }, [pageNum, dispatch]);

  const newsItems = useSelector(state => state.pageData);
  const nextPage = useSelector(state => state.nextPage);
  const prevPage = useSelector(state => state.prevPage);
  const isLoading = useSelector(state => state.isLoading);

  const renderNewsList = () => {
    return newsItems.map((newsItem, index) => {
      return (<article key={newsItem.objectID}>
        <NewsItem
          comments={newsItem.num_comments}
          createdAt={newsItem.created_at}
          title={newsItem.title}
          votes={newsItem.points}
          author={newsItem.author}
        />
      </article>)
    })
  }

  return (
    <div className="App">
      <header className="Grid-head Header-style">
        <span>Comments</span>
        <span>Vote Count</span>
        <span>UpVote</span>
        <span>News Details</span>
      </header>
      <main>
        <section>
          <ul>
            {renderNewsList(newsItems)}
          </ul>
        </section>
        <section>
          <Button disabled={!prevPage} onClick={() => {setPageNum(prevPageNum => prevPageNum - 1)}}>Prev</Button>
          <Button disabled={!nextPage} onClick={() => {setPageNum(prevPageNum => prevPageNum + 1)}}>Next</Button>
        </section>
        <section>
          chart
        </section>
      </main>
    </div>
  );
}

export default App;
