package com.example.backend.controller;

import com.example.backend.model.Client;
import com.example.backend.model.Recette;
import com.example.backend.repositories.ClientRepository;
import com.example.backend.repositories.RecetteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3333")
public class AppController {

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    RecetteRepository recetteRepository;

    @PostMapping("/crc")
    public Client client(@RequestBody Client client) {
        clientRepository.save(client);
        return client;
    }

    @GetMapping("/bob")
    public List<Client> getAllUsers() {
        return clientRepository.findAll();
    }

    @GetMapping("/getrec")
    public List<Recette> getAllRecette() {
        return recetteRepository.findAll();
    }

    @PostMapping("/postrec")
    public Recette recette(@RequestBody Recette recette) {
        recetteRepository.save(recette);
        return recette;
    }

    @DeleteMapping("/bob/delete/{id}")
    public boolean deleteClientById(@PathVariable("id") int id) {
        if (clientRepository.existsById(id)) {
            clientRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    @PutMapping("/bob/update/{id}")
    public Client updateClientById(@PathVariable("id") int id, @RequestBody Client updatedClient) {
        Client client = clientRepository.findById(id).orElse(null);

        client.setFirstName(updatedClient.getFirstName());
        client.setLastName(updatedClient.getLastName());
        client.setEmail(updatedClient.getEmail());
        clientRepository.save(client);

        return client;
    }
}
