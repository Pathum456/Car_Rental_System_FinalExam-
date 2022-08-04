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
                let frontViewPath = customer.nicFrontImg;
                let frontViewImg = frontViewPath.split("/media/kaleesha/Working_Space/Car_Rental_System_FinalExam/Front_End/Saved_Images/Customers")[1];
                let FrontViewImgSrc = "Saved_Images/Customers" + frontViewImg;
                console.log(FrontViewImgSrc)
                let row = `<tr> <td>${customer.customerId}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contactNo}</td><td>${customer.email}</td><td>${customer.nicNo}</td><td><img src="${FrontViewImgSrc}" alt="" style="width: 50px; height: 50px;"></td><td><img src="${FrontViewImgSrc}" alt="" style="width: 50px; height: 50px;"></td><td>${customer.licenceNo}</td><td><img src="${FrontViewImgSrc}" alt="" style="width: 50px; height: 50px;"></td><td>${customer.username}</td><td>${customer.password}</td><td>${customer.status}</td></tr>`;
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