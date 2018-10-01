package com.ac328.fitgame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class FitgameApplication {

	public static void main(String[] args) {
		SpringApplication.run(FitgameApplication.class, args);
	}
}
