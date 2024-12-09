<script setup lang="ts">
import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import AdvancedDynamicTexture from "./src/components/controls/advancedDynamicTexture/AdvancedDynamicTexture.vue";
import Rectangle from "./src/components/controls/rectangle/Rectangle.vue";
import StackPanel from "./src/components/controls/stackPanel/StackPanel.vue";
import TextBlock from "./src/components/controls/textBlock/TextBlock.vue";
import Image from "./src/components/controls/image/Image.vue";
import ScrollViewer from "./src/components/controls/scrollViewer/ScrollViewer.vue";
import Button from "./src/components/controls/button/button.vue";
import { onMounted, ref } from "vue";
import Grid from "./src/components/controls/grid/Grid.vue";
import img from "./src/assets/Tests.png";
import bgimg from "./src/assets/question_bg.png";
import bgblack from "./src/assets/blackbg.png";
import bar from "./src/assets/bar.png";
const ca = ref(null);
const textureRef = ref();
const show = ref(true);
const showAd = ref(false);
const num = ref(0);
const advance = ref(null);
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
// const bar_image = new GUI.Image("bar",bar);
</script>

<template>
  <div id="app">
    <canvas ref="ca" width="690" height="500"></canvas>
    <AdvancedDynamicTexture ref="advance" v-if="showAd" :scene="scene">
      <Rectangle
        :thickness="0"
        :cornerRadius="20"
        color="#000000"
        background="#333333"
        width="690px"
        height="500px"
      >
        <Image height="100%" width="100%" :source="bgblack"> </Image>

        <Grid
          :thickness="0"
          background="#333333"
          height="500px"
          :isHighlighted="true"
          :row="[{ height: 0.15 }, { height: 0.85 }]"
          :column="[{ width: 1 }]"
        >
          <StackPanel
            horizontalAlignment="left"
            :isHighlighted="true"
            :isVertical="false"
            rowIndex="0"
            columnIndex="0"
          >
            <TextBlock
              width="100px"
              height="40px"
              horizontalAlignment="left"
              color="#FFFFFF"
              fontSize="25"
              text="题库"
            ></TextBlock>

            <Image height="26px" width="57px" :source="img"></Image>
          </StackPanel>

          <ScrollViewer
            :thickness="0"
            :width="1"
            :height="1"
            rowIndex="1"
            columnIndex="0"
          >
            <StackPanel
              horizontalAlignment="left"
              :isHighlighted="true"
              :isVertical="true"
            >
              <Rectangle
                :thickness="0"
                v-for="(item, index) in ary"
                :key="item"
                :cornerRadius="15"
                width="100%"
                height="60px"
                paddingTop="5px"
                paddingBottom="5px"
                paddingLeft="10px"
                paddingRight="10px"
              >
                <Image
                  :isVisible="index === questionIndex"
                  height="100%"
                  width="100%"
                  :source="bgimg"
                >
                </Image>
                <Grid
                  :isHighlighted="false"
                  :row="[{ height: 1 }]"
                  :column="[{ width: 0.8 }, { width: 0.2 }]"
                >
                  <TextBlock
                    horizontalAlignment="left"
                    color="#FFFFFF"
                    fontSize="20"
                    text="历史长廊测试题"
                    rowIndex="0"
                    columnIndex="0"
                    width="200px"
                    :onPointerClickObservable="ClickObservable"
                    :onPointerEnterObservable="EnterObservable(index)"
                    :onPointerOutObservable="OutObservable(index)"
                  ></TextBlock>
                  <Rectangle
                    :cornerRadius="10"
                    width="60px"
                    background="#FFFFFF"
                    height="40px"
                    v-if="index === questionIndex"
                  >
                    <TextBlock
                      horizontalAlignment="left"
                      color="#D31145"
                      fontSize="15"
                      text="发布"
                      rowIndex="0"
                      columnIndex="1"
                    ></TextBlock>
                  </Rectangle>
                </Grid>
              </Rectangle>
            </StackPanel>
          </ScrollViewer>
        </Grid>
      </Rectangle>
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
