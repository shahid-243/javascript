setInterval(() => { 
    let date = new Date();
    
    document.getElementById('clock').innerHTML= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    document.getElementById('time').innerHTML= `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    
    })
    