import { calculateX, calculateY } from "@/utils/screensizing";

const spacingX = {
  _3: calculateX(3),
  _5: calculateX(5),
  _7: calculateX(7),
  _10: calculateX(10),
  _15: calculateX(15),
  _20: calculateX(20),
  _25: calculateX(25),
  _30: calculateX(30),
  _40: calculateX(40),
};
const spacingY = {
  _3: calculateY(3),
  _5: calculateY(5),
  _7: calculateY(7),
  _10: calculateY(10),
  _15: calculateY(15),
  _20: calculateY(20),
  _40: calculateY(40),
  _60: calculateY(60),
};

const radius = {
  _3: calculateY(3),
  _6: calculateY(6),
  _10: calculateY(10),
  _12: calculateY(12),
  _15: calculateY(15),
  _20: calculateY(20),
  _30: calculateY(30),
};

const btnHeight = calculateY(50);
const inputHeight = calculateY(45);

export { spacingX, spacingY, btnHeight, inputHeight, radius };
