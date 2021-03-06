// business logic //
function BankAccount(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
  this.balance = initialDeposit;
};

BankAccount.prototype.depositCash = function (deposit) {
  if (isNaN(deposit) === true) {
    deposit = 0;
  }
  this.balance += deposit;
  console.log(deposit);
  return this.balance;
};

BankAccount.prototype.withdrawalCash = function (withdrawal) {
  if (isNaN(withdrawal) === true) {
    withdrawal = 0;
  }
  this.balance -= withdrawal;
  return this.balance;
};


// user logic //
$(document).ready(function() {
  var initialDeposit;
  var userName;
  var newBankAccount;
  var deposit;
  var withdrawal;
  var revBankAccount;
  $("#register").submit(function(event) {
    event.preventDefault();
    initialDeposit = parseInt($("#init-deposit").val());
    userName = $("#person").val();
    newBankAccount = new BankAccount(userName, initialDeposit);
    $("#user").text(userName);
    $("#balance").text(newBankAccount.initialDeposit);
    $(".output").show();
    console.log(newBankAccount);
  });
  $("#transaction").submit(function(event) {
    event.preventDefault();
    deposit = parseInt($("#deposit").val());
    withdrawal = parseInt($("#withdrawal").val());
    $("#user").text(userName);
    $("#balance").text(newBankAccount.depositCash(deposit));
    $("#balance").text(newBankAccount.withdrawalCash(withdrawal));
    console.log(newBankAccount);
  });
});
