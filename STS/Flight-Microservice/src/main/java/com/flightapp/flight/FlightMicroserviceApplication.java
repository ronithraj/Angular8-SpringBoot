package com.flightapp.flight;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableDiscoveryClient
@EnableCaching
@EnableSwagger2
public class FlightMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightMicroserviceApplication.class, args);
	}

}
