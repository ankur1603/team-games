import React from 'react'

import GameList from './GameList'

import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

export default function Home() {
  const games = [
    {'name': '🚢 Battleships 🚢', url: '/battleships'},
    {'name': 'Tic Tac Toe (Coming Soon...)', url: '/agame'},
    {'name': 'More ...', url: '/bgame'},
  ]
  return (
    <>
      <GameList games={games} />
    </>
  )
}
