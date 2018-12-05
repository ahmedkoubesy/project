/*global console  */
/*
 * Create a list that holds all of your cards/console
 */


/*******************all varubles**************/

var starchild = document.getElementsByClassName('stars'),
    star =      document.getElementsByClassName('fa-star'),
    x =         document.getElementsByClassName('restart'),
    lis =       document.querySelectorAll('.card'),
    time =      document.getElementById('timer'),
    mov =       document.querySelector('.moves'),
    counter,
    fir,
    sec,
    i,
    min = 0,
    q = 1,
    m = 0,
    v = 0,
    p = 0,
    s = 0,
    b = 3,
    k = 1;
    


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976



function shuffle(array) {
    'use strict';
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var arr = [
        "fa fa-diamond",
        "fa fa-paper-plane-o",
        "fa fa-anchor",
        "fa fa-bolt",
        "fa fa-cube",
        "fa fa-anchor",
        "fa fa-leaf",
        "fa fa-bicycle",
        "fa fa-diamond",
        "fa fa-bomb",
        "fa fa-leaf",
        "fa fa-bomb",
        "fa fa-bolt",
        "fa fa-bicycle",
        "fa fa-paper-plane-o",
        "fa fa-cube"
    ];

arr = shuffle(arr);

for (i = 0; i < arr.length; i = i + 1) {
    
    var l = lis[i].firstElementChild.className = arr[i];
}
/*    console.log(lis[i]);
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

    /*********************function to timer***************/

function timedCount() {
    
    'use strict';
    time.innerHTML = min + ': ' + s;
    if (s >= 0) {
        s = s + 1;
        if (s === 60) {
            min = min + 1;
            s = 0;
        }
    }
}



/***************** when button the cart ******************/

function fnClick() {
    //'use strict';
    if (k === 1) {
        counter = setInterval(timedCount, 1000);
        k = 2;
    }
    
    lis[this].classList.add('open', 'show');
    
    //decress star
    m = m + 1;
    if (m === 26) {
        star[0].classList.remove('fa-star');
        b = 2;
    } else if (m === 36) {
        star[0].classList.remove('fa-star');
        b = 1;
        
    }
    
    //first click
    if (q === 1) {
        fir = lis[this];
        q = q + 1;
    }
    
     //second click  
    if (q === 3) {
        sec = lis[this];
        if (fir.getAttribute('data-value') !== sec.getAttribute('data-value')) {
            if (fir.firstElementChild.classList.item(1) === sec.firstElementChild.classList.item(1)) {
                fir.classList.remove('open', 'show');
                sec.classList.remove('open', 'show');
                fir.classList.add('match');
                sec.classList.add('match');

                v = v + 2;

                /************** When you win ************/

                if (v === 16) {
                    swal(
                        'congratulation!you win',
                        'your time is : ' + min + ': ' + s + ' / with ' + (p + 1) + ' moves / and ' + b + 'star',
                        'success'
                    );

                    clearInterval(counter);
                    var o = document.querySelector('.swal2-confirm'); //button play again
                    o.innerText = "play agein";
                    o.addEventListener("click", function () {
                        time.innerHTML = 'time';
                        k = 1;
                        for (i = 0; i < arr.length; i = i + 1) {
                            lis[i].classList.remove('match');
                            min = 0;
                            s = 0;

                        }

                        //reser properties
                        var mov = document.querySelector('.moves').innerHTML = 0;
                        starchild[0].firstElementChild.firstElementChild.classList.add('fa-star');
                        starchild[0].children[1].firstElementChild.classList.add('fa-star');
                        p = 0;
                    }
                                      );
                    v = 0;
                }


            } else {                  //If the cards do not match
                setTimeout(function () {
                    fir.classList.remove('open', 'show');
                    sec.classList.remove('open', 'show');
                }, 400);
            }
        } else {
            fir.classList.remove('open', 'show');
            sec.classList.remove('open', 'show');
            p = p - 1;
        }
        p = p + 1;
        mov.innerHTML = p;
    }
   
    if (q === 3) {
        q = 0;
    }
    q = q + 1;
}

// when button the cart
for (i = 0; i < lis.length; i = i + 1) {
    lis[i].onclick = fnClick.bind(i);
}

    /********************* button reset ****************/

x[0].addEventListener("click", function reset() {
    'use strict';
    for (i = 0; i < lis.length; i = i + 1) {

        lis[i].classList.remove('match', 'open', 'show');
    }
    if (m >= 40) {
        starchild[0].firstElementChild.firstElementChild.classList.add('fa-star');
        starchild[0].children[1].firstElementChild.classList.add('fa-star');
    }
    var mov = document.querySelector('.moves').innerHTML = 0;
    time.innerHTML = 'time';
    clearInterval(counter);
            
    m = 0;
    min = 0;
    s = 0;
    k = 1;
    p = 0;
}
                         );

for (i = 0; i < lis.length; i = i + 1) {
    lis[i].setAttribute('data-value', i);
    console.log(lis[i].getAttribute('data-value'));
    
    
}