function validation() {
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;

    var mobile = document.getElementById("mobile").value;
    var zipCode = document.getElementById("zip").value;
    var city = document.getElementById("city").value;
    var add1 = document.getElementById("add1").value;
    var add2 = document.getElementById("add2").value;
    var eMail = document.getElementById("email").value;
    var atPosition = eMail.indexOf("@");
    var dotPosition = eMail.lastIndexOf(".");
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;

    let paypal = document.getElementById("paypal");
    let tokens = document.getElementById("tokens");
    let bankTransfer = document.getElementById("bankTransfer");





    if ((fName.length <= 3 || fName.length >= 15 || !isNaN(fName))) {
        document.getElementById("textArea1").innerHTML = "**.......Please enter atleast 4 characters! as a First Name";
        return false;
    } else {
        alert(fName);
        document.getElementById("textArea1").innerHTML = " ";
    }
    if ((lName.length <= 3 || lName.length >= 15 || !isNaN(lName))) {
        document.getElementById("textArea2").innerHTML = "**.......Please enter atleast 4 characters! as a Last Name";
        return false;
    } else {
        document.getElementById("textArea2").innerHTML = " ";
    }


    if (mobile.length <= 9) {

        document.getElementById("textArea3").innerHTML = "**.......please enter a valid phone Number!";
        return false;
    } else {
        document.getElementById("textArea3").innerHTML = " ";

    }
    if (isNaN(zipCode) || zipCode.length != 6) {

        document.getElementById("textArea7").innerHTML = "**.......Enter a valid Zipcode";
        return false;

    } else {
        document.getElementById("textArea7").innerHTML = " ";

    }
    if (city.length <= 2 || !isNaN(city)) {
        document.getElementById("textArea8").innerHTML = "**.......Enter a valid city";
        return false;
    } else {
        document.getElementById("textArea8").innerHTML = " ";

    }
    if (add1.length <= 4 || add1.length >= 15) {

        document.getElementById("textArea5").innerHTML = "**.......Enter a valid address";
        return false;
    } else {
        document.getElementById("textArea5").innerHTML = " ";

    }
    if (add2.length <= 4 || add2.length >= 15) {

        document.getElementById("textArea6").innerHTML = "**.......Enter a valid address";
        return false;
    } else {
        document.getElementById("textArea8").innerHTML = " ";

    }
    if (city.length <= 3 || city.length >= 15) {

        document.getElementById("textArea8").innerHTML = "**.......Enter a valid city name atleast has 3 characters";
        return false;
    } else {
        document.getElementById("textArea8").innerHTML = " ";

    }
    if (country.length <= 3 || country.length >= 15) {

        document.getElementById("textArea9").innerHTML = "**.......Enter a valid country name atleast has 3 characters";
        return false;
    } else {
        document.getElementById("textArea9").innerHTML = " ";

    }
    if (state.length <= 3 || state.length >= 15) {
        document.getElementById("textArea10").innerHTML = "**.......Enter a valid state name atleast has 3 characters";
        return false;
    } else {
        document.getElementById("textArea9").innerHTML = " ";
    }

    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= eMail.length) {
        document.getElementById("textArea4").innerHTML = ("Please enter a valid e-mail address \n atpostion:" + atPosition + "\n dotPosition:" + dotPosition);
        return false;
    } else {
        return true;
    }


};
//added js to checkbox--------------------------------------------

paypal.addEventListener('change', ($event) => {
    tokens.checked = false;
    bankTransfer.checked = false;
});

tokens.addEventListener('change', ($event) => {

    paypal.checked = false;
    bankTransfer.checked = false;

});

bankTransfer.addEventListener('change', ($event) => {
    tokens.checked = false;
    paypal.checked = false;

});