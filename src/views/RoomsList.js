import { RoomsListItem } from './RoomsListItem';

export function RoomsList() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Lista naszych pokojów:</h2>
        <header>Ładowanie dostępnych pokojów...</header>
    `;

    fetch('http://localhost:3000/rooms')
        .then(response => response.json())
        .then(rooms => {
            const ul = document.createElement('ul');
            const lis = rooms.map(room => RoomsListItem(room));
            // const lis = rooms.map(RoomsListItem);

            ul.append(...lis);
            section.querySelector('header').remove();
            section.append(ul);
        });


    return section;
}
