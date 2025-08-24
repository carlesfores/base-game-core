export function addText(config) {
  const {
    scene,
    x,
    y,
    text,
    style = { fontSize: "16px", fill: "#fff" },
    origin = 0.5,
  } = config;

  return scene.add.text(x, y, text, { ...style }).setOrigin(origin);
};
