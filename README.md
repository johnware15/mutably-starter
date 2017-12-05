# Mutably Starter Project
For goal #383

## To get this project running
1. `npm install`
1. `npm start` to run (uses nodemon)

# CRUD API

## Base URL

[https://mutably.herokuapp.com](https://mutably.herokuapp.com)

## Resources
1. `books`
1. `pokemon`
1. `albums`

## Books Endpoint

| Request | URL | Action |
| :--- | :--- | :--- |
| GET | `/books` | READS all books |
| POST | `/books` | CREATES new book |
| GET | `/books/:id` | READS one book |
| PUT | `/books/:id` | UPDATES one book |
| DELETE | `/books/:id` | DELETES one book |

#### Sample Response

GET `/books`

```js
{
  books: [
    {
      _id: "563970891719c56cac83e5bb",
      title: "Around the World in 80 Days",
      author: "Jules Verne",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
      releaseDate: "January 30, 1873",
      __v: 0
    },
    {
      _id: "563970891719c56cac83e5bc",
      title: "The Four Hour Workweek",
      author: "Tim Ferriss",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892117/865b465a-8156-11e5-834b-9c4172d4b0fe.jpg",
      releaseDate: "April 1, 2007",
      __v: 0
    }
  ]
}
```

## Pokemon Endpoint

| Request | URL | Action |
| :--- | :--- | :--- |
| GET | `/pokemon` | READS all pokemon |
| POST | `/pokemon` | CREATES new pokemon |
| GET | `/pokemon/:id` | READS one pokemon |
| PUT | `/pokemon/:id` | UPDATES one pokemon |
| DELETE | `/pokemon/:id` | DELETES one pokemon |

> Note that the word "pokemon" is both singular and plural.

#### Sample Response

GET `/pokemon`

```js
{
  pokemon: [
    {
      "name": "Bulbasaur",
      "pokedex": "001",
      "evolves_from": "Egg",
      "image": "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png"
    },
    {
      "name": "Venusaur",
      "pokedex": "003",
      "evolves_from": "Ivysaur",
      "image": "https://upload.wikimedia.org/wikipedia/en/d/dd/1200px-003Venusaur.png"
    }
  ]
}
```

## Albums Endpoint

| Request | URL | Action |
| :--- | :--- | :--- |
| GET | `/albums` | READS all albums |
| POST | `/albums` | CREATES new album |
| GET | `/albums/:id` | READS one album |
| PUT | `/albums/:id` | UPDATES one album |
| DELETE | `/albums/:id` | DELETES one album |

#### Sample Response

GET `/albums`

```js
{
  albums: [
    {
      _id: "58f16c62903fce7457f5195d",
      artistName: "Ladyhawke",
      name: "Ladyhawke",
      releaseDate: "2008, November 18",
      __v: 0,
      genres: [
        "new wave",
        "indie rock",
        "synth pop"
      ]
    },
    {
      _id: "58f16c62903fce7457f51961",
      artistName: "Anderson .Paak",
      name: "Malibu",
      releaseDate: "2016, January 15",
      __v: 0,
      genres: [
        "hip hop",
        "neo soul"
      ]
    }
  ]
}
```

## Reset Seed Data

<a href="http://mutably.herokuapp.com/reset" target="_blank">http://mutably.herokuapp.com/reset</a>
