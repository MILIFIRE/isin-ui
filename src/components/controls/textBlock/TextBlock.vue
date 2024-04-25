<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import { TextBlockDefaultProps, ControlProps } from "../controls_props";
import useTextBlock from "./textBlock";
import { compareAndset } from "../../../util";
import { TextWrapping } from "@babylonjs/gui";

export interface TextBlockProps extends /* @vue-ignore */ ControlProps {
  resizeToFit?: boolean;
  textWrapping?: TextWrapping | boolean;
  text?: string;
  textHorizontalAlignment?: number;
  textVerticalAlignment?: number;
  lineSpacing?: string | number;
  outlineWidth?: number;
  lineThrough?: boolean;
  underline?: boolean;
  outlineColor?: string;
  wordDivider?: string;
}
const props = defineProps(TextBlockDefaultProps);
const { node } = useTextBlock<TextBlockProps>(props as unknown as TextBlockProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, TextBlockProps>(node, newValue as unknown as TextBlockProps, oldVale as unknown as TextBlockProps);
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
