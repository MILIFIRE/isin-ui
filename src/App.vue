<script setup lang="ts">
import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import AdvancedDynamicTexture from "./components/controls/advancedDynamicTexture/AdvancedDynamicTexture.vue";
import Rectangle from "./components/controls/rectangle/Rectangle.vue";
import StackPanel from "./components/controls/stackPanel/StackPanel.vue";
import TextBlock from "./components/controls/textBlock/TextBlock.vue";
import Image from "./components/controls/image/Image.vue";
import ScrollViewer from "./components/controls/scrollViewer/ScrollViewer.vue";
import { onMounted, ref } from "vue";
const ca = ref(null);
const textureRef = ref();
const show = ref(true);
setInterval(() => {
  console.log("show.value:", show.value);
  show.value = !show.value;
}, 3000);
onMounted(() => {
  if (ca.value) {
    const engine = new BABYLON.Engine(ca.value);

    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 5, -10),
      scene
    );

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(ca.value, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    // var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    // GUI
    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    textureRef.value = advancedTexture;
    // var rect1 = new GUI.Rectangle();
    // rect1.adaptWidthToChildren = true;
    // rect1.height = "40px";
    // rect1.width = "40px";
    // rect1.cornerRadius = 20;
    // rect1.color = "Orange";
    // rect1.thickness = 4;
    // rect1.background = "green";
    // advancedTexture.addControl(rect1);

    // var text1 = new GUI.TextBlock();
    // text1.text = "Hello world";
    // text1.color = "white";
    // text1.width = "150px";
    // text1.fontSize = 24;
    // rect1.addControl(text1);
    engine.runRenderLoop(() => {
      scene.render();
    });
  }
});
const log = () => {
  console.log("1234");
};
</script>

<template>
  <div id="app">
    <canvas ref="ca" width="720" height="720"></canvas>
    <AdvancedDynamicTexture v-if="textureRef" :texture="textureRef">
      <ScrollViewer :thickness="7" color="green" :width="0.4" :height="0.4">
        <StackPanel :isHighlighted="true">
          <Rectangle
            :thickness="4"
            color="Orange"
            :cornerRadius="20"
            background="red"
            width="40px"
            height="40px"
          ></Rectangle>
          <Rectangle
            :thickness="4"
            color="Orange"
            :cornerRadius="20"
            background="red"
            width="40px"
            height="40px"
          ></Rectangle>
          <Rectangle
            :thickness="4"
            color="Orange"
            :cornerRadius="0"
            background="red"
            width="40px"
            height="40px"
            :onPointerOutObservable="log"
            :scaleX="0.5"
            v-if="show"
           
          >
          </Rectangle>
          <Image
            height="300px"
            source="https://meta.gotin.online/Table/Test/AIA/arts/1919.png"
          ></Image>
          <TextBlock
            height="40px"
            color="red"
            fontSize="100"
            text="aaaaaa"
          ></TextBlock>
        </StackPanel>
      </ScrollViewer>
    </AdvancedDynamicTexture>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
./components/controls/advancedDynamicTexture/AdvancedDynamicTexture.vue./components/controls/rectangle/Rectangle.vue./components/controls/stackPanel/StackPanel.vue./components/controls/textBlock/TextBlock.vue
