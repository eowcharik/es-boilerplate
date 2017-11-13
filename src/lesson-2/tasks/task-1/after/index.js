let count = 0;
export function findString(text, pattern){
    for(let i = 0; i < text.length; i++){
        pattern.lastIndex = i;
        if(pattern.exec(text)){
            i = pattern.lastIndex;
            count++;}
    }
    return count;}
