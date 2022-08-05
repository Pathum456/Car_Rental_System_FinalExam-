package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Login {
    @Id
    private String loginId;
    private String username;
    private String password;
    private String role;
}
