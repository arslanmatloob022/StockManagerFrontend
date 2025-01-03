### Dark mode

Customize `<VIconWrap />` with the `dark`, `darkPrimary`
and `darkCardBordered` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex column-gap="3px">
    <VIconWrap icon="lucide:star" dark="1" />
    <VIconWrap icon="lucide:star" dark="2" />
    <VIconWrap icon="lucide:star" />
    <VIconWrap icon="lucide:star" dark="4" />
    <VIconWrap icon="lucide:star" dark="5" />
    <VIconWrap icon="lucide:star" dark="6" />
  </VFlex>
  <VFlex class="mt-2" column-gap="3px">
    <VIconWrap
      icon="lucide:star"
      dark="1"
      dark-card-bordered
    />
    <VIconWrap icon="lucide:star" dark="1" />
    <VIconWrap
      icon="lucide:star"
      dark="6"
      dark-card-bordered
    />
    <VIconWrap icon="lucide:star" dark="6" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex column-gap="3px">
    <VIconWrap icon="lucide:star" dark="1" />
    <VIconWrap icon="lucide:star" dark="2" />
    <VIconWrap icon="lucide:star" />
    <VIconWrap icon="lucide:star" dark="4" />
    <VIconWrap icon="lucide:star" dark="5" />
    <VIconWrap icon="lucide:star" dark="6" />
  </VFlex>
  <VFlex class="mt-2" column-gap="3px">
    <VIconWrap icon="lucide:star" dark="1" dark-card-bordered />
    <VIconWrap icon="lucide:star" dark="1" />
    <VIconWrap icon="lucide:star" dark="6" dark-card-bordered />
    <VIconWrap icon="lucide:star" dark="6" />
  </VFlex>
</div>

<!--/example-->
