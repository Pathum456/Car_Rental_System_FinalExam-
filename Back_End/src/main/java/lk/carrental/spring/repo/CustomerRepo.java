package lk.carrental.spring.repo;

import lk.carrental.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
public interface CustomerRepo extends JpaRepository<Customer, String> {
}
