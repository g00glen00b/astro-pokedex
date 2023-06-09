# Astro Pokédex

This project demonstrates the usage of [Astro](https://astro.build/) with the [PokéAPI](https://pokeapi.co/) to create a Pokédex.
To make sure that the build-process doesn't execute too many API calls (see PokéAPI their [Fair Use Policy](https://pokeapi.co/docs/v2#fairuse)), we use a local containerized version of the PokéAPI.

This project is used as demo within the [Building a Pokédex with Astro](https://dimitri.codes/astro-pokedex/) tutorial and the [Intro to Astro](https://speakerdeck.com/g00glen00b/intro-to-astro) talk.

## Getting started

To run the containerized version of the PokéAPI, run the following command:

```
docker-compose up
```

When you run these containers for the first time, you have to initiate the data import.
This can be done by executing the following command:

```
./initialize.sh
```

Once the containers are running, you can verify this by checking the following URLs:

- http://localhost:8081 should contain the [Hasura dashboard](https://hasura.io/)
- http://localhost:8080/api/v2/pokemon-species/ should contain the PokéAPI REST API

After that, you can install the project dependencies with:

```
npm install
```

And finally, you can run the application with:

```
npm run dev
```

This should run the application at http://localhost:3000.
