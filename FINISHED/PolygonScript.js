
function validateEntry(entry) {
    if (entry > 10 || entry < 1) {
        alert("Please only use a number 1 - 10");
        window.location.reload();
    }

}
function getShape(sides) {
    switch (sides) {
        case 1:
            return 'Henagon';
        case 2:
            return 'Digon';
        case 3:
            return 'Trigon';
        case 4:
            return 'Tetragon';
        case 5:
            return 'Pentagon';
        case 6:
            return 'Hexagon';
        case 7:
            return 'Heptagon';
        case 8:
            return 'Octagon';
        case 9:
            return 'Enneagon';
        case 10:
            return 'Hendecagon';
    }
}
var number = window.prompt("The Salty Jellyfish Requires a Number");
var FinalNum = parseInt(number)
FinalNum = Math.round(FinalNum);
FinalNum = Math.abs(FinalNum);
validateEntry(FinalNum);
document.getElementById('PolygonName').textContent = getShape(FinalNum);