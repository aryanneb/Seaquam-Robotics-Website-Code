const event = document.getElementsByClassName('event');
const parent = document.getElementsByClassName('event')[0].parentNode;

const short = document.querySelector('#short');
const long = document.querySelector('#long');


function sort() {
  for (let i = 0; i < event.length; i++) {
    let first = event[0];
    parent.insertBefore(event[i], first);
  }
}

function firstToLast() {
  if (short.classList.contains("button-style2")) {} else {
    short.classList.add("button-style2");
    short.classList.remove('button-style');
    long.classList.remove("button-style2");
    long.classList.add('button-style');
    sort();
  }
}

function lastToFirst() {
  if (long.classList.contains("button-style2")) {

  } else {
    long.classList.add("button-style2");
    long.classList.remove('button-style');
    short.classList.remove("button-style2")
    short.classList.add('button-style');
    sort();
  }
}


short.addEventListener('click', firstToLast);
long.addEventListener('click', lastToFirst);