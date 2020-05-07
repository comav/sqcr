var random = 1;
var clicked = 0;
var transformedElements;
var notTransformedElements;

function randomNumber(max) {
    random = Math.floor(Math.random() * Math.floor(max));

    transformedElements = document.getElementsByClassName('transformed');
    notTransformedElements = document.getElementsByClassName('notTransformed');

    if (clicked != 0) {
        transformedElements[0].classList.add('notTransformed')
        transformedElements[0].classList.remove('transformed');
    }


    switch (random) {
        case 1: 
            document.getElementById("square1").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 2: 
            document.getElementById("square2").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 3:
            document.getElementById("square3").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 4: 
            document.getElementById("square4").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 5: 
            document.getElementById("square5").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 6: 
            document.getElementById("square6").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 7:
            document.getElementById("square7").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 8: 
            document.getElementById("square8").classList.add("transformed");
            clicked = clicked + 1;
            break;
        case 9: 
            document.getElementById("square9").classList.add("transformed");
            clicked = clicked + 1;
            break;
        default:
            randomNumber(9);
            break;
    }
    transformedElements.setAttribute(onclick, randomNumber(9));
    notTransformedElements.removeAttribute(onclick);
}