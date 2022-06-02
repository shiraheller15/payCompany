
//Const variable to present the sum in account
const sumInAccount = 60000;

class Pay{
    date;
    sum;
    description;
    status;
    typePayment;
    payerDetails;

    constructor(date,sum,description,status,typePayment,payerDetails){
        this.date = date;
        this.sum = sum;
        this.description=description;
        this.status=status;
        this.typePayment = typePayment;
        this.payerDetails = payerDetails;
    }
}
function showFormPayment() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("payment").style.display = "inherit";

}
function showFormRefund() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("refund").style.display = "inherit";
}
function showFormCash() {
    document.getElementById("refund").style.display = "none";
    document.getElementById("payment").style.display = "none";
    document.getElementById("cashForm").style.display = "inherit";
}
function showFormCreditCard() {
    document.getElementById("refund").style.display = "none";
    document.getElementById("payment").style.display = "none";
    document.getElementById("creditForm").style.display = "inherit";
}
function showFormDefrayalCompany() {
    document.getElementById("refund").style.display = "none";
    document.getElementById("payment").style.display = "none";
    document.getElementById("defrayalCompanyForm").style.display = "inherit";
}