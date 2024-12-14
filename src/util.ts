import { Observable } from "@babylonjs/core";
import { Container, Control, Grid, LinearGradient } from "@babylonjs/gui";
import { KeyEnum } from "./keyEnum";
import { getParentNode } from "./core";
export const compareAndset = <K extends Control, T extends Object>(
  node: K,
  newValue: T,
  // @ts-ignore
  oldValue: T | undefined
) => {
  Object.keys(newValue).forEach((key) => {
    const nodeAlis = node as unknown as T;
    if (newValue[key as keyof typeof newValue] !== undefined) {
      // event
      if (node[key as keyof typeof node] && key.includes("Observable")) {
        (node[key as keyof typeof node] as unknown as Observable<Control>).add(newValue[key as keyof typeof newValue] as (value: Control) => void);
        return
      }
      // grid update
      if (key.includes("backgroundGradient")) {
        if((newValue[key as keyof typeof newValue] as string).includes("linear-gradient")){
          console.log("backgroundGradient:", newValue[key as keyof typeof newValue]);
        // calculateGradientCoordinates(node as Control, newValue[key as keyof typeof newValue])
        const params = CSSLinearGradientParser.parse(newValue[key as keyof typeof newValue] as string)
        // @ts-ignore
        nodeAlis[key] = CSSLinearGradientParser.applyToBabylonGradient(node as unknown as Container, params)
        }else{
          newValue[key as keyof typeof newValue] = undefined
        }

        return
      }
      if (key.includes(KeyEnum.ColumnIndex) ||
        key.includes(KeyEnum.RowIndex)) {
        updateIndex(
          node,
          (newValue as unknown as any)[KeyEnum.ColumnIndex],
          (newValue as unknown as any)[KeyEnum.RowIndex]
        );
        return
      }
      // other props
      if (key in nodeAlis) {
        nodeAlis[key as keyof typeof nodeAlis] =
          newValue[key as keyof typeof newValue];
      }
    }
  });
};

const updateIndex = (node: Control, columnIndex: number, rowIndex: number) => {
  const parent = getParentNode(node);
  if (parent) {
    const { control } = parent;
    if (control instanceof Grid) {
      const innerNode = control.getChildrenAt(rowIndex, columnIndex)
      if (innerNode && !innerNode.includes(node)) {
        control.removeControl(node);
        control.addControl(node, rowIndex, columnIndex);
      }
    }
  }
};


interface GradientCoordinates {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}
interface LinearGradientParams {
  angle: number;
  colors: string[];
  colorStops?: (number | undefined)[] | undefined;
}

class CSSLinearGradientParser {
  static parse(cssGradient: string): LinearGradientParams {
    // 移除 'linear-gradient(' 和 ')' 并去除首尾空格
    const cleanedGradient = cssGradient
      .replace(/^linear-gradient\(|\)$/g, '')
      .trim();

    // 默认角度为 180 度（从上到下）
    let angle = 180;
    let colorsStr = cleanedGradient;

    // 检查是否有角度
    const angleMatch = cleanedGradient.match(/^((?:to\s+\w+)|(?:-?\d+(?:deg)?))\s*,\s*(.+)$/i);
    if (angleMatch) {
      angle = this.normalizeAngle(angleMatch[1]);
      colorsStr = angleMatch[2];
    }

    // 分割颜色
    const colorParts = this.splitColorStops(colorsStr);

    // 打印调试信息
    console.log('解析结果:', {
      angle,
      colors: colorParts.map(part => part.color),
      colorStops: colorParts.map(part => part.stop)
    });

    return {
      angle,
      colors: colorParts.map(part => part.color),
      colorStops: colorParts.map(part => part.stop)
    };
  }

  // 角度规范化，增加对方向关键字的支持
  private static normalizeAngle(angleStr: string): number {
    // 处理方向关键字
    const directionMap: { [key: string]: number } = {
      'to top': 0,
      'to bottom': 180,
      'to left': 270,
      'to right': 90,
      'to top left': 315,
      'to top right': 45,
      'to bottom left': 225,
      'to bottom right': 135
    };

    // 转换为小写，去除多余空格
    const normalizedStr = angleStr.toLowerCase().replace(/\s+/g, ' ').trim();

    // 检查是否是方向关键字
    if (directionMap[normalizedStr] !== undefined) {
      return directionMap[normalizedStr];
    }

    // 处理数字角度
    const numericAngle = parseFloat(normalizedStr.replace('deg', ''));

    // 将角度转换为 0-360 范围
    return ((numericAngle % 360) + 360) % 360;
  }

  // 改进的颜色和色标分割方法
  private static splitColorStops(colorsStr: string): Array<{ color: string, stop?: number }> {
    // 更复杂的正则表达式，支持更多颜色格式和色标
    const colorStopRegex = /\s*([#a-fA-F0-9]+(?:\([^)]*\))?)\s*(?:(-?\d+(?:\.\d+)?%?)\s*)?(?:,|$)/g;
    const results: Array<{ color: string, stop?: number }> = [];

    let match;
    while ((match = colorStopRegex.exec(colorsStr)) !== null) {
      const color = match[1].trim();
      let stop: number | undefined;

      // 解析色标
      if (match[2]) {
        const stopValue = match[2];
        // 处理百分比或数值
        stop = stopValue.endsWith('%')
        ? parseFloat(stopValue) / 100
        : parseFloat(stopValue);
      }

      results.push({ color, stop });
    }

    // 如果没有明确色标，均匀分布
    if (results.length > 1 && results.every(r => r.stop === undefined)) {
      results.forEach((_, index) => {
        results[index].stop = index / (results.length - 1);
      });
    }

    return results;
  }
  static calculateGradientCoordinates(rect: Control, angle: number): GradientCoordinates {
    // 将角度转换为弧度
    const radians = angle * (Math.PI / 180);

    // 计算矩形对角线长度
    const diagonalLength = Math.sqrt(Number(rect.widthInPixels) ** 2 + Number(rect.heightInPixels) ** 2);

    // 计算渐变线的长度（对角线长度）
    const gradientLength = diagonalLength;

    // 计算起点和终点
    const startX = rect.centerX - (Math.cos(radians) * gradientLength / 2);
    const startY = rect.centerY - (Math.sin(radians) * gradientLength / 2);

    const endX = rect.centerX + (Math.cos(radians) * gradientLength / 2);
    const endY = rect.centerY + (Math.sin(radians) * gradientLength / 2);

    return {
      startX,
      startY,
      endX,
      endY
    };
  }
  // 将解析结果转换为 Babylon.js 渐变
  static applyToBabylonGradient(
    context: Container,
    params: LinearGradientParams,
  ): LinearGradient {
    // 计算渐变线的起点和终点
    const { startX, startY, endX, endY } = this.calculateGradientCoordinates(context, params.angle);
    // 创建线性渐变
    const gradient = new LinearGradient(startX, startY, endX, endY);

    // 添加颜色和色标
    params.colors.forEach((color, index) => {
      const stop = params.colorStops && params.colorStops[index] !== undefined
        ? params.colorStops[index]
        : index / (params.colors.length - 1);

      gradient.addColorStop(stop, color);
    });

    return gradient;
  }
}



export const setDefault = <T extends Object>(props: T, node: T) => {
  Object.keys(props).forEach((key) => {
    // console.log("key:", key);
    // console.log("props:", props[key]);
    if (props[key as keyof typeof props] !== undefined) {
      node[key as keyof typeof node] = props[key as keyof typeof props];
    }
  });
};
