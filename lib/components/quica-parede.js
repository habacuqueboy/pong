const audio = new Audio('assets/bounce.mp3')

const invertDirection = (el,cord) => {
  const vel = el.getAttribute('velocidade')
  const dir = vel[`d${cord}`]
  el.setAttribute('velocidade',`d${cord}`,dir*(-1))
  audio.play()
}

AFRAME.registerComponent("quica-parede", {
    dependencies: ['velocidade'],
    schema: {
        maxX: {type:'number',default:8.5},
        maxZ: {type:'number',default:18.5},
        minX: {type:'number',default:-8.5},
        minZ: {type:'number',default:-18.5},
    },
    tick: function() {
      const {x,y,z} = this.el.object3D.position
      const {maxX,maxZ,minX,minZ} = this.data
      if( x >= maxX || x <= minX ) { invertDirection(this.el,'X') }
      if( z >= maxZ || z <= minZ ) { invertDirection(this.el,'Z') }
    }
})


