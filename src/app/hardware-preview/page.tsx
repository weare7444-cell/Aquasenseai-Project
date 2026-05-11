"use client";

export default function HardwarePreview() {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <iframe
        className="w-full h-full border-0"
        srcDoc={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AERO-POLE IoT // Smart City Hardware Preview</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=JetBrains+Mono&display=swap');

        body {
            margin: 0;
            background: #050505;
            overflow: hidden;
            font-family: 'Inter', sans-serif;
            color: white;
        }

        #container {
            width: 100vw;
            height: 100vh;
        }

        .interface {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            padding: 40px;
            box-sizing: border-box;

            background:
            radial-gradient(circle at center,
            transparent 40%,
            rgba(0,0,0,0.4) 100%);
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .title h1 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 4px;
            color: #00f2ff;
            text-transform: uppercase;
        }

        .title p {
            margin: 5px 0;
            font-size: 10px;
            font-family: 'JetBrains Mono';
            opacity: 0.6;
            letter-spacing: 1px;
        }

        .stats-panel {
            background: rgba(20, 25, 30, 0.8);
            border-left: 3px solid #00f2ff;
            padding: 20px;
            width: 280px;
            pointer-events: auto;
            backdrop-filter: blur(10px);
        }

        .stat-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 12px;
            font-family: 'JetBrains Mono';
        }

        .stat-label {
            color: #888;
        }

        .stat-value {
            color: #00f2ff;
            font-weight: bold;
        }

        .controls {
            pointer-events: auto;
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        button {
            background: #111;
            border: 1px solid #333;
            color: white;

            padding: 8px 12px;
            font-size: 10px;

            cursor: pointer;
            transition: 0.3s;

            font-family: 'JetBrains Mono';
        }

        button:hover {
            border-color: #00f2ff;
            background: #1a1a1a;
        }

        button.active {
            background: #00f2ff;
            color: black;
            border-color: #00f2ff;
        }

        .footer {
            display: flex;
            justify-content: center;
            font-size: 10px;
            opacity: 0.4;
            letter-spacing: 2px;
        }

        @media(max-width:768px){

            .interface{
                padding:20px;
            }

            .header{
                flex-direction:column;
                gap:20px;
            }

            .stats-panel{
                width:100%;
            }

        }

    </style>
</head>

<body>

<div id="container"></div>

<div class="interface">

    <div class="header">

        <div class="title">
            <h1>AERO-POLE v2.0</h1>
            <p>URBAN DRAINAGE TELEMETRY SYSTEM // MODEL: AP-400X</p>
        </div>

        <div class="stats-panel">

            <div class="stat-line">
                <span class="stat-label">STATUS</span>
                <span class="stat-value" id="st-status">ONLINE</span>
            </div>

            <div class="stat-line">
                <span class="stat-label">WATER LVL</span>
                <span class="stat-value" id="st-level">0.42m</span>
            </div>

            <div class="stat-line">
                <span class="stat-label">PRECIP</span>
                <span class="stat-value" id="st-rain">0.0mm/h</span>
            </div>

            <div class="stat-line">
                <span class="stat-label">ESP32 TX</span>
                <span class="stat-value">5.8 GHz</span>
            </div>

            <div class="controls">
                <button onclick="setState('nominal')" id="btn-nom" class="active">NOMINAL</button>
                <button onclick="setState('alert')" id="btn-alt">STORM ALERT</button>
                <button onclick="setState('critical')" id="btn-crit">CRITICAL</button>
            </div>

        </div>

    </div>

    <div class="footer">
        HOLD LEFT CLICK TO ROTATE • SCROLL TO ZOOM • ISOMETRIC VIEW ACTIVE
    </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<script>

let scene, camera, renderer, controls, clock;
let sensorGlow, waterLevel;
let systemState = 'nominal';

function init() {

    scene = new THREE.Scene();

    clock = new THREE.Clock();

    camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(10, 8, 10);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.toneMapping = THREE.ReinhardToneMapping;

    document.getElementById('container')
        .appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(
        camera,
        renderer.domElement
    );

    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // LIGHTING

    const ambient = new THREE.AmbientLight(
        0xffffff,
        0.2
    );

    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(
        0x00f2ff,
        1.5
    );

    keyLight.position.set(5,10,5);

    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(
        0xffffff,
        0.5
    );

    rimLight.position.set(-5,2,-5);

    scene.add(rimLight);

    createUtilityPole();
    createIoTDevice();
    createEnvironment();

    window.addEventListener(
        'resize',
        onWindowResize,
        false
    );

    animate();
}

function createUtilityPole() {

    const poleGroup = new THREE.Group();

    const poleGeo = new THREE.CylinderGeometry(
        0.2,
        0.3,
        15,
        8
    );

    const poleMat =
    new THREE.MeshStandardMaterial({
        color:0x1a1a1a,
        roughness:0.3,
        metalness:0.8
    });

    const pole =
    new THREE.Mesh(poleGeo,poleMat);

    poleGroup.add(pole);

    const bracketGeo =
    new THREE.BoxGeometry(
        0.8,
        1.2,
        0.5
    );

    const bracketMat =
    new THREE.MeshStandardMaterial({
        color:0x222222,
        roughness:0.5
    });

    const bracket =
    new THREE.Mesh(
        bracketGeo,
        bracketMat
    );

    bracket.position.set(0,2,0.3);

    poleGroup.add(bracket);

    scene.add(poleGroup);
}

function createIoTDevice() {

    const device = new THREE.Group();

    device.position.set(0,2,0.7);

    const bodyGeo =
    new THREE.BoxGeometry(
        1,
        1.5,
        0.6
    );

    const bodyMat =
    new THREE.MeshStandardMaterial({
        color:0x0a0a0a,
        roughness:0.8
    });

    const body =
    new THREE.Mesh(bodyGeo,bodyMat);

    device.add(body);

    // SOLAR PANEL

    const solarGroup = new THREE.Group();

    const panelGeo =
    new THREE.BoxGeometry(
        1.4,
        0.05,
        1.2
    );

    const panelMat =
    new THREE.MeshStandardMaterial({
        color:0x050510,
        roughness:0.1,
        metalness:0.9
    });

    const panel =
    new THREE.Mesh(panelGeo,panelMat);

    const grid =
    new THREE.GridHelper(
        1.2,
        6,
        0x00f2ff,
        0x111111
    );

    grid.rotation.x = Math.PI / 2;
    grid.position.y = 0.03;

    solarGroup.add(panel,grid);

    solarGroup.position.set(0,0.85,0);

    solarGroup.rotation.x = -0.3;

    device.add(solarGroup);

    // SENSORS

    const sensorGeo =
    new THREE.CylinderGeometry(
        0.15,
        0.15,
        0.3,
        16
    );

    const sensorMat =
    new THREE.MeshStandardMaterial({
        color:0x333333,
        metalness:0.9
    });

    const s1 =
    new THREE.Mesh(sensorGeo,sensorMat);

    const s2 = s1.clone();

    s1.position.set(-0.25,-0.9,0);
    s2.position.set(0.25,-0.9,0);

    device.add(s1,s2);

    // GLOW

    const glowGeo =
    new THREE.CircleGeometry(0.12,16);

    const glowMat =
    new THREE.MeshBasicMaterial({
        color:0x00f2ff,
        transparent:true,
        opacity:0.8
    });

    sensorGlow =
    new THREE.Mesh(glowGeo,glowMat);

    sensorGlow.rotation.x = Math.PI / 2;

    sensorGlow.position.y = -1.06;

    s1.add(sensorGlow);

    s2.add(sensorGlow.clone());

    // RAIN SENSOR

    const rainGeo =
    new THREE.BoxGeometry(
        0.4,
        0.4,
        0.05
    );

    const rainMat =
    new THREE.MeshStandardMaterial({
        color:0x1a1a1a
    });

    const rainModule =
    new THREE.Mesh(rainGeo,rainMat);

    rainModule.position.set(0.5,0.2,0);

    rainModule.rotation.y = Math.PI / 2;

    device.add(rainModule);

    // ANTENNA

    const antBase =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.05,0.05,0.2),
        sensorMat
    );

    antBase.position.set(-0.3,0.8,-0.2);

    const antRod =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.01,0.02,1.2),
        bodyMat
    );

    antRod.position.set(-0.3,1.4,-0.2);

    device.add(antBase,antRod);

    // LED

    const ledGeo =
    new THREE.PlaneGeometry(0.6,0.05);

    const ledMat =
    new THREE.MeshBasicMaterial({
        color:0x00f2ff
    });

    const led =
    new THREE.Mesh(ledGeo,ledMat);

    led.position.set(0,0.5,0.31);

    device.add(led);

    scene.add(device);
}

function createEnvironment() {

    const floorGeo =
    new THREE.PlaneGeometry(20,20);

    const floorMat =
    new THREE.MeshStandardMaterial({
        color:0x080808,
        roughness:0.9
    });

    const floor =
    new THREE.Mesh(floorGeo,floorMat);

    floor.rotation.x = -Math.PI / 2;

    floor.position.y = -7.5;

    scene.add(floor);

    // WATER

    const waterGeo =
    new THREE.BoxGeometry(10,1,10);

    const waterMat =
    new THREE.MeshStandardMaterial({
        color:0x003344,
        transparent:true,
        opacity:0.6,
        metalness:0.9,
        roughness:0.1
    });

    waterLevel =
    new THREE.Mesh(waterGeo,waterMat);

    waterLevel.position.y = -7;

    scene.add(waterLevel);
}

function setState(state){

    systemState = state;

    const statusText =
    document.getElementById('st-status');

    const levelText =
    document.getElementById('st-level');

    const rainText =
    document.getElementById('st-rain');

    document
    .querySelectorAll('button')
    .forEach(b=>b.classList.remove('active'));

    if(state==='nominal'){

        statusText.innerText='ONLINE';
        statusText.style.color='#00f2ff';

        levelText.innerText='0.42m';

        rainText.innerText='0.0mm/h';

        document
        .getElementById('btn-nom')
        .classList.add('active');

        waterLevel.scale.y=1;

    }

    else if(state==='alert'){

        statusText.innerText='STORM WARNING';
        statusText.style.color='#ffaa00';

        levelText.innerText='1.85m';

        rainText.innerText='45.2mm/h';

        document
        .getElementById('btn-alt')
        .classList.add('active');

        waterLevel.scale.y=3;

    }

    else{

        statusText.innerText='CRITICAL EVAC';
        statusText.style.color='#ff0044';

        levelText.innerText='4.10m';

        rainText.innerText='120.8mm/h';

        document
        .getElementById('btn-crit')
        .classList.add('active');

        waterLevel.scale.y=6;

    }

}

function onWindowResize(){

    camera.aspect =
    window.innerWidth /
    window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

}

function animate(){

    requestAnimationFrame(animate);

    const t =
    clock.getElapsedTime();

    if(systemState==='nominal'){

        sensorGlow.material.opacity =
        0.4 + Math.sin(t*3)*0.4;

    }

    else if(systemState==='alert'){

        sensorGlow.material.opacity =
        0.5 + Math.sin(t*8)*0.5;

    }

    else{

        sensorGlow.material.opacity =
        0.5 + Math.sin(t*15)*0.5;

    }

    waterLevel.position.y =
    -7 + Math.sin(t*0.5)*0.1;

    controls.update();

    renderer.render(scene,camera);

}

init();

</script>

</body>
</html>
        `}
      />
    </div>
  );
}