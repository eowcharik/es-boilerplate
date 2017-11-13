export  function format(func) {
    var unicodeString = '';
    for (var i=0; i < func.length; i++) {
        var theUnicode = func.charCodeAt(i).toString(16);
        while (theUnicode.length < 4) {
            theUnicode = '0' + theUnicode;
        }
        theUnicode = '\\u' + theUnicode;
        unicodeString += theUnicode;
    }
    return unicodeString;
}
