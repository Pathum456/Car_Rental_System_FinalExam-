/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

var baseUrl1 = "http://localhost:8080/Back_End_war/api/v1/admin";
var baseUrl2 = "http://localhost:8080/Back_End_war/api/v1/driver";
var baseUrl3 = "http://localhost:8080/Back_End_war/api/v1/customer";

function loginUser() {
    var username = $('#userEmail').val();
    var password = $('#userPassword').val();
    var userType = $('#userType').find('option:selected').text();

    console.log(userType);
    console.log(username);
    console.log(password);

    if (userType === "Admin") {
        searchAdmin(userType, username, password);
    } else if (userType === "Customer"){
        searchCustomer(userType, username, password);
    } else if (userType === "Driver"){
        searchDriver(userType,username,password);
    }
}

function searchAdmin(userType, username, password) {
    if (userType === "Admin") {
        $.ajax({
            url: baseUrl1 + "/" + username + "/" + password,
            method: "GET",
            success: function (res) {
                if (res.data === true) {
                    location.replace("AdminDashBoard.html");
                } else {
                    /*swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Create New Button to create a new account',
                    })*/
                    alert(res.massage);
                }
            }
        });
    }
}

function searchDriver(userType, username, password) {
    if (userType === "Driver") {
        $.ajax({
            url: baseUrl2 + "/" + username + "/" + password,
            method: "GET",
            success: function (res) {
                if (res.data === true) {
                    location.replace("DriverPage.html");
                } else {
                    /*swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Register Button to create a new account',
                    })*/
                    alert(res.massage);
                }
            }
        });
    }
}

function searchCustomer(userType, username, password) {
    if (userType === "Customer") {
        $.ajax({
            url: baseUrl3 + "/" + username + "/" + password,
            method: "GET",
            success: function (res) {
                console.log(res.data);
                console.log(res.username);
                console.log(res.password);
                if (res.data === true) {
                    logincar();
                    alert(res.massage);
                } else {
                    /*swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Create New Button to create a new account',
                    })*/
                    alert(res.massage);
                }
            }
        });
    }
}

$('#loginCheckBtn').click(function () {

    if ($('#userName').val() !== "" && $('#password').val() !== "") {
        loginUser();
    }
});
function logincar() {
    $("#dashBoardContent").css("display", "none");
    $("#carContent").css("display", "block");
    $("#loginForm").css("display", "none");
    $("#serviceContent").css("display", "none");
    $("#aboutContent").css("display", "none");
    $("#adminDash").css("display", "none");

}