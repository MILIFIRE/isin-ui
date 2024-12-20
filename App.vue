<script setup lang="ts">
import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import {AdvancedDynamicTexture,Rectangle} from "./src/components";
import QuestionList from "./page/questionList.vue";
import QuestionInfo from "./page/questioninfo.vue";
import StarQuestion from "./page/starQuestion.vue";
import AnswerQuesions from "./page/answerQuesions.vue";
import QuestionResult from "./page/questionResult.vue";
import DialogQuestion from "./page/dialogQuestion.vue";
import { onMounted, ref } from "vue";

const ca = ref(null);
const textureRef = ref();
const show = ref(true);
const showAd = ref(false);
const num = ref(0);
const advance = ref(null);
const name = ref(null);
let scene = undefined;
// setInterval(() => {
//   console.log("show.value:", show.value);
//   show.value = !show.value;
//   num.value += 1;
// }, 3000);
onMounted(() => {
  if (ca.value) {
    const engine = new BABYLON.Engine(ca.value);

    scene = new BABYLON.Scene(engine);
    const plane = BABYLON.MeshBuilder.CreatePlane(
      "plane",
      { width: 6.9, height: 5 },
      scene
    );
    textureRef.value = GUI.AdvancedDynamicTexture.CreateForMesh(
      plane,
      6.9 * 100,
      5 * 100,
      undefined,
      undefined,
      true
    );
    name.value = textureRef.value.name;
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
    sphere.isVisible=false

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    // var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    // GUI
    // var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    // textureRef.value = advancedTexture;
    setTimeout(() => {
      console.log("instace:", advance.value.inode);
    }, 1000);
    showAd.value = true;
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
let questionIndex = ref(-1);
const EnterObservable = function (index: number) {
  // questionIndex = index;
  console.log("Enter");
  return function () {
    questionIndex.value = index;
  };
};
const OutObservable = function (index: number) {
  // questionIndex = index;
  console.log("Out");
  return function () {
    questionIndex.value = -1;
  };
};
const ClickObservable = function (index: number) {
  // questionIndex = index;
  // return  function()
};

const ary = [
  "历史长廊测试题",
  "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
  // "历史长廊测试题",
];

const rec = ref(null);
setTimeout(() => {
  console.log("rec:", rec.value);
}, 1000);

const leftBtn = ()=>{
  console.log("leftBtn");}
  const rightBtn = ()=>{
    console.log("rightBtn");}
</script>

<template>
  <div id="app">
    <canvas ref="ca" width="690" height="500"></canvas>
    <AdvancedDynamicTexture
      ref="advance"
      v-if="showAd"
      :scene="scene"
      :name="name"
    >
    <!-- <Rectangle
      :cornerRadius="20"
      color="#000000"
      background="#313131"
      width="690px"
      height="500px"
    /> -->
      <!-- <QuestionList /> -->
      <!-- <QuestionInfo/> -->
      <!-- <StarQuestion/> -->
      <!-- <AnswerQuesions/> -->
      <!-- <QuestionResult/> -->
      <DialogQuestion :params="{leftText:'AAAA',rightText:'bbbbb',text:'要中途结束本次答题互动吗？'}" @left="leftBtn" @right="rightBtn" />

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
