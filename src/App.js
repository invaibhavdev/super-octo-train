import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Header from 'components/Header'
import PaginationButtons from 'components/PaginationButtons'
import { RiLoader4Line } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews, hideArticle, upvoteArticle } from 'js/actions/home'
import getQueryParam from 'utils/getQueryParam'
import NewsItem from 'components/NewsItem'
import './App.css'

const PaginationSection = styled.section`
  color: #ff6600;
  text-align: right;
`
function App() {
  const dispatch = useDispatch()
  const [pageNum, setPageNum] = useState(getQueryParam(document.location) || 1)

  // func for hiding article
  const hidePost = (id) => {
    dispatch(hideArticle(id))
  }

  // this effect is called when there pageNum is changed
  useEffect(() => {
    window.history.pushState({ id: pageNum }, '', `?p=${pageNum}`)
    dispatch(fetchNews(pageNum))
  }, [pageNum, dispatch])

  // list of news
  const newsItems = useSelector((state) => state.pageData)

  // next page availability
  const nextPage = useSelector((state) => state.nextPage)

  // previous page availability
  const prevPage = useSelector((state) => state.prevPage)

  // data fetching indicator
  const isLoading = useSelector((state) => state.isLoading)

  // variables for chart inputs
  const state = {
    labels: newsItems.map((item) => item.objectID),
    datasets: [
      {
        label: 'Votes',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#F3F2EB',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: newsItems.map((item) => item.points),
      },
    ],
  }

  // loops over the news article list from the API and returns an array
  const renderNewsList = () => {
    return newsItems.map((newsItem, index) => {
      return (
        <article key={newsItem.objectID}>
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
              dispatch(upvoteArticle(newsItem.objectID))
            }}
          />
        </article>
      )
    })
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section role="list">{renderNewsList(newsItems)}</section>

        {isLoading && (
          <RiLoader4Line className="App-logo" size="2em" color="#ff6600" />
        )}

        {newsItems.length > 0 && (
          <PaginationSection>
            <PaginationButtons
              nextPage={nextPage}
              prevPage={prevPage}
              onNextClick={() => {
                setPageNum((prevPageNum) => parseInt(prevPageNum) + 1)
              }}
              onPrevClick={() => {
                setPageNum((prevPageNum) => parseInt(prevPageNum) - 1)
              }}
            />
          </PaginationSection>
        )}
        {newsItems.length > 0 && (
          <section>
            <Line data={state} />
          </section>
        )}
      </main>
    </div>
  )
}

export default App
