<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { SliderDefaultProps, BaseSliderProps } from "../controls_props";
import useSlider from "./useSlider";
import { compareAndset } from "../../../util";
export interface SliderProps extends /* @vue-ignore */ BaseSliderProps {
  displayValueBar?: boolean;
  borderColor?: string;
  background?: string;
  thumbColor?: string;
  isThumbCircle?: boolean;
}
const props = defineProps(SliderDefaultProps);
const { node } = useSlider<SliderProps>(props as SliderProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, SliderProps>(
      node,
      newValue as SliderProps,
      oldVale as SliderProps
    );
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
./useSlider../controls_props
