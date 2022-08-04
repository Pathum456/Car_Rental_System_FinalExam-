/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
loadAllCustomersTable();
function loadAllCustomersTable() {
    $("#tblUserJson").empty();
    $.ajax({
        url: baseUrl3,
        method: "GET",
        //contentType: "application/json",
        //data: JSON.stringify(driver),
        success: function (resp) {
            console.log(resp.data);
            for (let customer of resp.data) {
                let row = `<tr> <td>${customer.customerId}<td>${customer.name}</td><td>${customer.address}</td><td>${customer.contactNo}</td><td>${customer.email}</td><td>${customer.nicNo}</td><td>/*${customer.nicFrontImg}*/</td><td>/*${customer.nicBackImg}*/</td><td>${customer.licenceNo}</td><td>/*${customer.licenceImg}*/</td><td>${customer.username}</td><td>${customer.password}</td><td>${customer.status}</td></tr>`;
                $("#tblUserJson").append(row);
            }
            //alert(resp.massage);
            // clearSignupTextFields();
        },
        error: function (ob) {
            alert(ob.message);
        }
    });

}