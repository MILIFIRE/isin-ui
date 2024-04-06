<script setup lang="ts">
import { AdvancedDynamicTexture } from "@babylonjs/gui";
import useAdvancedDynamicTexture from "./useAdvancedDynamicTexture";
import { onUnmounted, watch } from "vue";
import { removeNode, updateNode } from "../../../core";
const props = defineProps({
  texture: { type: AdvancedDynamicTexture, require: false },
  name: { type: String, require: false, default: "isin-UI" },
});
if (props.texture) {
  useAdvancedDynamicTexture<AdvancedDynamicTexture>(props.texture);
} else {
  const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI(props.name);
  useAdvancedDynamicTexture<AdvancedDynamicTexture>(advancedTexture);
}
if (props.texture) {
  watch(
    () => props.texture,
    (newValue) => {
      if (newValue) {
        updateNode(newValue);
      }
      // compareAndset<RectangleProps>(node as RectangleProps,newValue,oldVale)
    }
  );
}

onUnmounted(() => {
  if (props.texture) {
    removeNode();
  }
});
</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>
../containers./useAdvancedDynamicTexture
