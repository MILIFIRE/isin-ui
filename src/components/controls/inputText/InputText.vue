<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { InputTextDefaultProps, ControlProps } from "../controls_props";
import useInputText from "./useInputText";
import { compareAndset } from "../../../util";

export interface InputTextProps extends /* @vue-ignore */ ControlProps {
  maxWidth?: string | number;
  maxWidthInPixels?: number;
  highligherOpacity?: number;
  onFocusSelectAll?: boolean;
  textHighlightColor?: string;
  margin?: string;
  marginInPixels?: number;
  autoStretchWidth?: boolean;
  thickness?: number;
  focusedBackground?: string;
  focusedColor?: string;
  background?: string;
  placeholderColor?: string;
  placeholderText?: string;
  deadKey?: boolean;
  highlightedText?: string;
  addKey?: boolean;
  currentKey?: string;
  text?: string;
  width?: string | number;
}

const props = defineProps(InputTextDefaultProps);

const { node } = useInputText(props as InputTextProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, InputTextProps>(
      node,
      newValue as InputTextProps,
      oldVale as InputTextProps
    );
  },
  { immediate: true }
);
onUnmounted(() => {
  node.dispose();
});
defineExpose({inode:node})

</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>
../controls_props
