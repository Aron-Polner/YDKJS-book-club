// padStart is a method which is attached to one of the standard build-in objects (in this case the String object)
// Mozilla resource on padStart: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// Mozilla resource on which standard build-in objects exsist in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

const str1 = "5";

console.log(str1.padStart(2, "0"));
// expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// expected output: "************5581"

const fullName = "Telavox";
const last3Chars = fullName.slice(-3);
const maskedName = last3Chars.padStart(fullName.length, "*");

console.log(maskedName);
// expected output: "****vox"
