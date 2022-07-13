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
public class Car {
    @Id
    private String regNumber;
    private Double loose;
    private String brand;
    private String type;
    private int noOfPassenger;
    private String transmissionOnType;
    private String fuelType;
    private double dailyRate;
    private double monthlyRate;
    private String freeMileageForPrice;
    private double extraPriceForKM;
    private String color;
    private int carQty;
    @OneToMany(mappedBy = "regNumber", cascade = CascadeType.ALL)
    private List<Rental_Detail> rental_details = new ArrayList<>();
}
