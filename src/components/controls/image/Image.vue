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

const props =defineProps(ImageDefaultProps);
const { node } = useImage<ImageProps>(props as unknown as ImageProps);
watch(
  props,
  (newValue, oldVale) => {
    compareAndset<typeof node, ImageProps>(
     node,
      newValue as unknown as ImageProps,
      oldVale as unknown as ImageProps
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
