<script setup lang="ts">
import { AdvancedDynamicTexture } from "@babylonjs/gui";
import useAdvancedDynamicTexture from "./useAdvancedDynamicTexture";
import { onUnmounted, watch } from "vue";
import { removeNode, updateNode } from "../../../core";
import type { Scene } from "@babylonjs/core";

defineOptions({
  name: "AdvancedDynamicTexture",
});
const props = defineProps({
  texture: { type: AdvancedDynamicTexture, require: false },
  name: { type: String, require: false, default: "isin" },
  scene: { type: Object as () => Scene },
});
let inode = props.texture;
if (props.texture) {
  useAdvancedDynamicTexture<AdvancedDynamicTexture>(props.texture);
} else {
  if (!props.scene) {
    console.error(
      "Please confirm that the scene has been created before using AdvancedDynamicTexture"
    );
  } else {
    inode = AdvancedDynamicTexture.CreateFullscreenUI(
      props.name,
      undefined,
      props.scene
    );
    useAdvancedDynamicTexture<AdvancedDynamicTexture>(inode);
  }
}
if (props.texture) {
  watch(
    () => props.texture,
    (newValue) => {
      if (newValue) {
        inode = newValue;
        updateNode(newValue);
      }
    }
  );
}
defineExpose({ inode });
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
