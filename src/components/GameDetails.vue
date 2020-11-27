<template>
  <div class="gameDetails">
    <h2>{{ jeu.titre }}</h2>
    <p>De {{ jeu.joueursMin }} à {{ jeu.joueursMax }} joueurs</p>
    <p>Durée : {{ jeu.duree }} minutes</p>
    <p id="description">{{ jeu.description }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "gameDetails",
  data() {
    return {
      jeu: null,
      endpoint: "https://test.kotejeux.be/api/jeux/".concat(
        this.$route.params.id
      )
    };
  },

  created() {
    this.getGame();
  },

  methods: {
    getGame() {
      axios
        .get(this.endpoint)
        .then(response => {
          this.jeu = response.data;
        })
        .catch(error => {
          console.log("------error------");
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.gameDetails {
  margin: 10px;
}

#description {
  text-align: justify;
}
</style>
