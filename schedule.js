const event = document.getElementsByClassName('event');
const parent = document.getElementsByClassName('event')[0].parentNode;

function sort() {
    for (let i = 0; i < event.length; i++) {
        let first = event[0];
        parent.insertBefore(event[i], first);
    }
}