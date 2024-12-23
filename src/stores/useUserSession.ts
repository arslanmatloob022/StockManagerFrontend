import { acceptHMRUpdate, defineStore } from "pinia";
import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";

export interface User {
  id: string;
  password: string;
  last_login: string;
  date_joined: string;
  email: string;
  role: string;
  avatar: string;
  is_active: string;
  phoneNumber: string;
  username: string;
  is_sentMail: number;
}

export const useUserSession = defineStore("useUserSession", () => {
  const token = useStorage("token", "");
  const code = useStorage("code", "");

  const user = ref<User>(
    JSON.parse(
      localStorage.getItem("user") ||
        JSON.stringify({
          id: "",
          password: "",
          last_login: "",
          date_joined: "",
          email: "",
          role: "",
          avatar: "",
          is_active: false,
          phoneNumber: "",
          username: "",
          is_sentMail: 0,
        })
    )
  );

  const loading = ref(true);

  // Computed property to check if the user is logged in
  const isLoggedIn = computed(
    () => token.value !== undefined && token.value !== ""
  );

  // Set user data
  function setUser(newUser: User) {
    user.value = newUser;
    console.log("user data in store", user.value);
  }

  // Set token
  function setToken(newToken: string) {
    token.value = newToken;
  }

  // Set code
  function setCode(newCode: string) {
    code.value = newCode;
  }

  // Set loading state
  function setLoading(newLoading: boolean) {
    loading.value = newLoading;
  }

  // Logout the user and clear the data
  async function logoutUser() {
    console.log("User logout function called");
    token.value = ""; // Use empty string instead of undefined
    code.value = ""; // Use empty string instead of undefined
    // Reset user to an empty object structure
    user.value = {
      id: "",
      password: "",
      last_login: "",
      date_joined: "",
      email: "",
      role: "",
      avatar: "",
      is_active: "",
      phoneNumber: "",
      username: "",
      is_sentMail: 0,
    };
    window.localStorage.setItem("token", ""); // Explicitly clear the token from localStorage
  }

  return {
    user,
    code,
    token,
    isLoggedIn,
    loading,
    logoutUser,
    setUser,
    setToken,
    setCode,
    setLoading,
  } as const;
});

// Enable hot module replacement
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot));
}
