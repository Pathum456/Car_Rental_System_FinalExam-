/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
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
    console.log(driver);

    $.ajax({
        url: baseUrl2,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(driver),
        success: function (resp) {
            if (resp.data === true) {
                //alert(resp.massage);
                alert("driver added");
               // clearSignupTextFields();
            }
        },
        error: function (ob) {

            /*alert(ob.massage);*/
        }
    })
}
