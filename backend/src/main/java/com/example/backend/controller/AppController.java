package com.example.backend.controller;

import com.example.backend.model.Client;
import com.example.backend.model.Recipe;
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
    public List<Recipe> getAllRecette() {
        return recetteRepository.findAll();
    }

    @PostMapping("/postrec")
    public Recipe recette(@RequestBody Recipe recipe) {
        recetteRepository.save(recipe);
        return recipe;
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
    public Recipe updateRecetteById(@PathVariable("id") int id, @RequestBody Recipe updatedRecipe) {
        Recipe recipe = recetteRepository.findById(id).orElse(null);

        recipe.setRecipe_name(updatedRecipe.getRecipe_name());
        recipe.setCalories(updatedRecipe.getCalories());
        recipe.setDescriptions(updatedRecipe.getDescriptions());
        recipe.setIngredients(updatedRecipe.getIngredients());
        recipe.setIsVegan(updatedRecipe.getIsVegan());
        recipe.setIsVegetarian(updatedRecipe.getIsVegetarian());
        recipe.setInstructions(updatedRecipe.getInstructions());
        recipe.setImg(updatedRecipe.getImg());
        recetteRepository.save(recipe);

        return recipe;
    }   
}
