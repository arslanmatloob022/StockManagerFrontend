### Validation

Vuero offers `VControl` validation styles to go with any type of
form validation library you could use in your project.
Use the props shown in the code examples to handle validation.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="lucide:user" is-valid>
      <VInput
        type="text"
        placeholder="Username"
        value="Superman"
      />
      <p class="help has-text-success">
        This username is available
      </p>
    </VControl>
  </VField>
  <VField>
    <VControl icon="lucide:lock" has-error>
      <VInput
        type="text"
        placeholder="Password"
        value="passwd"
      />
      <p class="help has-text-danger">
        The password must contains 8 characters
      </p>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<form method="post" novalidate @submit.prevent>
  <VField>
    <VControl icon="lucide:user" is-valid>
      <VInput
        type="text"
        placeholder="Username"
        value="Superman"
        autocomplete="username"
      />
      <p class="help has-text-success">This username is available</p>
    </VControl>
  </VField>
  <VField>
    <VControl icon="lucide:lock" has-error>
      <VInput
        type="text"
        placeholder="Password"
        value="passwd"
        autocomplete="current-password"
      />
      <p class="help has-text-danger">The password must contains 8 characters</p>
    </VControl>
  </VField>
</form>

<!--/example-->
