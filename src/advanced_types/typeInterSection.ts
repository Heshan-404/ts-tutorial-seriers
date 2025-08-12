type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable; // Type Intersection

let textBox: UIWidget = {
  // drag: ()=> {},
  // resize: () => {}
};
