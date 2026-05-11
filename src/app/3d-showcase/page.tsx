"use client";

import { useEffect } from "react";

export default function Showcase3D() {
  useEffect(() => {
    const threeScript = document.createElement("script");

    threeScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

    document.body.appendChild(threeScript);

    threeScript.onload = () => {
      const orbitScript = document.createElement("script");

      orbitScript.src =
        "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js";

      document.body.appendChild(orbitScript);

      orbitScript.onload = () => {
        const script = document.createElement("script");

        script.innerHTML = `

let scene, camera, renderer, controls;
let cube;
let autoRotate = true;

function init() {

  const container = document.getElementById("canvas-container");

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050816);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(4, 3, 6);

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(
    camera,
    renderer.domElement
  );

  controls.enableDamping = true;

  // LIGHTS

  const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.6
  );

  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(
    0x00ffff,
    2
  );

  directionalLight.position.set(5, 5, 5);

  scene.add(directionalLight);

  // FLOOR

  const grid = new THREE.GridHelper(
    20,
    20,
    0x00ffff,
    0x222222
  );

  scene.add(grid);

  // DEVICE BODY

  const geometry = new THREE.CylinderGeometry(
    1,
    1,
    2.5,
    8
  );

  const material = new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.9,
    roughness: 0.2
  });

  cube = new THREE.Mesh(
    geometry,
    material
  );

  scene.add(cube);

  // GLOW RING

  const ringGeometry = new THREE.TorusGeometry(
    1.05,
    0.04,
    16,
    100
  );

  const ringMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    emissive: 0x00ffff,
    emissiveIntensity: 2
  });

  const ring = new THREE.Mesh(
    ringGeometry,
    ringMaterial
  );

  ring.rotation.x = Math.PI / 2;

  cube.add(ring);

  // SENSOR

  const sensorGeometry = new THREE.SphereGeometry(
    0.2,
    32,
    32
  );

  const sensorMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    emissive: 0x00ffff,
    emissiveIntensity: 3
  });

  const sensor = new THREE.Mesh(
    sensorGeometry,
    sensorMaterial
  );

  sensor.position.y = -1.5;

  cube.add(sensor);

  // SOLAR PANEL

  const solarGeometry = new THREE.BoxGeometry(
    1.5,
    0.1,
    1
  );

  const solarMaterial = new THREE.MeshStandardMaterial({
    color: 0x001122,
    emissive: 0x003366,
    metalness: 1
  });

  const solar = new THREE.Mesh(
    solarGeometry,
    solarMaterial
  );

  solar.position.y = 1.4;

  solar.rotation.x = 0.2;

  cube.add(solar);

  // RESIZE

  window.addEventListener("resize", onResize);
}

function onResize() {

  camera.aspect =
    window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );
}

function animate() {

  requestAnimationFrame(animate);

  if (autoRotate && cube) {
    cube.rotation.y += 0.005;
  }

  controls.update();

  renderer.render(scene, camera);
}

window.toggleRotation = function () {
  autoRotate = !autoRotate;

  const btn =
    document.getElementById("rotate-btn");

  btn.innerHTML = autoRotate
    ? "AUTO ROTATION : ON"
    : "AUTO ROTATION : OFF";
};

init();
animate();

        `;

        document.body.appendChild(script);
      };
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">

      <div id="canvas-container"></div>

      {/* HUD */}

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">

        {/* TITLE */}

        <div className="absolute top-5 left-5 pointer-events-auto">

          <h1 className="text-cyan-400 text-5xl font-bold tracking-widest">
            AERO-FLOOD v4.2
          </h1>

          <p className="text-cyan-200 mt-2 tracking-wide">
            SMART CITY IoT FLOOD MONITORING DEVICE
          </p>

        </div>

        {/* CONTROL PANEL */}

        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-[320px] bg-black/60 border border-cyan-400 rounded-xl p-5 backdrop-blur-md pointer-events-auto shadow-[0_0_30px_rgba(0,255,255,0.3)]">

          <h2 className="text-cyan-400 text-xl font-bold mb-5">
            DEVICE TELEMETRY
          </h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>ESP32 STATUS</span>
              <span className="text-green-400">
                ONLINE
              </span>
            </div>

            <div className="flex justify-between">
              <span>WATER LEVEL</span>
              <span className="text-cyan-400">
                12.4 CM
              </span>
            </div>

            <div className="flex justify-between">
              <span>RAIN SENSOR</span>
              <span className="text-cyan-400">
                ACTIVE
              </span>
            </div>

            <div className="flex justify-between">
              <span>SOLAR OUTPUT</span>
              <span className="text-cyan-400">
                4.2 W
              </span>
            </div>

          </div>

          <button
            id="rotate-btn"
            onClick={() => {
              // @ts-ignore
              window.toggleRotation();
            }}
            className="mt-6 w-full border border-cyan-400 py-3 rounded-lg text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            AUTO ROTATION : ON
          </button>

        </div>

        {/* FOOTER */}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-cyan-300 text-sm tracking-wider">
          DRAG TO ROTATE • SCROLL TO ZOOM • 360° INTERACTIVE VIEW
        </div>

      </div>

    </div>
  );
}