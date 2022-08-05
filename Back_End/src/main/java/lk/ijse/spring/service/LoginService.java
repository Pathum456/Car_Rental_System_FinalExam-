package lk.ijse.spring.service;

import lk.ijse.spring.dto.LoginDTO;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

public interface LoginService {
    void saveLogData(LoginDTO dto);

    String generateLoginId();

    String getLastLoginId();

    LoginDTO searchLogin(String loginId);
}
