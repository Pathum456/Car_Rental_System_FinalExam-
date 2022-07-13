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
public class Driver {
    @Id
    private String driverEmail;
    private String name;
    private int age;
    private String address;
    private int driverContactNumber;
    @OneToMany(mappedBy = "driverEmail", cascade = CascadeType.ALL)
    private List<Rental_Detail> rental_details = new ArrayList<>();
}
