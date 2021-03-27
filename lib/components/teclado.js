AFRAME.registerComponent("teclado", {
    schema: {
        eX: {type:'number',default:0},
        dX: {type:'number',default:0},
        vX: {type:'number',default:0.1},
        maxX: {type:'number',default:6.5},
    },
    init: function() {
        window.addEventListener('keydown', this.keyDown(this.data) );
        window.addEventListener('keyup', this.keyUp(this.data) );
    },
    keyDown: (data) => (e) => {
       // esquerda A
       if( e.keyCode === 65 ) { data.eX = 1 } 
       // direita D
       else if( e.keyCode === 68 ) { data.dX = 1 } 
    },
    keyUp: (data) => (e) => {
       // esquerda A
       if( e.keyCode === 65 ) { data.eX = 0 } 
       // direita D
       else if( e.keyCode === 68 ) { data.dX = 0 } 
    },
    tick: function() {
      const {x,y,z} = this.el.object3D.position
      const {vX,dX,eX,maxX} = this.data
      let extra = 0
      if( x < maxX ) { extra += ( vX*dX ) } 
      if( x > -maxX ) { extra -= (vX*eX) } 
     this.el.object3D.position.set( x + extra , y , z ) 
    }
})
