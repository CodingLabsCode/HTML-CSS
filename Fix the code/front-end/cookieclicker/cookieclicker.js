let count = 0
function addcookie() {
    count ++
    document.getElementById("nmbrcookie").innerHTML = count;
}
function reset() {
    count = 0
    document.getElementById("nmbrcookie").innerHTML = count;
}