function urlify(str, length) {
    
    tempLength = length; 
    for (var i = 0; i < tempLength; i++) {
        if (str[i] == ' ') {
            str = str.splice(i, 1, '%'); 
            str = str.splice(i + 1, 0, '2'); 
            str = str.splice(i + 2, 0, '0'); 
            tempLength += 2; 


        }
    }

    return str; 
}

if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}



var test = "hello, world "; 
    
console.log(urlify(test, test.length)); 
