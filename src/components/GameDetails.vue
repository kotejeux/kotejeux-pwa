<template>
  <div class="gameDetails">
    <h2>Titre : {{ jeu.titre }}</h2>
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
    getGame();
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
