const container = document.getElementById('container')

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,0.1,1000)


var  renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
})
renderer.setSize(window.innerWidth,window.innerHeight)
container.appendChild(renderer.domElement)

var planeGeometry=new THREE.PlaneGeometry(5,3,200,120)
var flagMat= new THREE.MeshBasicMaterial({color:'red', wireframe:true})
var flag =new THREE.Mesh(planeGeometry,flagMat)

scene.add(flag)
flag.rotation.set(-0.1,0,0)

camera.position.z=4;

const clock= new THREE.Clock()

function animate(){
    const time = clock.getElapsedTime()

    flag.geometry.vertices.map(v=>{
        v.z = 0.5 * Math.sin(v.x*2+time)
    })
    flag.geometry.verticesNeedUpdate=true

    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
animate()