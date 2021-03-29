const audioQuicaPlayer = new Audio('assets/bounce.mp3')

const invertDirectionQuicaPlayer = (el,cord) => {
  el.setAttribute('velocidade',`dZ`,-1)
  audioQuicaPlayer.play()
}

AFRAME.registerComponent("quica-player", {
    dependencies: ['velocidade'],
    schema: {
        tamPlayerX: {type:'number',default:4},
        tamPlayerZ: {type:'number',default:1},
        raio: {type:'number',default:0.5},
    },
    tick: function() {
        const {x,y,z} = this.el.object3D.position
        const pp = document.querySelector("#player").object3D.position

        const checkX1 = x-(this.data.raio+0.1) > pp.x+(this.data.tamPlayerX/2.0)   
        const checkX2 = x+(this.data.raio+0.1) < pp.x-(this.data.tamPlayerX/2.0)   

        const checkZ1 = z-(this.data.raio+0.1) > pp.z+(this.data.tamPlayerZ/2.0)   
        const checkZ2 = z+(this.data.raio+0.1) < pp.z-(this.data.tamPlayerZ/2.0)   

        const checkX = ( checkX1 || checkX2 )
        const checkZ = ( checkZ1 || checkZ2 )

        if( !checkX && !checkZ ) { invertDirectionQuicaPlayer(this.el) }
    },
})
