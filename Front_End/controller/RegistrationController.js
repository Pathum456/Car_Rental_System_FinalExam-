/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/




/*    function validateCustomer(){
        $("#cusName").bind("keypress", function (event) {
            /!*if (event.charCode=13) {
                var regex = new RegExp("^[a-zA-Z]+ [a-zA-Z]+$");
                var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (!regex.test(key)) {

                    $("#cusName").css("border-color","red");
                    event.preventDefault();
                    return false;

                }
            }*!/
        });
        var regName = new RegExp("^[a-zA-Z]+ [a-zA-Z]+$");
        var name = $("#cusName").value;
        if(!regName.test(name)){
            $("#cusName").css("border-color","red");
            document.getElementById('name').focus();
            return false;
        }else{
            $("#cusName").style.border='green';
            $("#cusAddress").focus();
            return true;
        }

    }*/

/*function validateCustomer() {


    $("#customerForm").validate({
        rules: {
            id: {
                required: true, minLength: 3,
                message: 'ID Not Auto Filled'
            },
            name: {
                required: true,
                minLength: 3,
                message: 'ID Not Auto Filled'
            },
            address: {
                required: true,
                minLength: 3
            }
        }
    });
}*/

var baseUrl3 = "http://localhost:8080/Back_End_war/api/v1/customer";
var cusID=$('#cusID').val();
var cusName=$('#cusName').val();
var cusaddress=$('#cusAddress').val();
var contact=$('#cusContact').val();
var cusEmail=$('#cusEmail').val();
var cusNicNo=$('#cusNic').val();
var nicFrontImg=$('#imgNiCFront').val();
var nicBackImg=$('#imgNiCBack').val();
var licenceNo=$('#cusLicence').val();
var licenceImg=$('#imgLicence').val();
var username=$('#cusUserName').val();
var password=$('#password').val();
var fileObjectNic1 = $('#imgNiCFront')[0].files[0];
var fileNameNic1 = id + "-nicfront-" + $('#imgNiCFront')[0].files[0].name;
var data = new FormData();
data.append("nicf", fileObjectNic1, fileNameNic1);
data.append("nicb", fileObjectNic2, fileNameNic2);
data.append("licenceImg", fileObjectLicence, fileNameLicence);
var cusotmer = {
    customerId: cusID,
    name: cusName,
    address: cusaddress,
    contactNo: contact,
    email: cusEmail,
    nicNo: cusNicNo,
    nicFrontImg:nicFrontImg,
    nicBackImg:nicBackImg,
    licenceNo:licenceNo,
    licenceImg:licenceImg,
    username: username,
    password: password
}
function saveCustomer() {

    $.ajax({
        url: baseUrl3,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(cusotmer),
        success: function (resp) {
            if (resp.data() === true) {
                clearSignupTextFields();
            }
            alert(resp.massage);
        },
        error: function (ob) {

            alert(ob.massage);
        }
    });

}
function clearSignupTextFields(){
    $("#cusName").val('');
    $("#cusAddress").val('');
    $("#cusContact").val('');
    $("#cusNic").val('');
    $("#cusUserName").val('');
    $("#password").val('');
    $("#cusEmail").val('');
    $("#imgNiCFront").val('');

}