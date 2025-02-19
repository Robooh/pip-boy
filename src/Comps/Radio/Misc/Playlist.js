// LofiVegas
import Fire from './Audio/Fire.mp3';
import Orange from './Audio/Orange.mp3';
import Six from './Audio/Six.mp3';

// 3Rough
import Tp from './Audio/Tp.mp3';
import Burn from './Audio/Burn.mp3';
import Curse from './Audio/Curse.mp3';

// ElectroHouse
import Day from './Audio/Day.mp3';
import Keep from './Audio/Keep.mp3';
import Disco from './Audio/Disco.mp3';




export const Playlist = [
    {
        name: 'LofiVegas',
        tracks: [
            {src: Fire, title: 'I Don\'t Want To Set The World on Fire', artist: 'The Ink Spots', duration: '3:00'},
            {src: Orange, title: 'Orange Colored Sky', artist: 'Nat King Cole', duration: '2:33'},
            {src: Six, title: 'Sixteen Tons', artist: 'Tennessee Ernie Ford', duration: '2:38'},
        ],
        message: 'Patrolling the Mojave almost makes you wish for some lofi music'
    },


    {
        name: '3Tomika',
        tracks: [
            {src: Tp, title: 'The Pretender', artist: 'Foo Fighters', duration: '4:29'},
            {src: Burn, title: 'Burn to the Ground', artist: 'Nickelback', duration: '3:42'},
            {src: Curse, title: 'My Curse', artist: 'Killswitch Engage', duration: '4:04'},
        ],
        message: 'Ayo, it\'s 3-Dog! And DJ Atomika, bringing you that heat!'
    },


    {
        name: 'ElectroHouse',
        tracks: [
            {src: Day, title: 'Day by Day', artist: 'Unknown', duration: '3:15'},
            {src: Keep, title: 'Keep the Torch On', artist: 'Unknown', duration: '4:02'},
            {src: Disco, title: 'Disco Night', artist: 'Unknown', duration: '3:45'},
        ],
        message: 'The night is young on ElectroHouse'
    },


];
