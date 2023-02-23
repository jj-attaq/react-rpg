import { useState, useEffect } from 'react';
import { hero, world, map } from './narrative.jsx';

const log = console.log;

export default function GameWindow() {
    const [currentLocation, setLocation] = useState(world[1][1]);
    const [currentText, setText] = useState(currentLocation.description);
    log(currentText);
    return (
        <div className="game-window">
            <Narrative text={currentText}/>
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
    /*
    const walkNorth = "You walk North.";
    const walkWest = "You walk West.";
    const walkEast = "You walk East.";
    const walkSouth = "You walk South.";
    */
    function getCoordinates(arr, k) {
      for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(k);
        if (index > -1) {
          return [i, index];
        }
      }
    }
    function handleKeyDown(e) {
        /*
        function handleMovement(e) {
            setLocation(currentLocation = world[1][0]);
            setText(currentLocation.description);
        }
        */
        if (e.key === 'ArrowUp') {
            log('key pressed: ' + e.key);
            let description = 'north';
            // https://stackoverflow.com/questions/24943200/javascript-2d-array-indexof
            setLocation((currentLocation, direction) => {
                let start = getCoordinates(map, currentLocation);
                if (direction === 'north') {
                    return map[start[0] - 1][start[0]];
                }
            });
            setText(currentLocation.description)
        }
        if (e.key === 'ArrowLeft') {
            log('key pressed: ' + e.key);
            setText(walkWest);
        }
        if (e.key === 'ArrowRight') {
            log('key pressed: ' + e.key);
            setText(walkEast);
        }
        if (e.key === 'ArrowDown') {
            log('key pressed: ' + e.key);
            setText(walkSouth);
        }
    }
    useEffect(() => {
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
            <Button value={"N"} type={"btn nav-btn"} onBtnClick={() => setText(walkNorth)} />
            <div></div>
            <Button value={"W"} type={"btn nav-btn"} onBtnClick={() => setText(walkWest)} />
            <div></div>
            <Button value={"E"} type={"btn nav-btn"} onBtnClick={() => setText(walkEast)} />
            <div></div>
            <Button value={"S"} type={"btn nav-btn"} onBtnClick={() => setText(walkSouth)} />
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
    /*
        setLocation((currentLocation, direction) => {
            let start = getCoordinates(map, currentLocation);
            if (direction === 'north') {
                return map[start[0] - 1][start[0]];
            }
            if (direction === 'west') {
                return map[start[0]][start[0] - 1];
            }
            if (direction === 'east') {
                return map[start[0]][start[0] + 1];
            }
            if (direction === 'south') {
                return map[start[0] + 1][start[0]];
            }
        });
    */
}
