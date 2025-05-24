package com.PPlc.PPlc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
// @EnableJpaRepositories(basePackages = "com.PPlc.PPlc.repository")
public class PPlcApplication {

	public static void main(String[] args) {
		SpringApplication.run(PPlcApplication.class, args);
	}

}
