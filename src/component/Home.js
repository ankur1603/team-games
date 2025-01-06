import React from 'react'

import GameList from './GameList'

import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

export default function Home() {
  const games = [
    {'name': 'Battle Ships', url: '/battleships'},
    {'name': 'A Game', url: '/agame'},
    {'name': 'BGame', url: '/bgame'},
  ]
  return (
    <>
      <GameList games={games} />
    </>
  )
}
