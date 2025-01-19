import React from 'react'

import GameList from './GameList'

import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

export default function Home() {
  const games = [
    {'name': '🚢 Battleships 🚢', url: '/battleships', thumbnail: 'BattleShips1.jpeg', category: 'Strategy' },
    {'name': 'Tic Tac Toe (Coming Soon...)', url: '/tictactoe', thumbnail: 'ultimate-tic-tac-toe.jpeg', category: 'Strategy' },
  ]
  return (
    <>
      <GameList games={games} />
    </>
  )
}
