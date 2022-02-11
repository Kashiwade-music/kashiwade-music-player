function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

let test = { "hoge": 1, "fuga": "fugafuga" }
let test2 = { hoge: 1, fuga: "fugafuga" }
console.log(test.hoge);

console.log(`test is ${JSON.stringify(test)}, test type is ${typeof test}, valid? ${IsJsonString(test)}`);
console.log(`test2 is ${JSON.stringify(test2)}, test2 type is ${typeof test2}, valid? ${IsJsonString(test2)}`);
