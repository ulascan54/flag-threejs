

const container = document.getElementById('container')

let scene = new THREE.Scene()

let camera = new THREE.PerspectiveCamera(80 , window.innerWidth / window.innerHeight,0.1,1000)

let  renderer = new THREE.WebGL1Renderer()

renderer.setSize(window.innerWidth,window.innerHeight)

container.appendChild(renderer.domElement)
