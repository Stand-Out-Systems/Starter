package com.example.demo.beer;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BeerController {
    private BeerRepository repository;

    public BeerController(BeerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/good-beers")
//    @CrossOrigOin(origins = "http://localhost:4200")
    public Collection<Beer> goodBeers() {

        return repository.findAll().stream()
                .filter(this::isGreat)
                .collect(Collectors.toList());
    }
    
    @PostMapping("/good-beers")
    public Beer createBeer(@RequestBody String name) {
    	return this.repository.save(new Beer(name));
    }
    
    @PutMapping("/good-beers/{id}")
    public Beer updateBeer(@RequestBody Beer newBeer, @PathVariable Long id) {
    	
    	Optional<Object> beerDTO = repository.findById(id)
    			.map(beer -> {
    				beer.setName(newBeer.getName());
    				return repository.save(beer);
    			});
    	
    	if(beerDTO.isPresent()) {
    		return (Beer) beerDTO.get();
    	}else {
    		return null;	
    	}
    }
     
    @DeleteMapping("/good-beers/{id}")
    public void deleteBeer(@PathVariable Long id) {
      repository.deleteById(id);
    }

    private boolean isGreat(Beer beer) {
        return !beer.getName().equals("Budweiser") &&
                !beer.getName().equals("Coors Light") &&
                !beer.getName().equals("PBR");
    }
}