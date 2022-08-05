package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class LoginDTO {
    private String loginId;
    private String username;
    private String password;
    private String role;
}
