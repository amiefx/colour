<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :append-icon="item.model ? 'mdi-chevron-down' : 'mdi-chevron-up'"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.link">
              <v-list-item-action v-if="child.icon">
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :to="item.link">
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

      <v-list dense>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

    <div class="logo">
        <div>
          <router-link to="/">
            <v-img height="50" width="55" :src="logoImg" alt="Khodgi" />
          </router-link>
        </div>
      </div>
      <v-spacer></v-spacer>

      <login-avatar />

    </v-app-bar>
    <v-content>
      <v-container fluid>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoginAvatar from '../components/layouts/LoginAvatar'
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    source: String
  },
  components: {
    LoginAvatar
  },
  data: () => ({
    dialog: false,
    drawer: null,
    logoImg: window.location.origin + "/storage/images/favicon.png",
    users: {},
    items: [
      { icon: "mdi-chevron-right", text: "Dashboard", link: "/admin/dashboard" },
      { icon: "mdi-chevron-right", text: "Menu", link: "/admin/categories" },
      { icon: "mdi-chevron-right", text: "Reviews", link: "/admin/ratings" },
      { icon: "mdi-chevron-right", text: "Notifications to reply", link: "/admin/notify" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "User Management",
        link: '#',
        children: [
            { icon: "mdi-chevron-right", text: "Roles", link: "/admin/roles" },
            { icon: "mdi-chevron-right", text: "Users", link: "/admin/users" },
            ]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Social Media Links",
        link: '#',
        children: [
            { icon: "mdi-chevron-right", text: "Social Media Links", link: "/admin/social" },
            ]
      }
    ]
  }),
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    logout() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "home"
        });
      });
    }
  }

};
</script>

<style scoped>
    .menu-icons {
  position: absolute;
  float: right;
  justify-content: right;
  clear: none;
  right: 30px;
}
.logo {
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  top: 5px;
}

.nav-menu {
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
}

ul {
  list-style-type: none;
}
</style>
