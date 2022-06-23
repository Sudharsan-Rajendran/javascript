// <============================ encrypt and decrypt =======================>
// <====== type 1=========>

// const crypto = require('crypto');

// function get_SHA_256_SecurePassword(customerId) {
//     const hash = crypto.createHash('sha256');
//     const digest = hash.update(customerId, "utf-8").digest();
//     return digest.toString("hex");
// }
// var data_1 = 'cd1170a51867e1975305c2790bf93b78user_confirm_key=S0003381&out_trade_no=20220407134001&time=20220407134001&wallet=UNIONPAY&subject=test&payType=UnionPay&return_url=https://platform.mezzofy.com&service=service.unionpay.web.PreOrder&buyerType=others&transaction_amount=0.02&pay_scene=WEB' 

// var data_2 ='ABCDEFGHIJKL1234merch_ref_no=invoice123456-1&mid=123456789012345&payment_type=ALIPAY&service=SALES&trans_amount=3888.00'


// console.log(get_SHA_256_SecurePassword('cd1170a51867e1975305c2790bf93b78buyerType=others&out_trade_no=20220425185901&payType=UnionPay&pay_scene=WEB&return_url=https://platform.mezzofy.com&service=service.unionpay.web.PreOrder&subject=test&time=20220425185901&transaction_amount=0.02&user_confirm_key=S0003381&wallet=UNIONPAY'));


//<======== type 2 ============>

// const crypto = require('crypto');

// function get_SHA_512_SecurePassword(customerId) {
//     const hash = crypto.createHash('sha512');
//     const digest = hash.update(customerId, "utf-8").digest();
//     return digest.toString("hex");
// }
// var key = "1007780250TST103S1.02SGD41111111111111111120253mfoUyGiiOqkliNv0kWwHxw7vmX9fcqXJGDvWhSIKZnsL3SUFZeJINqLLMcdAHCbS0zL669Mr9IY5OgxrNsVgh8XG277ayxWTt1ySuowIXCCKSqZ9Iv35vvK6RbgDtEYh1007780250TST102S1.02SGD41111111111111111120253mfoUyGiiOqkliNv0kWwHxw7vmX9fcqXJGDvWhSIKZnsL3SUFZeJINqLLMcdAHCbS0zL669Mr9IY5OgxrNsVgh8XG277ayxWTt1ySuowIXCCKSqZ9Iv35vvK6RbgDtEYh"
// var key_1 = "1007779068RDPjnam406.03SGDD716A4188569B68AB1B6DFAC178E570114CDF0EA3A1CC0E31486C3E41241BC6A76424E8C37AB26F096FC85EF9886C8CB634187F4FDDFF645FB099F1FF54C6B8C"
// console.log(get_SHA_512_SecurePassword('sign',key_1));


// <====================== Get the last Character of a String ======================>

// const str_1 = 'abcde';
// const str_2 = '123456789'
// const last = str_2.charAt(str_2.length - 1);
// console.log(last);



// <==================== utc time format ===================>
const moment = require('moment-timezone');

// var today = new Date();
// var date = moment(today).utc().format("YYYY-MM-DD HH:mm:ss");
// var date_1 = moment(today).format("YYYY-MM-DD HH:mm:ss");
// console.log("date",date);
// console.log("date",date_1);

let Accepted_time = new Date();
var current_time = moment.tz(Accepted_time, 'Asia/Hong_Kong').format("YYYYMMDDHHmmss");
console.log("current_time", current_time)

// <================== price ====================>


// var array = [{ Name: "blue", Price: 20 }, { Name: "red", Price: 100 }, { Name: "green", Price: 30 }],
//     result = array[0],                   // take the first element
//     i;

// for (i = 1; i < array.length; i++) {     // iterate from the second on
//     if (array[i].Price > result.Price) { // check price, if a greater price found
//         result = array[i];               // replace result with actual object
//         price = result[1]
//     }
// }

// console.log(result);
// console.log(price);

// sorting

// var data = {
//     "vpc_Version":
// }
    
// data.sort()
// console.log(data);



const unordered = {
    'z': 'foo',
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
  };
  
  console.log("stringify",JSON.stringify(unordered),typeof(JSON.stringify(unordered)));
  console.log("praise",JSON.parse(JSON.stringify(unordered)),typeof(JSON.parse(JSON.stringify(unordered))));
  console.log("normal",unordered);
  // → '{"b":"foo","c":"bar","a":"baz"}'
  
  const ordered = Object.keys(unordered).sort().reduce(
    (obj, key) => { 
      obj[key] = unordered[key]; 
      return obj;
    }, 
    {}
  );
  
  console.log(JSON.stringify(ordered));
  console.log(JSON.parse(JSON.stringify(ordered)));
  // → '{"a":"baz","b":"foo","c":"bar"}'


var crypto = require('crypto');

var string = "sudharsan";
var salt = "9874563210";
var key = "fewfsfsdfkmsdfmskfwpe447erewrewd25dew"
  var gibberish = decrypt(string, salt, key);
  console.log("gibberish",gibberish);