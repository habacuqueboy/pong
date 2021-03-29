var vel_in = 0.2;
AFRAME.registerComponent("mov-inimigo", {
  
    
    tick: function() {
        const {x,y,z} = this.el.object3D.position
        const pp = document.querySelector("#bola").object3D.position
        console.log(pp)
        const maxX= 7.5
        const minX=-7.5
        if(pp.x<maxX&&pp.x>minX&&pp.z<1){
        if(x<pp.x){
        
       this.el.object3D.position.set( x+vel_in , y , z ) 
        }

        if(x>pp.x){
       this.el.object3D.position.set( x-vel_in , y , z ) 
        }
    }
      

}
})