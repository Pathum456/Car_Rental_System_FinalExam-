package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarRentDTO {
    private String rentId;
    private String date;
    private String pickUpDate;
    private String returnDate;
    private String status;
    private CustomerDTO customer;
    private CarDTO car;
    private DriverDTO driver;
}
