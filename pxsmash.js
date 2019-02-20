// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
	Mouse = Matter.Mouse;
	MouseConstraint = Matter.MouseConstraint;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
	options: {
		width: 420,
		height: 440,
		wireframes: false,
	}
});
function cP(size) {
	return size * 20;
}
// create two boxes and a ground
//var boxA = Bodies.rectangle(10, 10, 20, 20);
//var boxB = Bodies.rectangle(20, 30, 20, 20);
//var boxes = []
var ground = Bodies.rectangle(210, 440, 420, 60, { isStatic: true });

var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

// add all of the bodies to the world
World.add(engine.world, boxes);
World.add(engine.world, [ground]);
World.add(engine.world, mouseConstraint);

// run the engine
//Engine.run(engine);

// run the renderer
Render.run(render);