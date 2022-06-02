class PayByCredit extends Pay{
    expirationDate;
    namePayer;
    fourLastDigits;
    cvv;
    constructor(date,sum,description,status,typePayment,payerDetails,expirationDate,namePayer,fourLastDigits,cvv){
        super(date,sum,description,status,typePayment,payerDetails);
        this.expirationDate = expirationDate;
        this.namePayer = namePayer;
        this.fourLastDigits = fourLastDigits;
        this.cvv = cvv;
    }

}
function paymentByCredit(date,sum,description,status,typePayment,payerDetails,expirationDate,namePayer,fourLastDigits,cvv) {
    const paymentByCreditCard = new PayByCredit(date,sum,description,status,typePayment,payerDetails,expirationDate,namePayer,fourLastDigits,cvv);
    sumInAccount -= paymentByCreditCard.sum;
    alert("success");
}
function refundByCredit(date,sum,description,status,typePayment,payerDetails,expirationDate,namePayer,fourLastDigits,cvv) {
    const refundByCreditCard = new PayByCredit(date,sum,description,status,typePayment,payerDetails,expirationDate,namePayer,fourLastDigits,cvv);
    sumInAccount += refundByCreditCard.sum;
    alert("success");
}