import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';
import { AddToCartButton } from '../common/AddToCartButton';

export function RoomsListItem(room) {
    const li = document.createElement('li');

    li.innerHTML = `

            <h4>${room.name}</h4>
            <p>
                ${room.price.toFixed(2)} PLN
            </p>
        `;

        
    li.append(
        Button({
            text: 'Szczegóły',
            classes: 'btn btn-primary',
            onClick: () => {
                const customEvent = new CustomEvent('navigate', {
                    detail: () => RoomDetails(room.id)
                });
                
                document.body.dispatchEvent(customEvent);
            }
        })
    );


    
    li.append(AddToCartButton(room));

    return li;
}
