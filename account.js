window.onload = function() {
    document.getElementById("createAccountBtn").onclick = accountModule.addAccount
}

var accountList = [];

var accountModule = (function() {

    function Account(name, deposit) {
        this.name = name;
        this.deposit = deposit;
    };

    let printAccount = function() {
        document.getElementById("outputText").value += "Account type: " + accountList[accountList.length - 1].name +
            "  Balance: " + accountList[accountList.length - 1].deposit + "\n"
    }

    return {
        addAccount: function() {
            accountList.push(new Account(document.getElementById("accountNameText").value, document.getElementById("depositText").value))
            printAccount()
        }
    };



})();