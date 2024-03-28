package com.example.backend.controller;

import com.example.backend.model.Client;
import com.example.backend.model.Recette;
import com.example.backend.repositories.ClientRepository;
import com.example.backend.repositories.RecetteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3333")
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

    @DeleteMapping("/getrec/delete/{id}")
    public boolean deleteRecetteById(@PathVariable("id") int id) {
        if (recetteRepository.existsById(id)) {
            recetteRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    @PutMapping("/getrec/update/{id}")
    public Recette updateRecetteById(@PathVariable("id") int id, @RequestBody Recette updatedRecette) {
        Recette recette = recetteRepository.findById(id).orElse(null);

        recette.setRecipe_name(updatedRecette.getRecipe_name());
        recette.setCalories(updatedRecette.getCalories());
        recette.setDescription(updatedRecette.getDescription());
        recette.setIngredients(updatedRecette.getIngredients());
        recette.setIsVegan(updatedRecette.getIsVegan());
        recette.setIsVegetarian(updatedRecette.getIsVegetarian());
        recette.setInstructions(updatedRecette.getInstructions());
        recette.setImg(updatedRecette.getImg());
        recetteRepository.save(recette);

        return recette;
    }   
}
