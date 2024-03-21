import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#7ED957",
                secondary: "#00BF63",
                accent: "3D87E4"
            }
        }
    }
});
