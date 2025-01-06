import PlayerContext from "./PlayerContext"
import {useState} from "react";

const PlayerState = (props) => {
    const player = {
        "name": "",
        "teamName": "",
        "subTeamName": "",
        "role": "player"
    }
    let storedPlayer = JSON.parse(localStorage.getItem('player'));
    let isLoggedIn = storedPlayer!= null && storedPlayer.state != {} 
    const [state, setState] = useState(!isLoggedIn ? player:storedPlayer);
    const update = (value, attr) => {
        state[attr] = value;
        localStorage.setItem('player', JSON.stringify(state));
    }

    return (
        <PlayerContext.Provider value={{state,update, setState}}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerState;