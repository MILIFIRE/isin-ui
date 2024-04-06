<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { SliderDefaultProps, SliderProps } from "../controlsProps";
import useSlider from "./useSlider";
import { compareAndset } from "../../../util";

const props = withDefaults(
  defineProps<SliderProps>(),
  SliderDefaultProps
);
const { node } = useSlider<SliderProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, SliderProps>(node, newValue, oldVale);
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
./useSlider