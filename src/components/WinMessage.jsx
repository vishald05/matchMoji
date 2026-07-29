function WinMessage({score, moves}){
    return (
        <div className="win-message">
            <h2>Congratulations!!!! 🥳</h2>
            <p>You Scored : {score}</p>
            <p>In {moves} Moves</p>
        </div>
    );
}

export default WinMessage;