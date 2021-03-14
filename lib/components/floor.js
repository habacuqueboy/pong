// registra o componente e da um nome
AFRAME.registerComponent( 'floor' , {

    // quais os atributos do objeto
    schema: {
        width: {type: 'number', default: 20},
        height: {type: 'number', default: 10},
        depth: {type: 'number', default: 1},
        color: {type: 'color', default: '#AAA'}
    },

    // chamado na criação do objeto
    init: function () {
        // acesso aos atributos do objeto
        const data = this.data
        // forma do objeto
        this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth)
        // textura e cor do objeto
        this.material = new THREE.MeshStandardMaterial({color: data.color})
        // geometria + material
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        // aplica a mesh na cena
        this.el.setObject3D('mesh',this.mesh)
    },

    // chamado na remoção do objeto
    remove: function () {
        // remove a mesh da cena
        this.el.removeObject3D('mesh')
    }


})
