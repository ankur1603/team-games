import React from "react";
import { Link } from "react-router-dom";

function GameList(props) {
  const { games } = props;

  return (
    <div className="container my-4">
      {/* Header */}
      <h2 className="text-center mb-4">Game List</h2>

      {/* Responsive Grid Layout */}
      <div className="row g-3">
        {games.map((game) => (
          <div key={game.url} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link
              to={game.url}
              className="card text-decoration-none h-100"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              {/* Game Thumbnail */}
              <div
                className="card-img-top"
                style={{
                  height: "150px",
                  backgroundImage: `url(${game.thumbnail || "default-thumbnail.jpg"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Game Details */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center text-truncate">
                  {game.name}
                </h5>
                <p className="card-text text-center text-muted">
                  {game.category || "Game Category"}
                </p>
              </div>

              {/* Optional Footer */}
              <div className="card-footer text-center">
                <small className="text-muted">Tap to Play</small>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameList;