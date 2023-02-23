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
    entrance,
    [firstRoom, secondRoom]
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
