const reverseString = function(str) {
    let arr = [];
    if(str === ""){
        return "";
    }
    for(let i = 0; i < str.length; i++){
        let arr = [];
        let revStr = '';
        for(let i = str.length; i >= 0; i--){
            arr.push(str.charAt(i));
        }

        for(let i = 0; i < arr.length; i++){
            revStr += arr[i];
        }

        return revStr;
    }
};

// Do not edit below this line
module.exports = reverseString;
