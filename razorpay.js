const { __esModule } = require("react-currency-format/lib/utils");

let Razorpay = required('razorpay');
const RazorpayConfig={
    key_id: '',
    keysecret:''
}
var instance=new Razorpay(RazorpayConfig);
module.exports.config=RazorpayConfig;
module.exports.instance= instance;