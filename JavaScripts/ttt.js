var a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    g = 0,
    h = 0,
    i = 0,
    whose_turn = 1,
    tie = 0;
var p1 = 0,
    p2 = 0;


function A() {
    var image1 = document.getElementById('a');
    if (whose_turn === 1 && a === 0) {
        a = 1;
        whose_turn = 2;
        image1.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && a === 0) {
        a = 2;
        whose_turn = 1;
        image1.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function B() {
    var image2 = document.getElementById('b');
    if (whose_turn === 1 && b === 0) {
        b = 1;
        whose_turn = 2;
        image2.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && b === 0) {
        b = 2;
        whose_turn = 1;
        image2.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function C() {
    var image3 = document.getElementById('c');
    if (whose_turn === 1 && c === 0) {
        c = 1;
        whose_turn = 2;
        image3.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && c === 0) {
        c = 2;
        whose_turn = 1;
        image3.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function D() {
    var image4 = document.getElementById('d');
    if (whose_turn === 1 && d === 0) {
        d = 1;
        whose_turn = 2;
        image4.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && d === 0) {
        d = 2;
        whose_turn = 1;
        image4.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function E() {
    var image5 = document.getElementById('e');
    if (whose_turn === 1 && e === 0) {
        e = 1;
        whose_turn = 2;
        image5.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && e === 0) {
        e = 2;
        whose_turn = 1;
        image5.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function F() {
    var image6 = document.getElementById('f');
    if (whose_turn === 1 && f === 0) {
        f = 1;
        whose_turn = 2;
        image6.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && f === 0) {
        f = 2;
        whose_turn = 1;
        image6.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function G() {
    var image7 = document.getElementById('g');
    if (whose_turn === 1 && g === 0) {
        g = 1;
        whose_turn = 2;
        image7.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && g === 0) {
        g = 2;
        whose_turn = 1;
        image7.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function H() {
    var image8 = document.getElementById('h');

    if (whose_turn === 1 && h === 0) {
        h = 1;
        whose_turn = 2;
        image8.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && h === 0) {
        h = 2;
        whose_turn = 1;
        image8.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function I() {
    var image9 = document.getElementById('i');
    if (whose_turn === 1 && i === 0) {
        i = 1;
        whose_turn = 2;
        image9.src = '../images/block_O.jpg';
        check();
    } else if (whose_turn === 2 && i === 0) {
        i = 2;
        whose_turn = 1;
        image9.src = '../images/block_X.jpg';
        check();
    } else {
        alert("BLOCK Occupied");
    }
}

function check() {
    if ((a === 1 && b === 1 && c === 1) || (a === 1 && d === 1 && g === 1) || (c === 1 && f === 1 && i === 1) || (i === 1 && g === 1 && h === 1) || (a === 1 && e === 1 && i === 1) || (c === 1 && e === 1 && g === 1) || (d === 1 && e === 1 && f === 1) || (b === 1 && e === 1 && h === 1)) {
        alert("Player 1 Wins");
        p01();
        reset()
    } else if ((a === 2 && b === 2 && c === 2) || (a === 2 && d === 2 && g === 2) || (c === 2 && f === 2 && i === 2) || (i === 2 && g === 2 && h === 2) || (a === 2 && e === 2 && i === 2) || (c === 2 && e === 2 && g === 2) || (d === 2 && e === 2 && f === 2) || (b === 2 && e === 2 && h === 2)) {
        alert("Player 2 Wins");
        p02();
        reset();
    } else if (a === 0 || b === 0 || c === 0 || d === 0 || e === 0 || f === 0 || g === 0 || h === 0 || i === 0) {} else {
        tie_1();
        alert("ITS a TIE.");
        reset();
    }
}

function p01() {
    p1 += 1;
    document.getElementById('result1').value = p1;
}

function p02() {
    p2 += 1;
    document.getElementById('result2').value = p2;
}

function tie_1() {
    tie += 1;
    document.getElementById('pie_value').value = tie;
}

function help() {
    alert("Each player has to  form  straight line using their symbols, \nHorizontlly,\nVertically or\nHorizontally\nIf, neither are successful its a TIE");


}

function result() {
    if (p1 > p2) {
        alert('Player 1 Wins');
    } else if (p2 > p1) {
        alert('Player 2 Wins');
    } else if ((p1 == p2) && tie > 0) {
        alert('Its a Tie');
    } else if ((p1 === 0) && (p2 === 0) && (tie === 0)) {
        alert("Game in Progress");
    }
    reset();
    reset2();
}

function reset() {
    a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, whose_turn = 1;
    var image1 = document.getElementById("a");
    var image2 = document.getElementById("b");
    var image3 = document.getElementById("c");
    var image4 = document.getElementById("d");
    var image5 = document.getElementById("e");
    var image6 = document.getElementById("f");
    var image7 = document.getElementById("g");
    var image8 = document.getElementById("h");
    var image9 = document.getElementById("i");
    image1.src = '../images/block.jpg';
    image2.src = '../images/block.jpg';
    image3.src = '../images/block.jpg';
    image4.src = '../images/block.jpg';
    image5.src = '../images/block.jpg';
    image6.src = '../images/block.jpg';
    image7.src = '../images/block.jpg';
    image8.src = '../images/block.jpg';
    image9.src = '../images/block.jpg';

}

function reset2() {
    p1 = 0, p2 = 0, tie = 0;
    reset()
    document.getElementById('result1').value = 0;
    document.getElementById('result2').value = 0;
    document.getElementById('pie_value').value = 0;
}

//function botplays() {
//    var placevalue = Math.floor(Math.random() * 10)
//    return placevalue;
//}
