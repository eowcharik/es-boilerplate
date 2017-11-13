export default function func(cycle,timeout, callback) {

    for(let i=0; i<cycle ; i++){
        setTimeout( function() { console.log(callback(i)) } , timeout*i)
    }
}

