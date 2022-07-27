/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
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

    username: username,
    password: password
}
function save(userType, username, password) {

    $.ajax({
        url: baseUrl3,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(cusotmer),
        success: function (resp) {
            if (resp.data() === true){
                clearSignupTextFields();
            }
            /*swal({
                title: "Confirmation",
                text: "Admin Added Successfully",
                icon: "success",
                button: "Close",
                timer: 2000
            });*/
            alert(resp.massage);
        },
        error: function (ob) {
            /*swal({
                title: "Error!",
                text: "Admin Not Added Successfully",
                icon: "error",
                button: "Close",
                timer: 2000
            });*/
            alert(ob.massage);
        }
    });

}