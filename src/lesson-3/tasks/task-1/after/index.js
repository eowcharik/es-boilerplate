export default (cycle,timeout, callback) => {
 if(typeof cycle !== 'number'){
     throw new Error.typeMismatch;
 }
    if(typeof timeout !== 'number'){
        throw new Error.typeMismatch;
    }
    if(typeof callback !== 'function'){
        throw new Error.typeMismatch;
    }



    for(let i=0; i<cycle ; i++){
        setTimeout( function() { console.log(callback(i)) } , timeout*i)
    }
}

