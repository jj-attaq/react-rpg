"use strict";
const log = console.log;

function makeRoom(description, objects) {
    const isPresent = () => {
        
    }
    return {
        description,
        objects
    }
}
const entrance = makeRoom('You stand before an ancient doorway. Though the sun shines brightly over your shoulder, you cannot see anything inside.', [null]);
const firstRoom = makeRoom('A dark room.', ['Knife']);
const secondRoom = makeRoom('A dark room with an eerie green glow to what you believe is east.', [null]);
export const world = [
    [{description: 'room 1'}, {description: 'room 2'}, {description: 'room 3'}],
    [{description: 'room 4'}, {description: 'room 5'}, {description: 'room 6'}],
    [{description: 'room 7'}, {description: 'room 8'}, {description: 'room 9'}],
    [{description: 'room 10'}, {description: 'room 11'}, {description: 'room 12'}],
    [{description: 'room 13'}, {description: 'room 14'}, {description: 'room 15'}, {description: 'test room'}]
];

export const hero = {
    name: 'Pera',
    /*
    move: (x, y) => {
        const start = world[y][x];
        const newLoc = start[y + 1][x];
        return location = newLoc;
    },
    */
    location: world[0]
};
