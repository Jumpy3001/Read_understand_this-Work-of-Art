<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">Password Required</v-card-title>
      <v-card-text>
        <v-text-field
            v-model="inputPassword"
            label="Enter Password"
            type="password"
            autocomplete="off"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="checkPassword">Enter</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PasswordPrompt",
  data: () => ({
    dialog: true,
    inputPassword: "",
  }),
  methods: {
    checkPassword() {
      if (this.inputPassword === "wildRüegg!") { // Replace 'yourPassword' with your actual password
        this.dialog = false;
        this.$emit("authenticated");
      } else {
        alert("Incorrect password, please try again.");
      }
    },
  },
};
</script>
