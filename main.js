import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Correct import path
import gsap from 'gsap';
import { gain, log } from 'three/webgpu';

// Canvas
const canvas = document.querySelector('.webgl');

// Sizes
const size = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Scene
const scene = new THREE.Scene();

// Mesh (Sphere)
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
  metalness: 0.6,
  roughness: 0.5,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Light
const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
light2.position.set(0, 11, 7);
scene.add(light2);

// Camera
const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.2, 100);
camera.position.set(0, 0, 15);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const t1 = gsap.timeline({defaults: {duration : 1}});
t1.fromTo(mesh.scale,{x:0,y:0,z:0},{x:1,y:1,z:1});
t1.fromTo("nav",{y:-100 , opacity : 0},{y:0 , opacity : 1});
t1.fromTo(".heroText",{opacity:0,scale:0},{opacity:1,scale:1});

// Resize Handling
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

// Track Mouse State
let mouseDown = false;
let rgb = [];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));
window.addEventListener("mousemove",(e)=>{
  if(mouseDown){
    rgb = [
      Math.round((e.pageX / size.width) * 255),
      Math.round((e.pageY / size.height) * 255),
     150,
    ]
    
    // Update the sphere's material color dynamically
    let newColor = new THREE.Color(`rgb(${rgb.join(',')})`); 
    gsap.to(mesh.material.color,{
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
    })
  }
})
console.log(rgb);


// Render loop
const animate = () => {
  controls.update(); // Make damping work
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();