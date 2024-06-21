function displaytime(){
    let datetime = new Date();
    let hr = datetime.getHours();
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();
    if(hr>12){
        hr = hr - 12
        document.getElementById('ampm').innerHTML = 'PM' 
    }
    
    document.getElementById('hours').innerHTML = padzero(hr)
    document.getElementById('minutes').innerHTML = padzero(min)
    document.getElementById('seconds').innerHTML = padzero(sec)

    function padzero(num){
        if(num<10)
           return num ="0"+num
        else 
        return num

    }

}
setInterval(displaytime,200)