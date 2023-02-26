import { useState, useEffect } from 'react';
import { hero, world } from './narrative.jsx';
import move from '../funcs/movement.js';

const log = console.log;

export default function GameWindow() {
    const [currentLocation, setLocation] = useState(world[1][1]);
    const [currentText, setText] = useState(currentLocation.description);
    // https://stackoverflow.com/questions/61569172/associate-a-state-with-another-state-in-usestate-hook
    return (
        <div className="game-window">
            <Narrative text={currentLocation.description}/>
            <div className="window dashboard">
                <Navigation setText={setText} currentLocation={currentLocation} setLocation={setLocation} />
                <Interaction setText={setText}/>
                <Combat setText={setText}/>
            </div>
            </div>
    );
}
export function Narrative({text}) {
    return (
        <div className="window narrative">
            <p>{text}</p>
        </div>
    );
}
function Button({value, onBtnClick, type}) {
    return (
        <button className={`${type}`} onClick={onBtnClick}>{value}</button>
    );
}
function Navigation({setText, currentLocation, setLocation}) {
    const walkNorth = "north";
    const walkWest = "west";
    const walkEast = "east";
    const walkSouth = "south";
    function handleMovement(direction) {
        const newLoc = move(currentLocation, direction);
        setLocation(newLoc);
        setText(currentLocation.description);
    }
    function handleKeyDown(e) {
        if (e.key === 'ArrowUp') {
            log('key pressed: ' + e.key);
            handleMovement(walkNorth);
            // https://stackoverflow.com/questions/24943200/javascript-2d-array-indexof
        }
        if (e.key === 'ArrowLeft') {
            log('key pressed: ' + e.key);
            handleMovement(walkWest);
        }
        if (e.key === 'ArrowRight') {
            log('key pressed: ' + e.key);
            handleMovement(walkEast);
        }
        if (e.key === 'ArrowDown') {
            log('key pressed: ' + e.key);
            handleMovement(walkSouth);
        }
    }
    useEffect(() => {
        log(currentLocation);
        window.addEventListener('keydown', handleKeyDown)
        return () => { // this return is to clear the eventListener on mount
            log('listener removed')
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [() => setText]) // page won't load if it's not an arrow function, because setText is a change of state, not a state in itself
    return (
        <>
        <div className="navigation" >
            <div></div>
            <Button value={"N"} type={"btn nav-btn"} onBtnClick={() => handleMovement(walkNorth) }/>
            <div></div>
            <Button value={"W"} type={"btn nav-btn"} onBtnClick={() => handleMovement(walkWest) } />
            <div></div>
            <Button value={"E"} type={"btn nav-btn"} onBtnClick={() => handleMovement(walkEast)} />
            <div></div>
            <Button value={"S"} type={"btn nav-btn"} onBtnClick={() => handleMovement(walkSouth) } />
            <div></div>
        </div>
        </>
    );
}
function Interaction({setText}) {
    return (
        <>
        <div className="interaction">
            <Button value={"Look"} type={"btn"} onBtnClick={() => setText("You look around.")}/>
            <Button value={"Grab"} type={"btn"} onBtnClick={() => setText("You grab something.")}/>
        </div>
        </>
    );
}
function Combat({setText}) {
    return (
        <div className={"combat"}>
            <Button value={"Attack"} type={"btn"} onBtnClick={() => setText("You attack!")}/>
        </div>
    );
}
