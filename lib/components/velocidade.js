AFRAME.registerComponent("velocidade", {
    schema: {
        vX: {type:'number',default:0.3},
        vZ: {type:'number',default:0.3},
        dX: {type:'number',default:1},
        dZ: {type:'number',default:1},
    },
    tick: function() {
      const {x,y,z} = this.el.object3D.position
      const {vX,vZ,dX,dZ} = this.data
      this.el.object3D.position.set( x+(vX*dX) , y , z+(vZ*dZ) )
    }
})
