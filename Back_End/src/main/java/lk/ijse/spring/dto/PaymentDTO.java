package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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
public class PaymentDTO {
    private String paymentId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String date;
    private double amount;
    private CarRentDTO rental;
    private CustomerDTO customer;
}
