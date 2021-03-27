const apito = new Audio('assets/apito.mp3')
var ponto_1 = 0;
var ponto_2 = 0;
const pontua = () => {
  apito.play()
  document.getElementById("placar").setAttribute('value',"PLACAR\n"+ ponto_1+" X "+ponto_2)

}


AFRAME.registerComponent("ponto", {
    schema: {
        maxZ: {type:'number',default:18.5},
        minZ: {type:'number',default:-18.5},
    },
    tick: function() {
      const {x,y,z} = this.el.object3D.position
      const {maxZ,minZ} = this.data
      if( z >= maxZ ) { 
        this.el.setAttribute('position', {x: 0, y: 1.1, z: 0});
        ponto_1++;
        pontua() 

      }
      if(z <= minZ){
        this.el.setAttribute('position', {x: 0, y: 1.1, z: 0});
        ponto_2++;
        pontua()
        
      }
    }
})


