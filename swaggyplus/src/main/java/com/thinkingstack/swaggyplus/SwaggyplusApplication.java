package com.thinkingstack.swaggyplus;

//import com.thinkingstack.swaggyplus.controllers.restaurantcontroller.RestaurantController;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.thinkingstack")
@EnableJpaRepositories(basePackages = "com.thinkingstack")
@EntityScan("com.thinkingstack")

public class SwaggyplusApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwaggyplusApplication.class, args);
	}

}
