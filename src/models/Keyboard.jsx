/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ForevereQ (https://sketchfab.com/ForevereQ)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/barrels-e855c7e941bf42ddaf39c78ab8534ce9
Title: barrel's
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import barrelScene from '../assets/3d/barrels.glb'
import keyboardScene from '../assets/3d/mini_gaming_keyboard_cartoon.glb'

// https://discourse.threejs.org/t/how-to-create-ground-and-sky-with-gradient-color-and-extend-indefinitely/48563/3

const Keyboard = ({ isRotating, setIsRotating, ...props}) => {

  const keyboardRef = useRef();

  const { nodes, materials } = useGLTF(keyboardScene)

  return (
    <a.group ref={keyboardRef} {...props}>
        <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="e7432fde032846dfacc03e6c51fa669bfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube"
                  position={[0, 76.69, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={199.108}>
                  <mesh
                    name="Cube_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Material_0.geometry}
                    material={materials.Material}
                  />
                  <mesh
                    name="Cube_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Cube001"
                  position={[0, 76.69, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={191.44}>
                  <mesh
                    name="Cube001_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Key_W"
                  position={[0, 19.663, -100]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={43.604}>
                  <mesh
                    name="Key_W_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_W_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="Key_W_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_W_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                  <mesh
                    name="Key_W_Material007_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_W_Material007_0.geometry}
                    material={materials['Material.007']}
                  />
                </group>
                <group
                  name="Key_E"
                  position={[100, 43.283, -100]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={43.604}>
                  <mesh
                    name="Key_E_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_E_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="Key_E_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_E_Material003_0.geometry}
                    material={materials['Material.003']}
                  />
                  <mesh
                    name="Key_E_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_E_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Key_Q"
                  position={[-100, 42.691, -100]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={43.604}>
                  <mesh
                    name="Key_Q_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_Q_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="Key_Q_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_Q_Material003_0.geometry}
                    material={materials['Material.003']}
                  />
                  <mesh
                    name="Key_Q_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_Q_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Key_A"
                  position={[-100, 42.691, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={43.604}>
                  <mesh
                    name="Key_A_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_A_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="Key_A_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_A_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                  <mesh
                    name="Key_A_Material007_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_A_Material007_0.geometry}
                    material={materials['Material.007']}
                  />
                </group>
                <group
                  name="Key_S"
                  position={[0, 42.691, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={43.604}>
                  <mesh
                    name="Key_S_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_S_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="Key_S_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_S_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                  <mesh
                    name="Key_S_Material007_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_S_Material007_0.geometry}
                    material={materials['Material.007']}
                  />
                </group>
                <group
                  name="Key_D"
                  position={[100, 42.691, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={43.604}>
                  <mesh
                    name="Key_D_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_D_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="Key_D_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_D_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                  <mesh
                    name="Key_D_Material007_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_D_Material007_0.geometry}
                    material={materials['Material.007']}
                  />
                </group>
                <group
                  name="Key_Space"
                  position={[0, 48.827, 90.433]}
                  rotation={[-1.484, 0, 0]}
                  scale={[70.1, 43.604, 43.604]}>
                  <mesh
                    name="Key_Space_Material004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_Space_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="Key_Space_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_Space_Material003_0.geometry}
                    material={materials['Material.003']}
                  />
                  <mesh
                    name="Key_Space_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Key_Space_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Cylinder"
                  position={[-213.245, -44.286, 0]}
                  rotation={[-1.56, -1.371, 0]}
                  scale={22.273}>
                  <mesh
                    name="Cylinder_Material010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material010_0.geometry}
                    material={materials['Material.010']}
                  />
                  <mesh
                    name="Cylinder_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                  <mesh
                    name="Cylinder_Material005_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material005_0.geometry}
                    material={materials['Material.005']}
                  />
                </group>
                <group
                  name="Area"
                  position={[593.146, 595.767, 424.785]}
                  rotation={[0.446, -0.157, -0.666]}
                  scale={100}>
                  <group name="Object_42" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_43" />
                  </group>
                </group>
                <group
                  name="Area001"
                  position={[-395.277, 506.824, 263.836]}
                  rotation={[0.379, -0.156, 0.656]}
                  scale={100}>
                  <group name="Object_45" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_46" />
                  </group>
                </group>
                <group
                  name="Area002"
                  position={[280.295, 811.145, 854.038]}
                  rotation={[0.732, -0.095, -0.314]}
                  scale={100}>
                  <group name="Object_48" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_49" />
                  </group>
                </group>
                <group
                  name="Cylinder002"
                  position={[0, -44.236, -191.389]}
                  rotation={[-2.938, 0, 0]}
                  scale={16.927}>
                  <mesh
                    name="Cylinder002_Material010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_Material010_0.geometry}
                    material={materials['Material.010']}
                  />
                  <mesh
                    name="Cylinder002_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="BezierCurve"
                  position={[0, -44.236, -291.389]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}>
                  <mesh
                    name="BezierCurve_Material010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve_Material010_0.geometry}
                    material={materials['Material.010']}
                  />
                  <mesh
                    name="BezierCurve_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Cylinder003"
                  position={[-311.152, -103.888, -383.892]}
                  rotation={[-0.239, -1.163, 2.968]}
                  scale={18.086}>
                  <mesh
                    name="Cylinder003_Material010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_Material010_0.geometry}
                    material={materials['Material.010']}
                  />
                  <mesh
                    name="Cylinder003_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Cube009"
                  position={[-334.537, -101.494, -374.086]}
                  rotation={[-0.239, -1.163, 2.968]}
                  scale={15.147}>
                  <mesh
                    name="Cube009_Material010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009_Material010_0.geometry}
                    material={materials['Material.010']}
                  />
                  <mesh
                    name="Cube009_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009_Material006_0.geometry}
                    material={materials['Material.006']}
                  />
                </group>
                <group
                  name="Cube010"
                  position={[-421.355, -92.607, -337.682]}
                  rotation={[-0.239, -1.163, 2.968]}
                  scale={11.428}>
                  <mesh
                    name="Cube010_Material012_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010_Material012_0.geometry}
                    material={materials['Material.012']}
                  />
                </group>
                <group
                  name="Cube011"
                  position={[-411.882, -93.577, -341.654]}
                  rotation={[-0.239, -1.163, 2.968]}
                  scale={15.147}>
                  <mesh
                    name="Cube011_Material013_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011_Material013_0.geometry}
                    material={materials['Material.013']}
                  />
                  <mesh
                    name="Cube011_Material014_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011_Material014_0.geometry}
                    material={materials['Material.014']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

useGLTF.preload('../assets/3d/mini_gaming_keyboard_cartoon.glbe.gltf')

export default Keyboard