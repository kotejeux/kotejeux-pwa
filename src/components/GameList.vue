<template>
  <div class="gameList">
    <ul>
      <div class="item" v-for="jeu in jeux" :key="jeu.id">
        <li>{{ jeu.titre }}</li>
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
      endpoint: "http://localhost:8000/api/jeux"
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
.item {
  margin: 5px;
  margin-left: 0px;
  width: 90%;
  text-align: left;
  font-size: 20px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
}

ul {
  list-style-position: inside;
  list-style-type: none;
}
</style>
