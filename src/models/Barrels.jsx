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

// https://discourse.threejs.org/t/how-to-create-ground-and-sky-with-gradient-color-and-extend-indefinitely/48563/3

const Barrels = ({ isRotating, setIsRotating, ...props}) => {

  const barrelsRef = useRef();
  const cameraRef = useRef();

  const { gl, viewport, camera } = useThree();
  const { nodes, materials } = useGLTF(barrelScene)

  const lastPosition = useRef({ x: 0, y: 0 });
  const rotationSpeed = useRef({ x: 0, y: 0, z: 0 });
  const dampingFactor = 0.95;

  const panSpeed = 10;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    // Determine if client is mobile or computer
    const clientX = e.touches 
    ? e.touches[0].clientX 
    : e.clientX;

    const clientY = e.touches 
    ? e.touches[0].clientY 
    : e.clientY;

    lastPosition.current = { x:clientX, y:clientY };
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {            
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const deltaX = (clientX - lastPosition.current.x) / viewport.width;
        const deltaY = (clientY - lastPosition.current.y) / viewport.height;

        barrelsRef.current.rotation.y += deltaX * 0.01 * Math.PI;
        barrelsRef.current.rotation.x += deltaY * 0.01 * Math.PI;

        lastPosition.current = { x: clientX, y: clientY };

        rotationSpeed.current = { x: deltaY * 0.01 * Math.PI, y: deltaX * 0.01 * Math.PI, z: 0 };
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
        camera.position.x += panSpeed
    } else if(e.key === 'ArrowRight') {
        camera.position.x -= panSpeed
    } else if(e.key === 'ArrowDown') {
        camera.position.z += panSpeed
    } else if(e.key === 'ArrowUp') {
        camera.position.z -= panSpeed
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating) {
        rotationSpeed.current.x *= dampingFactor;
        rotationSpeed.current.y *= dampingFactor;
        rotationSpeed.current.z *= dampingFactor;

        barrelsRef.current.rotation.x += rotationSpeed.current.x;
        barrelsRef.current.rotation.y += rotationSpeed.current.y;
        barrelsRef.current.rotation.z += rotationSpeed.current.z;

        if (Math.abs(rotationSpeed.current.x) < 0.001) rotationSpeed.current.x = 0;
        if (Math.abs(rotationSpeed.current.y) < 0.001) rotationSpeed.current.y = 0;
        if (Math.abs(rotationSpeed.current.z) < 0.001) rotationSpeed.current.z = 0;

    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={barrelsRef} {...props}>
        <mesh         
          geometry={nodes.Cylinder_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh          
          geometry={nodes.Cylinder001_Material_0.geometry}
          material={materials.Material}
          position={[143.309, 24.997, -242.881]}
          rotation={[-1.253, 0, 0]}
          scale={100}
        />
        <mesh         
          geometry={nodes.Cylinder002_Material_0.geometry}
          material={materials.Material}
          position={[259.46, 0, 13.197]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh          
          geometry={nodes.Cylinder003_Material_0.geometry}
          material={materials.Material}
          position={[455.839, -75.364, -169.858]}
          rotation={[0, 0.367, 0]}
          scale={100}
        />
    </a.group>
  )
}

useGLTF.preload('/barrels.glb')

export default Barrels