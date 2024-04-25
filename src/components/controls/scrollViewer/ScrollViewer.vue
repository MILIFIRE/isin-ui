<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {  ScrollViewerDefaultProps,RectangleProps } from "../controls_props";
import useRectangle from "./useScrollViewer";
import { compareAndset } from "../../../util";
import { Image } from "@babylonjs/gui";

export interface ScrollViewerProps extends /* @vue-ignore */ RectangleProps {
  freezeControls?: boolean;
  bucketHeight?: number;
  forceHorizontalBar?: boolean;
  forceVerticalBar?: boolean;
  wheelPrecision?: number;
  scrollBackground?: string;
  barColor?: string;
  thumbImage?: Image;
  horizontalThumbImage?: Image;
  verticalThumbImage?: Image;
  barSize?: number;
  thumbLength?: number;
  thumbHeight?: number;
  barImageHeight?: number;
  horizontalBarImageHeight?: number;
  verticalBarImageHeight?: number;
  barBackground?: string;
  barImage?: Image;
  horizontalBarImage?: Image;
  verticalBarImage?: Image;
  isImageBased?:boolean;
}
const props =defineProps(ScrollViewerDefaultProps);
const { node } = useRectangle<ScrollViewerProps>(props as ScrollViewerProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, ScrollViewerProps>(
     node,
      newValue as ScrollViewerProps,
      oldVale as ScrollViewerProps
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
../controls_props