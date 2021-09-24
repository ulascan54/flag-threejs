const container = document.getElementById('container')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,0.1,1000)
camera.position.set(3,0,-3);
camera.lookAt(0,0,0);

const  renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
container.appendChild(renderer.domElement)

const planeGeometry=new THREE.PlaneGeometry(5,3,5,3)
const flagMat= new THREE.MeshBasicMaterial({color:'white',wireframe:true})
const flag =new THREE.Mesh(planeGeometry,flagMat)

scene.add(flag)

function animate(){
    renderer.render(scene,camera)
    requestAnimationFrame(animate)
}
animate()