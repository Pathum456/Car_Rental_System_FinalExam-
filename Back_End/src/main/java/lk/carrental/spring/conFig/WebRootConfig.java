package lk.carrental.spring.conFig;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author _ Pathum_Kaleesha
 * @since - v0.1.0
 **/
@Configuration
@Import(JPAConfig.class)
public class WebRootConfig {
}
