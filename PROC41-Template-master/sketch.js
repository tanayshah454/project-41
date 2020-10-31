const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops;

function preload(){
    
}

function setup(){
   createCanvas(300,600)
   var maxDrops=100
}

function draw(){
    background(0,0,0)
    Engine.update(engine);
    for(i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)))
    }
    drops.display()
}   

