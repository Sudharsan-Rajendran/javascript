const crypto = require('crypto');
// With function
function get_SHA_256_SecurePassword(customerId) {
    const hash = crypto.createHash('sha256');
    const digest = hash.update(customerId, "utf-8").digest();
    return digest.toString("hex");
}
var data_1 = 'cd1170a51867e1975305c2790bf93b78user_confirm_key=S0003381&out_trade_no=20220407134001&time=20220407134001&wallet=UNIONPAY&subject=test&payType=UnionPay&return_url=https://platform.mezzofy.com&service=service.unionpay.web.PreOrder&buyerType=others&transaction_amount=0.02&pay_scene=WEB' 

var data_2 ='ABCDEFGHIJKL1234merch_ref_no=invoice123456-1&mid=123456789012345&payment_type=ALIPAY&service=SALES&trans_amount=3888.00'


console.log(get_SHA_256_SecurePassword('cd1170a51867e1975305c2790bf93b78buyerType=others&out_trade_no=20220425185901&payType=UnionPay&pay_scene=WEB&return_url=https://platform.mezzofy.com&service=service.unionpay.web.PreOrder&subject=test&time=20220425185901&transaction_amount=0.02&user_confirm_key=S0003381&wallet=UNIONPAY'));






// Without function
var key = "cd1170a51867e1975305c2790bf93b78buyerType=others&out_trade_no=20220425185901&payType=UnionPay&pay_scene=WEB&return_url=https://platform.mezzofy.com&service=service.unionpay.web.PreOrder&subject=test&time=20220425185901&transaction_amount=0.02&user_confirm_key=S0003381&wallet=UNIONPAY"

const hash = crypto.createHash('sha256');
const digest = hash.update(key, "utf-8").digest();
var hash_data = digest.toString("hex");
console.log("hash_data",hash_data);