var totalSeconds = 86400;

//detect system theme
function detectTheme() {
    var theme = "";
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    } else {
        theme = "light";
    }
    return theme;
}

console.log(detectTheme());


function Display() {


    setInterval(() => {
        var dts = new Date();
        var hr = dts.getHours();
        var min = dts.getMinutes();
        var sec = dts.getSeconds();
        var hradd = hr * 3600;
        var seconds = hradd + min + sec;
        const a = totalSeconds - seconds;
        let prin = document.getElementById('demo');
        prin.innerHTML = a;
        console.log(a);
        prin.style.color = getColor(seconds);
    }, 1000);

}

Display();



function getColor(seconds) {
    if (seconds < 3600) {
        return 'red';
    } else if (seconds < 7200) {
        return 'orange';
    } else if (seconds < 10800) {
        return 'yellow';
    } else if (seconds < 14400) {
        return 'green';
    } else if (seconds < 18000) {
        return 'blue';
    } else if (seconds < 21600) {
        return 'indigo';
    } else if (seconds < 25200) {
        return 'violet';
    } else if (seconds < 54000) {
        return 'gold';
    } else {
        return 'red';
    }
}
