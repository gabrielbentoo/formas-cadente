const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
let quadrado, circulo, retangulo;
let ground;


function setup() {
    let canvas = createCanvas(550, 600);

    engine = Engine.create();
    world = engine.world;

    let groundOptions = {
        isStatic: true
    }
    ground = Bodies.rectangle(600, 580, 1200, 2, groundOptions);
    World.add(world, ground);

    let circuloOptions = {
        restitution: 0.5,
        friction: 0.02,
        frictionAir: 0
    }

    circulo = Bodies.circle(220, 10, 10, circuloOptions);
    World.add(world, circulo);

    let quadradoOptions = {
        restitution: 0.7,
        friction: 0.01,
        frictionAir: 0.1
    }
    quadrado = Bodies.rectangle(110, 50, 10, 10, quadradoOptions);
    World.add(world, quadrado);

    let retanguloOptions = {
        restitution: 0.01,
        friction: 1,
        frictionAir: 0.3
    }
    retangulo = Bodies.rectangle(350, 50, 10, 10, retanguloOptions);
    World.add(world, retangulo);

    fill("blue");
    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
    background("gray");
    Engine.update(engine);
    rect(ground.position.x, ground.position.y, 1200, 2);
    ellipse(circulo.position.x, circulo.position.y, 30)
    rect(quadrado.position.x, quadrado.position.y, 50, 50);
    rect(retangulo.position.x, retangulo.position.y, 100, 50);
}
