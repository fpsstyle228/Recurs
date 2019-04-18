function calc(number) {
    var sum = 0;
    var i = 0;
    var str = String(number);
    function calc2(string) {
        if (string[i] === '.'){
            i++;
            return  calc2(str)
        }
        if (string[i]){
            sum += Number(string[i]);
            i++;
            return calc2(str)
        }
        return sum;
    }
    return calc2(str)
}
// calc(123.45) // 15
// // calc(111.1111) // 7
// // calc(123) // 6
// console.log(calc(123.1));

function sum(num1) {
    var i = 0;
    function sum2(num2) {
        if (num2){
            i += num2;
            return sum2
        }
        return i;
    }
    return sum2(num1);
};

// sum(4)(3)(5)(6)(); /// 18
// sum(1)(2)(); /// 3
// sum(1)(8)(6)(); /// 15
// console.log(sum(4)(3)(5)(6)());

function reverse(num){
    var str = String(num);
    var length = str.length;
    var result = '';
    function reverse2(string) {
        if (length > 0){
            result += string[length -1];
            length--;
            return reverse2(str);
        }
        return result;
    }
    return reverse2(str)
}
// reverse(123) /// 321
// reverse(654) /// 456
// reverse(123456789) /// 987654321
// reverse(9876) /// 6879
// console.log(reverse(123456789));

function pow(num, power){
    var result = 1;
    var i = 0;

    function pow2() {
        if (i < power){
            result *= num;
            i++;
            return pow2(num)
        }
        return result;
    }
    return pow2();
}

// pow(2, 2) // 4
// pow(3, 3) /// 27
// pow(5, 3) /// 125
// console.log(pow(3, 3));

function deepFreeze(obj){
    if (typeof obj === "object"){
        Object.freeze(obj);
        for(prop in obj){
            if (typeof obj[prop] === "object"){
                deepFreeze(obj[prop]);
            }
        }
    }else{
        console.error('argument must be object')
    }
}
 var object = {
    a: {
        q: {
            c: 10
        }
    },
     b: 15,
     c: {
        w: 30
     }
 };
deepFreeze(object);
object.a.q.c = 11;
console.log(object.a.q.c);

