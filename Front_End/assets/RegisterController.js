let regName = /^[A-z .]{3,}$/;
let regAddress = /^[A-z ,.0-9]{3,}$/;
let regContactNo = /^(0)[1-9][0-9][0-9]{7}$/;
let regEmail = /^[a-z0-9]{3,}(@)[a-z]{3,}(.)[a-z]{2,3}$/;
let regDrivingLicenceNo = /^(B)[0-9]{7}$/;
let regNicNo = /^[0-9]{9}(V)|[0-9]{12}$/;
let regLoginUsername = /^[A-z0-9]{6,10}$/;
let regLoginPassword = /^[A-z0-9@#$%&!*]{8,}$/;

var baseUrl1 = "http://localhost:8080/Back_End_war/api/v1/admin";
var baseUrl3 = "http://localhost:8080/Back_End_war/api/v1/customer";

$('#txtUserName,#txtPassword,#txtName,#txtContact,#txtAddress,#txtEmail,#txtLicene,#txtNIC,#imgNiCFront,#imgNiCBack,#imgLicence').on('keydown', function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});

generateCustomerId();

$('#cmbType').change(function () {
    var userType = $('#cmbType').find('option:selected').text();
    if (userType === "Admin") {
        $("#txtName").prop('disabled', false);
        $("#txtAddress").prop('disabled', false);
        $("#txtContact").prop('disabled', false);
        $("#txtEmail").prop('disabled', false);
        $("#txtUserName").prop('disabled', false);
        $("#txtPassword").prop('disabled', false);
        $("#txtLicene").prop('disabled', true);
        $("#txtNIC").prop('disabled', true);
        $("#imgNiCFront").prop('disabled', true);
        $("#imgNiCBack").prop('disabled', true);
        $("#imgLicence").prop('disabled', true);
        generateAdminId();
    } else if (userType === "Customer") {
        $("#txtName").prop('disabled', false);
        $("#txtAddress").prop('disabled', false);
        $("#txtContact").prop('disabled', false);
        $("#txtEmail").prop('disabled', false);
        $("#txtUserName").prop('disabled', false);
        $("#txtPassword").prop('disabled', false);
        $("#txtLicene").prop('disabled', false);
        $("#txtNIC").prop('disabled', false);
        $("#imgNiCFront").prop('disabled', false);
        $("#imgNiCBack").prop('disabled', false);
        $("#imgLicence").prop('disabled', false);
        generateCustomerId();
    }else {
        disableAllComponents();
    }
});

function disableAllComponents() {
    $("#txtName").prop('disabled', true);
    $("#txtAddress").prop('disabled', true);
    $("#txtContact").prop('disabled', true);
    $("#txtEmail").prop('disabled', true);
    $("#txtUserName").prop('disabled', true);
    $("#txtPassword").prop('disabled', true);
    $("#txtLicene").prop('disabled', true);
    $("#txtNIC").prop('disabled', true);
    $("#imgNiCFront").prop('disabled', true);
    $("#imgNiCBack").prop('disabled', true);
    $("#imgLicence").prop('disabled', true);
    $('#txtUserID').val("");
}

function generateAdminId() {
    $.ajax({
        url: baseUrl1 + "/generateAdminID",
        method: "GET",
        success: function (res) {
            $('#txtUserID').val(res.data);
        }
    });
}

function generateCustomerId() {
    $.ajax({
        url: baseUrl3 + "/generateCustomerId",
        method: "GET",
        success: function (res) {
            $('#txtUserID').val(res.data);
        }
    })
}

$('#txtName,#txtAddress,#txtContact,#txtNIC,#txtLicene,#txtEmail,#txtUserName,#txtPassword').on('keyup', function (event) {
    if (event.key === "Enter") {
        checkIfSignUpUserFormValid();
    }
});

function checkIfSignUpUserFormValid() {
    var name = $('#txtName').val();
    if (regName.test(name)) {
        $('#txtContact').focus();
        var contactNo = $('#txtContact').val();
        if (regContactNo.test(contactNo)) {
            $('#txtAddress').focus();
            var address = $('#txtAddress').val();
            if (regAddress.test(address)) {
                $('#txtEmail').focus();
                var email = $('#txtEmail').val();
                if (regEmail.test(email)) {
                    let usertype = $("#cmbType").find('option:selected').text();
                    if (usertype === "Customer") {
                        $('#txtLicene').focus();
                        var drivingLicence = $('#txtLicene').val();
                        if (regDrivingLicenceNo.test(drivingLicence)) {
                            $('#txtNIC').focus();
                            var nicNo = $('#txtNIC').val();
                            if (regNicNo.test(nicNo)) {
                                $('#txtUserName').focus();
                                var username = $('#txtUserName').val();
                                if (regLoginUsername.test(username)) {
                                    $('#txtPassword').focus();
                                    var password = $('#txtPassword').val();
                                    if (regLoginPassword.test(password)) {
                                        if ($('#imgNiCFront').val() != "" && $('#imgNiCBack').val() != "" && $('#imgLicence').val() != "") {
                                            let res = confirm("Do you want to add this customer?");
                                            if (res) {
                                                addCustomer();
                                            }
                                        } else {
                                            alert("Please fill all fields of customer...")
                                        }
                                    } else {
                                        $('#txtPassword').focus();
                                    }
                                } else {
                                    $('#txtUserName').focus();
                                }
                            } else {
                                $('#txtNIC').focus();
                            }
                        } else {
                            $('#txtLicene').focus();
                        }
                    } else if (usertype === "Admin") {
                        $('#txtUserName').focus();
                        var username = $('#txtUserName').val();
                        if (regLoginUsername.test(username)) {
                            $('#txtPassword').focus();
                            var password = $('#txtPassword').val();
                            if (regLoginPassword.test(password)) {
                                let res = confirm("Do you want to add this admin?");
                                if (res) {
                                    addAdmin();
                                }
                            } else {
                                $('#txtPassword').focus();
                            }
                        } else {
                            $('#txtUserName').focus();
                        }

                    }
                } else {
                    $('#txtEmail').focus();
                }
            } else {
                $('#txtAddress').focus();
            }
        } else {
            $('#txtContact').focus();
        }
    } else {
        $('#txtName').focus();
    }
}

$('#txtName').on('keyup', function () {
    checkInputName();
})

function checkInputName() {
    var name = $('#txtName').val();
    if (regName.test(name)) {
        $("#txtName").css('border', '2px solid green');
        return true;
    } else {
        $("#txtName").css('border', '2px solid red');
        return false;
    }
}

$('#txtContact').on('keyup', function () {
    checkInputContactNo();
})

function checkInputContactNo() {
    var contactNo = $('#txtContact').val();
    if (regContactNo.test(contactNo)) {
        $("#txtContact").css('border', '2px solid green');
        return true;
    } else {
        $("#txtContact").css('border', '2px solid red');
        return false;
    }
}

$('#txtAddress').on('keyup', function () {
    checkInputAddress();
})

function checkInputAddress() {
    var address = $('#txtAddress').val();
    if (regAddress.test(address)) {
        $("#txtAddress").css('border', '2px solid green');
        return true;
    } else {
        $("#txtAddress").css('border', '2px solid red');
        return false;
    }
}

$('#txtEmail').on('keyup', function () {
    checkInputEmail();
})

function checkInputEmail() {
    var email = $('#txtEmail').val();
    if (regEmail.test(email)) {
        $("#txtEmail").css('border', '2px solid green');
        return true;
    } else {
        $("#txtEmail").css('border', '2px solid red');
        return false;
    }
}

$('#txtLicene').on('keyup', function () {
    checkInputDrivingLicence();
})

function checkInputDrivingLicence() {
    var drivingLicence = $('#txtLicene').val();
    if (regDrivingLicenceNo.test(drivingLicence)) {
        $("#txtLicene").css('border', '2px solid green');
        return true;
    } else {
        $("#txtLicene").css('border', '2px solid red');
        return false;
    }
}

$('#txtNIC').on('keyup', function () {
    checkInputNIC();
})

function checkInputNIC() {
    var nicNo = $('#txtNIC').val();
    if (regNicNo.test(nicNo)) {
        $("#txtNIC").css('border', '2px solid green');
        return true;
    } else {
        $("#txtNIC").css('border', '2px solid red');
        return false;
    }
}

$('#txtUserName').on('keyup', function () {
    checkInputUserName();
})

function checkInputUserName() {
    var userName = $('#txtUserName').val();
    if (regLoginUsername.test(userName)) {
        $("#txtUserName").css('border', '2px solid green');
        return true;
    } else {
        $("#txtUserName").css('border', '2px solid red');
        return false;
    }
}

$('#txtPassword').on('keyup', function () {
    checkInputPassword();
})

function checkInputPassword() {
    var password = $('#txtPassword').val();
    if (regLoginPassword.test(password)) {
        $("#txtPassword").css('border', '2px solid green');
        return true;
    } else {
        $("#txtPassword").css('border', '2px solid red');
        return false;
    }
}

function addCustomer() {

    let id = $('#txtUserID').val();
    let name = $('#txtName').val();
    let address = $('#txtAddress').val();
    let contactNo = $('#txtContact').val();
    let email = $('#txtEmail').val();
    let nicNo = $('#txtNIC').val();
    let licenceNo = $('#txtLicene').val();
    let username = $('#txtUserName').val();
    let password = $('#txtPassword').val();

    var customer = {
        customerId: id,
        name: name,
        address: address,
        contactNo: contactNo,
        email: email,
        nicNo: nicNo,
        licenceNo: licenceNo,
        username: username,
        password: password
    }

    console.log(customer);

    $.ajax({
        url: baseUrl3,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(customer),
        success: function (resp) {
            uploadCustomerImages(id);
            /*swal({
                title: "Confirmation",
                text: "Customer Added Successfully",
                icon: "success",
                button: "Close",
                timer: 2000
            });*/
            alert(resp.massage);
            console.log("Success");
        },
        error: function (ob) {
            /*swal({
                title: "Error!",
                text: "Customer Not Added Successfully",
                icon: "error",
                button: "Close",
                timer: 2000
            });*/
            alert(ob.massage);
            console.log("Error");
        }
    })
}

function uploadCustomerImages(id) {
    var fileObjectNic1 = $('#imgNiCFront')[0].files[0];
    var fileNameNic1 = id + "-nicfront-" + $('#imgNiCFront')[0].files[0].name;

    var fileObjectNic2 = $('#imgNiCBack')[0].files[0];
    var fileNameNic2 = id + "-nicback-" + $('#imgNiCBack')[0].files[0].name;

    var fileObjectLicence = $('#imgLicence')[0].files[0];
    var fileNameLicence = id + "-licence-" + $('#imgLicence')[0].files[0].name;

    var data = new FormData();
    data.append("nicf", fileObjectNic1, fileNameNic1);
    data.append("nicb", fileObjectNic2, fileNameNic2);
    data.append("licenceImg", fileObjectLicence, fileNameLicence);

    $.ajax({
        url: baseUrl3 + "/up/" + id,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            clearSignupTextFields();
        }
    })
}

//to be continue=================================================================
function clearSignupTextFields() {
    $('#txtUserID').val("");
    $('#cmbType').val("Customer");
    $('#txtName').val("");
    $('#txtContact').val("");
    $('#txtAddress').val("");
    $('#txtEmail').val("");
    $('#txtLicene').val("");
    $('#txtNIC').val("");
    $('#txtUserName').val("");
    $('#txtPassword').val("");

    $('#imgNiCFront').val("");
    $('#imgNiCBack').val("");
    $('#imgLicence').val("");

    $('#txtName').css('border', '1px solid #ced4da');
    $('#txtContact').css('border', '1px solid #ced4da');
    $('#txtAddress').css('border', '1px solid #ced4da');
    $('#txtEmail').css('border', '1px solid #ced4da');
    $('#txtLicene').css('border', '1px solid #ced4da');
    $('#txtNIC').css('border', '1px solid #ced4da');
    $('#txtUserName').css('border', '1px solid #ced4da');
    $('#txtPassword').css('border', '1px solid #ced4da');
    disableAllComponents();
}

function addAdmin() {
    let id = $('#txtUserID').val();
    let name = $('#txtName').val();
    let address = $('#txtAddress').val();
    let contactNo = $('#txtContact').val();
    let email = $('#txtEmail').val();
    let username = $('#txtUserName').val();
    let password = $('#txtPassword').val();

    var admin = {
        adminId: id,
        name: name,
        address: address,
        contact: contactNo,
        email: email,
        username: username,
        password: password
    }
    console.log(admin);
    $.ajax({
        url: baseUrl1,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(admin),
        success: function (resp) {
            clearSignupTextFields();
            /*swal({
                title: "Confirmation",
                text: "Admin Added Successfully",
                icon: "success",
                button: "Close",
                timer: 2000
            });*/
            alert(resp.massage);
            console.log("success");
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
            console.log("Error");
        }
    })
}

$('#registerBtn').click(function () {
    var userType = $('#cmbType').find('option:selected').text();
    console.log(userType);
    if (userType === "Customer") {
        if ($('#txtName').val() != "") {
            if ($('#txtContact').val() != "") {
                if ($('#txtAddress').val() != "") {
                    if ($('#txtEmail').val() != "") {
                        if ($('#txtLicene').val() != "") {
                            if ($('#txtNIC').val() != "") {
                                if ($('#txtUserName').val() != "") {
                                    if ($('#txtPassword').val() != "") {
                                        if ($('#imgNiCFront').val() != "") {
                                            if ($('#imgNiCBack').val() != "") {
                                                if ($('#imgLicence').val() != "") {
                                                    let res = confirm("Do you want to add this customer?");
                                                    if (res) {
                                                        addCustomer();
                                                    }
                                                } else {
                                                    alert("Please upload image of licence");
                                                    $('#imgLicence').focus();
                                                }
                                            } else {
                                                alert("Please upload back image of NIC");
                                                $('#imgNiCBack').focus();
                                            }
                                        } else {
                                            alert("Please upload front image of NIC");
                                            $('#imgNiCFront').focus();
                                        }
                                    } else {
                                        alert("Please enter password...");
                                        $('#txtPassword').focus();
                                    }
                                } else {
                                    alert("Please enter username...");
                                    $('#txtUserName').focus();
                                }
                            } else {
                                alert("Please enter your NIC No...");
                                $('#txtNIC').focus();
                            }
                        } else {
                            alert("Please enter your licence No...");
                            $('#txtLicene').focus();
                        }
                    } else {
                        alert("Please enter your email...");
                        $('#txtEmail').focus();
                    }
                } else {
                    alert("Please enter your address...");
                    $('#txtAddress').focus();
                }
            } else {
                alert("Please enter your Contact No...");
                $('#txtContact').focus();
            }
        } else {
            alert("Please enter your name...");
            $('#txtName').focus();
        }
    }
    if (userType === "Admin") {
        if ($('#txtName').val() != "") {
            if ($('#txtContact').val() != "") {
                if ($('#txtAddress').val() != "") {
                    if ($('#txtEmail').val() != "") {
                        if ($('#txtUserName').val() != "") {
                            if ($('#txtPassword').val() != "") {
                                let res = confirm("Do you want to add this admin?");
                                if (res) {
                                    addAdmin();
                                }
                            } else {
                                alert("Please enter password...");
                                $('#txtPassword').focus();
                            }
                        } else {
                            alert("Please enter username...");
                            $('#txtUserName').focus();
                        }
                    } else {
                        alert("Please enter your email...");
                        $('#txtEmail').focus();
                    }
                } else {
                    alert("Please enter your address...");
                    $('#txtAddress').focus();
                }
            } else {
                alert("Please enter your Contact No...");
                $('#txtContact').focus();
            }
        } else {
            alert("Please enter your name...");
            $('#txtName').focus();
        }
    } else {
        alert("Please select user type")
    }
});