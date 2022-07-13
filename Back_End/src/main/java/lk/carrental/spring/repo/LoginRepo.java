package lk.carrental.spring.repo;

import lk.carrental.spring.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
public interface LoginRepo extends JpaRepository<Login, String> {
}
