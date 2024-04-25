<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { ButtonDefaultProps } from "../controls_props";
import type { ButtonProps } from "../controls_props";

import useButton from "./button";
import { compareAndset } from "../../../util";
// export interface ButtonProps extends  /* @vue-ignore */ RectangleProps {
//   thickness?: number;
//   cornerRadius?: number;
//   pointerEnterAnimation?: () => void;
//   pointerOutAnimation?: () => void;
//   pointerDownAnimation?: () => void;
//   pointerUpAnimation?: () => void;
//   delegatePickingToChildren?: boolean;
// }
const props = defineProps(ButtonDefaultProps);
const { node } = useButton<ButtonProps>(props as ButtonProps);
watch(
  props,
  (newValue , oldVale) => {
    compareAndset<typeof node, ButtonProps>(node, newValue as ButtonProps, oldVale as ButtonProps);
  },
  { immediate: true }
);
onUnmounted(() => {
  node.dispose();
});
</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>