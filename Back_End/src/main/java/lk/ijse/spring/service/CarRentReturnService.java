package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarRentReturnDTO;

import java.util.List;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/

public interface CarRentReturnService {
    void saveCarRentReturn(CarRentReturnDTO dto);

    void updateCarRentReturn(CarRentReturnDTO dto);

    void deleteCarRentReturn(String returnId);

    CarRentReturnDTO searchCarRentReturn(String returnId);

    List<CarRentReturnDTO> getAllCarRentReturns();

    String generateReturnId();
}
