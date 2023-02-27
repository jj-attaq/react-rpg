import { world } from '../components/narrative.jsx';

function getCoordinates(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf(k);
        if (index > -1) {
            return [i, index];
        }
    }
}

export default function move(currentLocation, direction) {
    const start = getCoordinates(world, currentLocation);
    const yAxis = start[0];
    const xAxis = start[1];

    if (direction === 'north') {
        return (yAxis <= 0) || (world[yAxis - 1][xAxis] === undefined) ? currentLocation : world[yAxis - 1][xAxis];
    }
    if (direction === 'west') {
        return xAxis === 0 ? currentLocation : world[yAxis][xAxis - 1];
    }
    if (direction === 'east') {
        return xAxis >= world[yAxis].length - 1 ? currentLocation : world[yAxis][xAxis + 1];
    }
    if (direction === 'south') {
        return yAxis >= world.length - 1 ? currentLocation : world[yAxis + 1][xAxis];
    }
}
