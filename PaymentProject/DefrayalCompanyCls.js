class DefrayalCompany extends Pay{
    code;
    constructor(code){
        this.code = code;
    }
}
function paymentByDefrayalCompany(date,sum,description,status,typePayment,payerDetails,code) {
    const paymentByDefrayal = new DefrayalCompany(date,sum,description,status,typePayment,payerDetails,code);
    sumInAccount -= paymentByDefrayal.sum;
    alert("success");
}
function refundByCredit(date,sum,description,status,typePayment,payerDetails,code) {
    const refundByCreditCard = new PayByCredit(date,sum,description,status,typePayment,payerDetails,code);
    sumInAccount += refundByCreditCard.sum;
    alert("success");
}