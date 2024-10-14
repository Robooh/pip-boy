// LofiVegas
import Fire from './Audio/Fire.mp3'
import Orange from './Audio/Orange.mp3'
import Six from './Audio/Six.mp3'
// 3Rough
 import Tp from './Audio/Tp.mp3';
 import Burn from './Audio/Burn.mp3';
 import Curse from './Audio/Curse.mp3';

// ElectroHouse
import Day from './Audio/Day.mp3';
import Keep from './Audio/Keep.mp3'
import Disco from './Audio/Disco.mp3'



export const Playlist = [
    {
        name: 'LofiVegas',
        tracks: [
            {src:Fire, title: 'I Don"t Want To Set The World on Fire'},
            {src:Orange, title: 'Orange Colored Sky' },
            {src:Six,  title: 'Sixteen Tons' },
        ],
        message: 'Patrolling the Mojave almost makes you wish for some lofi music'
    },

    {
        name: '3Tomika',
        tracks: [
            {src:Tp, title: 'The Pretender' },
            {src:Burn, title: 'Burn"to the ground' },
            {src:Curse, title: 'My Curse' },
        ],
        message: 'Ayo"is 3-Dog! and Dj"Atomika,bringing you that heat'
    },

    {
        name: 'ElectroHouse',
        tracks: [
            {src:Day, title: 'Day by Day' },
            {src:Keep, title: 'Keep the torch on' },
            {src:Disco, title: 'Disco Night' },
        ],
        message: 'The night is young on ElectroHouse'
    },

];