<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4">
              <div class="sketchfab-embed-wrapper"> <iframe title="AD-DAYR (Petra) Crowdsourced photogrammetry scan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/56138c424a6740339767ce25a8ff2bb1/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_hint=0&ui_theme=dark"> </iframe> </div>            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Hier eins der drei in AR</h1>
              <h1 class="font-weight-light">
                
              </h1>
              
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { ModelGltf  } from 'vue-3d-model';

export default {
  components: {
    ModelGltf 
  }
}
</script>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>
