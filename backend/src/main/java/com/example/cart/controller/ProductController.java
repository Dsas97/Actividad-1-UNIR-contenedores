package com.example.cart.controller;

import com.example.cart.model.Product;
import com.example.cart.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {
    private final ProductRepository repo;
    public ProductController(ProductRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Product> all() { return repo.findAll(); }

    @PostMapping
    public Product create(@RequestBody Product p) { return repo.save(p); }

    @GetMapping("/{id}")
    public Product get(@PathVariable("id") Long id) { return repo.findById(id).orElseThrow(); }

    @DeleteMapping
    public void deleteAll() {
        repo.deleteAll();
    }
}
