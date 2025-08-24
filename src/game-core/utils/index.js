
// TODO Remove this fn and use directy scene.add.. 
// used only for wip scafolding definition 
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
