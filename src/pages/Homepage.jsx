export default function Homepage({onPlay}){
    return(
        <>
        <p className = "small">Welcome to...</p>
        <h1 className = "title">GAME TITLE</h1>
        <p className ="small">short description....</p>
        <button className="square" onClick={onPlay}>PLAY</button>
        </>
    )
}
