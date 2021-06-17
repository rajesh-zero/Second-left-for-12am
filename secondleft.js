console.log("hi there2");

// function dS(){
//     console.log(86400 - seconds)
// }
function Display() {


    setInterval(() => {
        var dts = new Date();
        var hr = dts.getHours();
        var min = dts.getMinutes();
        var sec = dts.getSeconds();
        var hradd = hr * 3600;
        var seconds = hradd + min + sec;
        const a = 86400 - seconds;
        let prin = document.getElementById('demo');
        prin.innerHTML = a;
    }, 1000);

}

Display();
