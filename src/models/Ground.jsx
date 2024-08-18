import React from 'react'

let ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300).rotateX(-Math.PI * 0.5), new THREE.MeshBasicMaterial({color: new THREE.Color(0x442288).multiplyScalar(1.5)}));

const Ground = () => {
  return (
    <mesh>
        <primitive object={ground} />
    </mesh>
  )
}

export default Ground
