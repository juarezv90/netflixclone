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
    </div>
  )
}

export default Home
