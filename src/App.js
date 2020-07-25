import React from 'react';
// import styled from 'styled-components';
import NewsItem from 'components/NewsItem';
import logo from './logo.svg';
import './App.css';
// const a = styled.div`
//   background: red;
// `;
const data = {
    "hits": [
        {
            "created_at": "2020-07-25T04:15:00.000Z",
            "title": "Bloomfilters debunked: Dispelling 30 Years of math with Coq",
            "url": "https://gopiandcode.uk/logs/log-bloomfilters-debunked.html",
            "author": "gopiandcode",
            "points": 341,
            "story_text": null,
            "comment_text": null,
            "num_comments": 102,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595650500,
            "_tags": [
                "story",
                "author_gopiandcode",
                "story_23946793",
                "front_page"
            ],
            "objectID": "23946793",
            "_highlightResult": {
                "title": {
                    "value": "Bloomfilters debunked: Dispelling 30 Years of math with Coq",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://gopiandcode.uk/logs/log-bloomfilters-debunked.html",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "gopiandcode",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T05:56:43.000Z",
            "title": "LSD Chemist William Pickard to Be Released from Prison",
            "url": "https://www.psymposia.com/magazine/william-leonard-pickard-lsd/",
            "author": "miles",
            "points": 329,
            "story_text": null,
            "comment_text": null,
            "num_comments": 197,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595656603,
            "_tags": [
                "story",
                "author_miles",
                "story_23947157",
                "front_page"
            ],
            "objectID": "23947157",
            "_highlightResult": {
                "title": {
                    "value": "LSD Chemist William Pickard to Be Released from Prison",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.psymposia.com/magazine/william-leonard-pickard-lsd/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "miles",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T14:27:18.000Z",
            "title": "Homeland Security Was Destined to Become a Secret Police Force",
            "url": "https://www.newyorker.com/news/our-columnists/the-dhs-was-destined-to-become-a-secret-police-force",
            "author": "jbegley",
            "points": 178,
            "story_text": null,
            "comment_text": null,
            "num_comments": 114,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595687238,
            "_tags": [
                "story",
                "author_jbegley",
                "story_23949421",
                "front_page"
            ],
            "objectID": "23949421",
            "_highlightResult": {
                "title": {
                    "value": "Homeland Security Was Destined to Become a Secret Police Force",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.newyorker.com/news/our-columnists/the-dhs-was-destined-to-become-a-secret-police-force",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "jbegley",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T10:53:31.000Z",
            "title": "Banks are slow to increase rates on savings accounts, but quick to reduce them",
            "url": "http://jpkoning.blogspot.com/2020/06/banks-are-slow-to-increase-rates-on.html",
            "author": "jpkoning",
            "points": 151,
            "story_text": null,
            "comment_text": null,
            "num_comments": 107,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595674411,
            "_tags": [
                "story",
                "author_jpkoning",
                "story_23948206",
                "front_page"
            ],
            "objectID": "23948206",
            "_highlightResult": {
                "title": {
                    "value": "Banks are slow to increase rates on savings accounts, but quick to reduce them",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "http://jpkoning.blogspot.com/2020/06/banks-are-slow-to-increase-rates-on.html",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "jpkoning",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T12:24:23.000Z",
            "title": "Show HN: A simple CLI tool to generate satellite images of a location",
            "url": "https://github.com/plant99/felicette",
            "author": "plant99",
            "points": 148,
            "story_text": null,
            "comment_text": null,
            "num_comments": 20,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595679863,
            "_tags": [
                "story",
                "author_plant99",
                "story_23948672",
                "show_hn",
                "front_page"
            ],
            "objectID": "23948672",
            "_highlightResult": {
                "title": {
                    "value": "Show HN: A simple CLI tool to generate satellite images of a location",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://github.com/plant99/felicette",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "plant99",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-24T10:06:45.000Z",
            "title": "Datahike: Durable Datalog database powered by an efficient Datalog query engine",
            "url": "https://github.com/replikativ/datahike",
            "author": "tosh",
            "points": 119,
            "story_text": null,
            "comment_text": null,
            "num_comments": 0,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595585205,
            "_tags": [
                "story",
                "author_tosh",
                "story_23937676",
                "front_page"
            ],
            "objectID": "23937676",
            "_highlightResult": {
                "title": {
                    "value": "Datahike: Durable Datalog database powered by an efficient Datalog query engine",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://github.com/replikativ/datahike",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "tosh",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T10:57:55.000Z",
            "title": "Show HN: Textdb.dev – simple data sharing for fun projects",
            "url": "https://textdb.dev",
            "author": "bontaq",
            "points": 116,
            "story_text": null,
            "comment_text": null,
            "num_comments": 35,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595674675,
            "_tags": [
                "story",
                "author_bontaq",
                "story_23948234",
                "show_hn",
                "front_page"
            ],
            "objectID": "23948234",
            "_highlightResult": {
                "title": {
                    "value": "Show HN: Textdb.dev – simple data sharing for fun projects",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://textdb.dev",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "bontaq",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T08:37:32.000Z",
            "title": "Show HN: I made a minimalist spaced repetition tool",
            "url": "https://memordo.com",
            "author": "mvind",
            "points": 111,
            "story_text": null,
            "comment_text": null,
            "num_comments": 51,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595666252,
            "_tags": [
                "story",
                "author_mvind",
                "story_23947659",
                "show_hn",
                "front_page"
            ],
            "objectID": "23947659",
            "_highlightResult": {
                "title": {
                    "value": "Show HN: I made a minimalist spaced repetition tool",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://memordo.com",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "mvind",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T07:14:01.000Z",
            "title": "Digikam 7.0 Released with Neural network-based face Recognition",
            "url": "https://www.digikam.org/news/2020-07-19-7.0.0_release_announcement/",
            "author": "ekianjo",
            "points": 94,
            "story_text": null,
            "comment_text": null,
            "num_comments": 21,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595661241,
            "_tags": [
                "story",
                "author_ekianjo",
                "story_23947398",
                "front_page"
            ],
            "objectID": "23947398",
            "_highlightResult": {
                "title": {
                    "value": "Digikam 7.0 Released with Neural network-based face Recognition",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.digikam.org/news/2020-07-19-7.0.0_release_announcement/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "ekianjo",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T06:02:41.000Z",
            "title": "Wayland and LVGL on PinePhone with Ubuntu Touch",
            "url": "https://lupyuen.github.io/pinetime-rust-mynewt/articles/wayland",
            "author": "lupyuen",
            "points": 84,
            "story_text": null,
            "comment_text": null,
            "num_comments": 36,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595656961,
            "_tags": [
                "story",
                "author_lupyuen",
                "story_23947176",
                "front_page"
            ],
            "objectID": "23947176",
            "_highlightResult": {
                "title": {
                    "value": "Wayland and LVGL on PinePhone with Ubuntu Touch",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://lupyuen.github.io/pinetime-rust-mynewt/articles/wayland",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "lupyuen",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T05:09:16.000Z",
            "title": "Research Suggests Machu Picchu Was Purposely Built on Intersecting Fault Lines",
            "url": "https://www.smithsonianmag.com/smart-news/machu-picchu-was-purposely-built-top-intersecting-fault-lines-180973216/",
            "author": "onetimemanytime",
            "points": 82,
            "story_text": null,
            "comment_text": null,
            "num_comments": 46,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595653756,
            "_tags": [
                "story",
                "author_onetimemanytime",
                "story_23946999",
                "front_page"
            ],
            "objectID": "23946999",
            "_highlightResult": {
                "title": {
                    "value": "Research Suggests Machu Picchu Was Purposely Built on Intersecting Fault Lines",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.smithsonianmag.com/smart-news/machu-picchu-was-purposely-built-top-intersecting-fault-lines-180973216/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "onetimemanytime",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T13:55:47.000Z",
            "title": "Smartphone contact tracing has failed everywhere",
            "url": "https://eclecticlight.co/2020/07/25/smartphone-contact-tracing-has-failed-everywhere/",
            "author": "zdw",
            "points": 72,
            "story_text": null,
            "comment_text": null,
            "num_comments": 69,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595685347,
            "_tags": [
                "story",
                "author_zdw",
                "story_23949192",
                "front_page"
            ],
            "objectID": "23949192",
            "_highlightResult": {
                "title": {
                    "value": "Smartphone contact tracing has failed everywhere",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://eclecticlight.co/2020/07/25/smartphone-contact-tracing-has-failed-everywhere/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "zdw",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T12:05:11.000Z",
            "title": "A combo of fasting plus vitamin C is effective for hard-to-treat cancers in mice",
            "url": "https://www.sciencedaily.com/releases/2020/05/200512151941.htm",
            "author": "kn8",
            "points": 65,
            "story_text": null,
            "comment_text": null,
            "num_comments": 34,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595678711,
            "_tags": [
                "story",
                "author_kn8",
                "story_23948570",
                "front_page"
            ],
            "objectID": "23948570",
            "_highlightResult": {
                "title": {
                    "value": "A combo of fasting plus vitamin C is effective for hard-to-treat cancers in mice",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.sciencedaily.com/releases/2020/05/200512151941.htm",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "kn8",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T01:21:21.000Z",
            "title": "Sun Ra: ‘I’m Everything and Nothing’",
            "url": "https://www.nybooks.com/articles/2020/07/23/sun-ra-everything-nothing/",
            "author": "tintinnabula",
            "points": 65,
            "story_text": null,
            "comment_text": null,
            "num_comments": 5,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595640081,
            "_tags": [
                "story",
                "author_tintinnabula",
                "story_23946102",
                "front_page"
            ],
            "objectID": "23946102",
            "_highlightResult": {
                "title": {
                    "value": "Sun Ra: ‘I’m Everything and Nothing’",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.nybooks.com/articles/2020/07/23/sun-ra-everything-nothing/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "tintinnabula",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T10:07:58.000Z",
            "title": "Blackbaud hack: More UK universities confirm breach",
            "url": "https://www.bbc.com/news/technology-53528329",
            "author": "AznHisoka",
            "points": 63,
            "story_text": null,
            "comment_text": null,
            "num_comments": 41,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595671678,
            "_tags": [
                "story",
                "author_AznHisoka",
                "story_23947983",
                "front_page"
            ],
            "objectID": "23947983",
            "_highlightResult": {
                "title": {
                    "value": "Blackbaud hack: More UK universities confirm breach",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.bbc.com/news/technology-53528329",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "AznHisoka",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T13:45:19.000Z",
            "title": "How Iceland Got Teens to Say No to Drugs (2017)",
            "url": "https://www.theatlantic.com/health/archive/2017/01/teens-drugs-iceland/513668/",
            "author": "amelius",
            "points": 49,
            "story_text": null,
            "comment_text": null,
            "num_comments": 20,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595684719,
            "_tags": [
                "story",
                "author_amelius",
                "story_23949118",
                "front_page"
            ],
            "objectID": "23949118",
            "_highlightResult": {
                "title": {
                    "value": "How Iceland Got Teens to Say No to Drugs (2017)",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.theatlantic.com/health/archive/2017/01/teens-drugs-iceland/513668/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "amelius",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T10:14:24.000Z",
            "title": "Acorn Archimedes – A Technical Introduction (1987) [video]",
            "url": "https://www.youtube.com/watch?v=KKTa54UikgE",
            "author": "pjmlp",
            "points": 47,
            "story_text": null,
            "comment_text": null,
            "num_comments": 23,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595672064,
            "_tags": [
                "story",
                "author_pjmlp",
                "story_23948009",
                "front_page"
            ],
            "objectID": "23948009",
            "_highlightResult": {
                "title": {
                    "value": "Acorn Archimedes – A Technical Introduction (1987) [video]",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.youtube.com/watch?v=KKTa54UikgE",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "pjmlp",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T04:53:28.000Z",
            "title": "‘Alexandrian’ glass confirmed by hafnium isotopes",
            "url": "https://www.nature.com/articles/s41598-020-68089-w",
            "author": "diodorus",
            "points": 46,
            "story_text": null,
            "comment_text": null,
            "num_comments": 4,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595652808,
            "_tags": [
                "story",
                "author_diodorus",
                "story_23946933",
                "front_page"
            ],
            "objectID": "23946933",
            "_highlightResult": {
                "title": {
                    "value": "‘Alexandrian’ glass confirmed by hafnium isotopes",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.nature.com/articles/s41598-020-68089-w",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "diodorus",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-25T13:53:10.000Z",
            "title": "Intel Gen12/Xe Graphics Have AV1 Accelerated Decode – Linux Support Lands",
            "url": "https://www.phoronix.com/scan.php?page=news_item&px=Intel-Gen12-Xe-AV1-Decode-Media",
            "author": "gardaani",
            "points": 40,
            "story_text": null,
            "comment_text": null,
            "num_comments": 7,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595685190,
            "_tags": [
                "story",
                "author_gardaani",
                "story_23949173",
                "front_page"
            ],
            "objectID": "23949173",
            "_highlightResult": {
                "title": {
                    "value": "Intel Gen12/Xe Graphics Have AV1 Accelerated Decode – Linux Support Lands",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.phoronix.com/scan.php?page=news_item&px=Intel-Gen12-Xe-AV1-Decode-Media",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "gardaani",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-07-23T11:57:51.000Z",
            "title": "Whose bug is it anyway?",
            "url": "https://shkspr.mobi/blog/2020/07/whose-bug-is-it-anyway/",
            "author": "edent",
            "points": 37,
            "story_text": null,
            "comment_text": null,
            "num_comments": 23,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1595505471,
            "_tags": [
                "story",
                "author_edent",
                "story_23926357",
                "front_page"
            ],
            "objectID": "23926357",
            "_highlightResult": {
                "title": {
                    "value": "Whose bug is it anyway?",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://shkspr.mobi/blog/2020/07/whose-bug-is-it-anyway/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "edent",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        }
    ],
    "nbHits": 30,
    "page": 0,
    "nbPages": 2,
    "hitsPerPage": 20,
    "exhaustiveNbHits": true,
    "query": "",
    "params": "advancedSyntax=true&analytics=true&analyticsTags=backend&tags=front_page",
    "processingTimeMS": 1
}

function App() {
  const newsItems = data.hits;
  const renderNewsList = () => {
    return newsItems.map((newsItem, index) => {
      return (<article key={index}>
        <NewsItem
          comments={newsItem.num_comments}
          createdAt={newsItem.created_at}
          title={newsItem.title}
          votes={newsItem.points}
          author={newsItem.author}
        />
{/*      comments - number
      vote count - number
      upvote - button
      <div>
      <a>news link</a>
      site
      author
      post time
      hide button
      </div>*/}
      </article>)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
      </header>
        <section>
          Head
        </section>
        <section>
        {renderNewsList(newsItems)}
        </section>
        <section>
          Prev/next
        </section>
        <section>
          chart
        </section>
    </div>
  );
}

export default App;
