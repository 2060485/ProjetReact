package com.back.controller;

import com.back.model.Client;
import com.back.model.Recette;
import com.back.repositories.ClientRepository;
import com.back.repositories.RecetteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Yellow things are spring-created
@RestController // Class that speaks with axios, frontend
@CrossOrigin("http://localhost:3333") // Only accept this address, otherwise anyone can access
public class AppController {

    @Autowired // Inject repo
    ClientRepository clientRepository;

    @Autowired
    RecetteRepository recetteRepository;

    @PostMapping("/crc") // Create client
    public Client client( @RequestBody Client client) {
        clientRepository.save(client);
        return client;
    }

    @GetMapping("/bob") // Endpoint to retrieve all users
    public List<Client> getAllUsers() {
        return clientRepository.findAll(); // Assuming findAll() retrieves all users from the database
    }

    @GetMapping("/getrec") // Endpoint to retrieve all users
    public List<Recette> getAllRecette() {
        return recetteRepository.findAll(); // Assuming findAll() retrieves all users from the database
    }

    @PostMapping("/postrec") // Create client
    public Recette recette( @RequestBody Recette recette) {
        recetteRepository.save(recette);
        return recette;
    }
}
