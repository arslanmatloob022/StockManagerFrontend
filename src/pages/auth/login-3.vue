<script setup lang="ts">
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()
const notyf = useNotyf()
const token = useUserToken()
const redirect = route.query.redirect as string

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    await sleep(2000)
    token.value = 'logged-in'

    notyf.dismissAll()
    notyf.primary('Welcome back, Erik Kovalsky')

    if (redirect) {
      router.push(redirect)
    }
    else {
      router.push('/sidebar/dashboards')
    }

    isLoading.value = false
  }
}

useHead({
  title: 'Auth Login 3 - Vuero',
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <LandingGrids class="is-contrasted" />
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left" />
      <div class="center">
        <RouterLink
          to="/"
          class="header-item"
        >
          <AnimatedLogo
            width="38px"
            height="38px"
          />
        </RouterLink>
      </div>
      <div class="right">
        <VDarkmodeToggle />
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap is-relative">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>Welcome Back.</h2>
          <p>Please sign in to your account</p>
          <RouterLink to="/auth/signup-3">
            I do not have an account yet
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form
            method="post"
            novalidate
            @submit.prevent="handleLogin"
          >
            <div class="login-form">
              <VField>
                <VControl icon="lucide:user">
                  <VInput
                    type="text"
                    placeholder="Username"
                    autocomplete="username"
                  />
                </VControl>
              </VField>
              <VField>
                <VControl icon="lucide:lock">
                  <VInput
                    type="password"
                    placeholder="Password"
                    autocomplete="current-password"
                  />
                </VControl>
              </VField>

              <!-- Switch -->
              <VField>
                <VControl class="setting-item">
                  <VCheckbox
                    label="Remember me"
                    color="primary"
                    paddingless
                  />
                </VControl>
              </VField>

              <!-- Submit -->
              <div class="login">
                <VButton
                  :loading="isLoading"
                  type="submit"
                  color="primary"
                  bold
                  fullwidth
                  raised
                >
                  Sign In
                </VButton>
              </div>
            </div>
          </form>
        </div>

        <div class="forgot-link has-text-centered">
          <a>Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>
