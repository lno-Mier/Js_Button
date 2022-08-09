window.onload = function() {
    var button1 = document.getElementById('bg_change_1');
    var body = document.getElementsByTagName('body')[0];
    var Yellow = 'Yellow';
    var button2 = document.getElementById('bg_change_2');
    var body = document.getElementsByTagName('body')[0];
    var White = 'White';
    var button3 = document.getElementById('bg_change_3');
    var body = document.getElementsByTagName('body')[0];
    var Red = 'Red';
    button1.onclick = function() {
        body.style.backgroundColor = Yellow;
    };
    button2.onclick = function() {
        body.style.backgroundColor = White;
    };
    button3.onclick = function() {
        body.style.backgroundColor = Red;
    };
};
