import React from 'react'
import {Link} from 'react-router-dom'

function GameList(props) {
    let games = props.games
  return (
    <>
    <div className="container my-4" style={{ height: "80vh" }}>
    <div className="list-group">
        {games.map((game)=> {
            return <Link key={game.url} to={game.url} className="list-group-item list-group-item-action" aria-current="true">
            {game.name}
          </Link>
        })}
</div>
</div>
    </>
  )
}

export default GameList