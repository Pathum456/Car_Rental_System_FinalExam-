/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
driverLoadTable();
function addDriver() {
    let id = $('#driverLicenceNo').val();
    let name = $('#name').val();
    let address = $('#address').val();
    let contactNo = $('#contactNo').val();

    let nicNo = $('#nicNo').val();
    let username = $('#driverUserName').val();
    let password = $('#driverPassword').val();
    /*let password = $('#availability').val();*/
    if (id) var driver = {
        licenceNo: id,
        name: name,
        address: address,
        contactNo: contactNo,
        nicNo: nicNo,
        username: username,
        password: password
    }

    $.ajax({

        url: baseUrl2,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(driver),
        success: function (resp) {
            if (resp.data === true) {

                //alert(resp.massage);
                console.log(resp);


              driverLoadTable();
               // clearSignupTextFields();
            }
        },
        error: function (ob) {

            /*alert(ob.massage);*/
        }
    });

}

function driverLoadTable() {
    $("#tblDriverJson").empty();
    $.ajax({

        url: baseUrl2,
        method: "GET",
        //contentType: "application/json",
        //data: JSON.stringify(driver),
        success: function (resp) {

            console.log(resp.data);
            for (let driver of resp.data) {
                let row = `<tr><td>${driver.licenceNo}</td><td>${driver.name}</td><td>${driver.address}</td><td>${driver.contactNo}</td><td>${driver.nicNo}</td><td>${driver.username}</td><td>${driver.password}</td><td>${driver.availability}</td></tr>`;
                $("#tblDriverJson").append(row);
            }
            //alert(resp.massage);
            // clearSignupTextFields();
        },
        error: function (ob) {
            /*alert(ob.massage);*/
        }
    });

}