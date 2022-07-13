package lk.carrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customer {
    @Id
    private String custEmail;
    private String custName;
    private String custAddress;
    private int custContactNumber;
    private String custNIC;
    private String custDrivingLicien;
    @OneToMany(mappedBy = "custEmail", cascade = CascadeType.ALL)
    private List<Rental_Detail> rental_details = new ArrayList<>();
}
