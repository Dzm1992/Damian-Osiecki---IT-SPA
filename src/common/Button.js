
export function Button(options) {
    const {
        text = '',
        classes = '',
        onClick = () => {}
    } = options;

    const button = document.createElement('button');

    button.setAttribute('type', 'button');
    button.innerText = text;
    button.className = classes;
    button.addEventListener('click', onClick);
    button.style.padding = '1em';
    button.style.margin = '1px'

    return button;
}
