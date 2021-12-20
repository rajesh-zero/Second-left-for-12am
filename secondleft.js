var totalSeconds = 86400;
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
    } else if (seconds < 28800) {
        return 'purple';
    } else if (seconds < 32400) {
        return 'pink';
    } else if (seconds < 36000) {
        return 'brown';
    } else if (seconds < 39600) {
        return 'black';
    } else if (seconds < 43200) {
        return 'white';
    } else if (seconds < 46800) {
        return 'gray';
    } else if (seconds < 50400) {
        return 'silver';
    } else if (seconds < 54000) {
        return 'gold';
    } else {
        return 'red';
    }
}