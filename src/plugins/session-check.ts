import { definePlugin } from "/@src/utils/plugins";
import { useApi } from "../composables/useApi";
import { useStore } from "../stores/useStore";
/**
 * Here we are setting up two router navigation guards
 * (note that we can have multiple guards in multiple plugins)
 *
 * We can add meta to pages either by declaring them manualy in the
 * routes declaration (see /@src/router.ts)
 * or by adding a <route> tag into .vue files (see /@src/pages/sidebar/dashboards.ts)
 *
 * <script setup lang="ts">
 * definePage({
 *   meta: {
 *     requiresAuth: true,
 *   },
 * })
 * </script>
 *
 * <template>
 *  // HTML content
 * </template>
 */
export default definePlugin(async ({ router, pinia, event }) => {
  const userSession = useUserSession(pinia);
  const api = useApi();
  const store = useStore();

  if (userSession.isLoggedIn) {
    try {
      const resp = await api.get("/get_user_from_token/");
      const userData = resp.data[0];
      if (userData.store) {
        await store.loadStore(userData.store);
      }
      userSession.setUser(userData);
    } catch (err) {
      userSession.logoutUser();
    }
  }

  // 2. If the page requires auth, check if user is logged in
  // if not, redirect to login page.
  router.beforeEach((to) => {
    const token = useUserToken(event);
    if (to.meta.requiresAuth && !token.value) {
      return {
        name: "/auth/login",
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      };
    }
  });
});
