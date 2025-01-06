import BSContext from "./BSContext"
import {useState} from "react";

const BSState = (props) => {
    const fromLocalStorageOrDefault= (key, defaultValue) => {
        return localStorage.getItem(key)===null || localStorage.getItem(key) === "undefined" 
        ? defaultValue: JSON.parse(localStorage.getItem(key))
    }

    const [teamPlayers, setTeamPlayers] = useState(fromLocalStorageOrDefault('teamPlayers',[]));
    const updateTeamPlayers = (players) => {
        setTeamPlayers(players);
        localStorage.setItem('teamPlayers', JSON.stringify(players));
    }


    const [team1Players, setTeam1Players] = useState(fromLocalStorageOrDefault('team1Players',[]));
    const updateTeam1Players = (players) => {
        setTeam1Players(players);
        localStorage.setItem('team1Players', JSON.stringify(players));
    }

    const [team2Players, setTeam2Players] = useState(fromLocalStorageOrDefault('team2Players',[]));
    const updateTeam2Players = (players) => {
        setTeam2Players(players);
        localStorage.setItem('team2Players', JSON.stringify(players));
    }

    const [gameStarted, setGameStarted] = useState(fromLocalStorageOrDefault('gameStarted',false));
    const updateGameStarted = (status) => {
        setGameStarted(status);
        localStorage.setItem('gameStarted', status);
    }
    
    const [teamSplitDone, setTeamSplitDone] = useState(fromLocalStorageOrDefault('teamSplitDone',false));
    const updateTeamSplitDone = (status) => {
        setTeamSplitDone(status);
        localStorage.setItem('teamSplitDone', status);
    }

    const size = 10;
    const defaultMatrix = Array.from({ length: size }, () => Array(size).fill({"ours": "white", "hit_miss": "empty" }))
    let existingMatrix = fromLocalStorageOrDefault('matrix',defaultMatrix);
    const [matrix, setMatrix] = useState(existingMatrix);
    const updateMatrix = (updatedMatrix) => {
        setMatrix(updatedMatrix);
        localStorage.setItem('matrix', JSON.stringify(updatedMatrix));
    }

    const refreshMatrix = (row, col, key, value) => {
        const updatedMatrix = [...matrix];
        updatedMatrix[row][col] = {...updatedMatrix[row][col], [key]: value};
        updateMatrix(updatedMatrix);
    }

    const [score, setScore] = useState(fromLocalStorageOrDefault('score', 0));
    const updateScore = (newScore) => {
        setScore(newScore);
        localStorage.setItem('score', newScore);
    }

    const [opponentScore, setOpponentScore] = useState(fromLocalStorageOrDefault('opponentScore', 0));
    const updateOpponentScore = (newScore) => {
        setOpponentScore(newScore);
        localStorage.setItem('opponentScore', newScore);
    }

    const resetAll = () => {
        updateMatrix(defaultMatrix);
        updateGameStarted(false);
        updateTeamSplitDone(false);
        updateTeam1Players([]);
        updateTeam2Players([]);
        updateScore(0);
        updateOpponentScore(0);
    }
    return (
        <BSContext.Provider value={{
            teamPlayers,
            updateTeamPlayers,
            team1Players,
            updateTeam1Players,
            team2Players,
            updateTeam2Players,
            gameStarted,
            updateGameStarted,
            teamSplitDone,
            updateTeamSplitDone, 
            matrix, 
            refreshMatrix, 
            size,
            score,
            updateScore,
            opponentScore,
            updateOpponentScore,
            resetAll}}>
            {props.children}
        </BSContext.Provider>
    )
}

export default BSState;