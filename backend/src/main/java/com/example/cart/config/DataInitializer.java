package com.example.cart.config;

import com.example.cart.model.Product;
import com.example.cart.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner init(ProductRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                repo.save(new Product("Laptop", 1200.00, "Powerful laptop" ));
                repo.save(new Product("Headphones", 150.00, "Noise cancelling" ));
                repo.save(new Product("Mouse", 25.00, "Wireless mouse" ));
            }
        };
    }
}
