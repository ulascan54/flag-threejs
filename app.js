const container = document.getElementById('container')

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75,container.clientWidth / container.clientHeight,0.1,1000)
const loader = new THREE.TextureLoader()

var  renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
})
renderer.setSize(container.clientWidth,container.clientHeight)
container.appendChild(renderer.domElement)

var planeGeometry=new THREE.PlaneGeometry(5,3,300,180)
var flagMat= new THREE.MeshBasicMaterial({map: loader.load("t.jpeg")})
var flag =new THREE.Mesh(planeGeometry,flagMat)

scene.add(flag)

camera.position.set(-2,-0.1,5);
camera.lookAt(0,0,0)

const clock= new THREE.Clock()

function animate(){
    const time = clock.getElapsedTime()

    flag.geometry.vertices.map(v=>{
        const wavex1=0.75 * Math.sin(v.x*2+time*3)
        const wavex2=0.25 * Math.sin(v.x*3+time*2)
        const wavex3=0.1 * Math.sin(v.y+time*.2)
        const multi = (v.x + 2.5) / 5 

        v.z =( wavex1+wavex2+wavex3)*multi
    })
    flag.geometry.verticesNeedUpdate=true

    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
animate()

window.addEventListener('resize',()=>{
    camera.aspect=container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth,container.clientHeight)

})