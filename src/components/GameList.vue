<template>
  <div class="gameList">
    <ul>
      <div class="item" v-for="jeu in jeux" :key="jeu.id">
        <router-link v-bind:to="{name: 'GameDetails', params: {id: jeu.id}}" tag="button">
          {{ jeu.titre }}
        </router-link>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "gameList",
  data() {
    return {
      jeux: null,
      endpoint: "https://test.kotejeux.be/api/jeux"
    };
  },

  created() {
    this.getAllGames();
  },

  methods: {
    getAllGames() {
      axios
        .get(this.endpoint)
        .then(response => {
          this.jeux = response.data;
        })
        .catch(error => {
          console.log("------error-------");
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
button {
  margin: 5px;
  margin-left: 0px;
  width: 90%;
  text-align: left;
  font-size: 20px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
  color: black;
}

button:hover {
  background-color: #008bca;
  color: white;
}

ul {
  list-style-position: inside;
  list-style-type: none;
}
</style>
