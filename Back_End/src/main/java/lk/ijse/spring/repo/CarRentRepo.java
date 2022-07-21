package lk.ijse.spring.repo;

import lk.ijse.spring.entity.CarRent;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

public interface CarRentRepo extends JpaRepository<CarRent, String> {

}
