function isAlt(str) {

    let vowels = ["a", "e", "o", "i", "u"];
    for(i = 0; i < str.length-1; i++) {
        if(vowels.indexOf(str[i]) >= 0 && vowels.indexOf(str[i+1])>=0)
                return false;
        else if(vowels.indexOf(str[i]) === -1 && vowels.indexOf(str[i+1])===-1)
                return false;
       }
       return true;
    }
    console.log(isAlt('hello'));
    console.log(isAlt('nose'));
