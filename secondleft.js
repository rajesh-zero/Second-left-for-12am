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
        var h = dts.getHours();
        var m = dts.getMinutes();
        var s = dts.getSeconds();
        var elapsedsec = h*3600 + m * 60 + s
        const a = totalSeconds-elapsedsec;
        let prin = document.getElementById('demo');
        prin.innerHTML = a;
        //console.log(dts + " " + a);
        prin.style.color = getColor(a);

        var elem = document.getElementById("myBar");
        elem.style.width = calculatePercentage(elapsedsec,totalSeconds);
        elem.style.backgroundColor = getColor(a);
    }, 1000);
}

function calculatePercentage(number, totalNumber) {
    return (number / totalNumber) * 100 + '%';
}


Display();



function getColor(seconds) {
    if (seconds < 3600) {
        return 'red';
    } else if (seconds < 7200) {
        return 'orange';
    } else if (seconds < 10800) {
        return 'yellow';
    } else if (seconds < 18000) {
        return 'blue';
    } else {
        return 'red';
    }
}
