<script setup lang="ts">
import { onUnmounted, watch } from "vue";
import {  ImageDefaultProps,ControlProps } from "../controls_props";
import useImage from "./useImage";
import { compareAndset } from "../../../util";
import { Nullable } from "@babylonjs/core/types";
import { IImage } from "@babylonjs/core";
export interface ImageProps extends /* @vue-ignore */  ControlProps {
  referrerPolicy?: Nullable<ReferrerPolicy>;
  detectPointerOnOpaqueOnly?: boolean;
  sliceLeft?: number;
  sliceRight?: number;
  sliceTop?: number;
  sliceBottom?: number;
  sourceLeft?: number;
  sourceTop?: number;
  sourceWidth?: number;
  sourceHeight?: number;
  imageHeight?: number;
  populateNinePatchSlicesFromImage?: boolean;
  autoScale?: boolean;
  stretch?: number;
  domImage?: IImage;
  source?: Nullable<string>;
  cellWidth?: number;
  cellHeight?: number;
  cellId?: number;
}

const props = withDefaults(
  defineProps<ImageProps>(),
    ImageDefaultProps
);
const { node } = useImage<ImageProps>(props);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, ImageProps>(
     node,
      newValue,
      oldVale
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
../containers./useRectangle
../props/containers../controls_props