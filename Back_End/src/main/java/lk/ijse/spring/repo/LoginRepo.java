package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

public interface LoginRepo extends JpaRepository<Login, String> {

    @Query(value = "SELECT loginId FROM Login ORDER BY loginId DESC LIMIT 1",nativeQuery = true)
    String getLastLoginId();
}
