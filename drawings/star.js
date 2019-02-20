var boxes = [];
function cP(size) { return size * 20; }
boxes.push(Matter.Bodies.rectangle(cP(10.0 + 1), cP(10.0), cP(2), cP(2)));
boxes[0].render.fillStyle = '#ff0000';
boxes[0].render.strokeStyle = '#ff0000';
boxes.push(Matter.Bodies.rectangle(cP(10.0 + 1), cP(12.0), cP(2), cP(2)));
boxes[1].render.fillStyle = '#ffff00';
boxes[1].render.strokeStyle = '#ffff00';
boxes.push(Matter.Bodies.rectangle(cP(10.0 + 1), cP(8.0), cP(2), cP(2)));
boxes[2].render.fillStyle = '#ffff00';
boxes[2].render.strokeStyle = '#ffff00';
boxes.push(Matter.Bodies.rectangle(cP(8.0 + 1), cP(10.0), cP(2), cP(2)));
boxes[3].render.fillStyle = '#ffff00';
boxes[3].render.strokeStyle = '#ffff00';
boxes.push(Matter.Bodies.rectangle(cP(12.0 + 1), cP(10.0), cP(2), cP(2)));
boxes[4].render.fillStyle = '#ffff00';
boxes[4].render.strokeStyle = '#ffff00';
