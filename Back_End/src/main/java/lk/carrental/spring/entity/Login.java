package lk.carrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Login {
    @Id
    private String email;
    private String pw;
    private String status;
}
