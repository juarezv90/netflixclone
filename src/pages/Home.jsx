import React from 'react'
import Main from '../Component/Main'
import request from '../Component/Request'
import Row from '../Component/Row'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Popular' fetchURL={request.requestPopular} />
      <Row rowID='2' title='Trending' fetchURL={request.requestTrending} />
      <Row rowID='3' title='Top Rated' fetchURL={request.requestTopRated} />
      <Row rowID='4' title='Now Playing' fetchURL={request.requestNowPlaying} />
    </div>
  )
}

export default Home
