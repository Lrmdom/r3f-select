/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 pvc window.glb 
*/

import React, { useRef, useState } from 'react'
import { useGLTF, useCursor, useSelect, Edges } from '@react-three/drei'
import { useControls, FirstLevaControl } from './FirstLevaControl'
export function Pvcw(props) {
  const { nodes, materials } = useGLTF('/pvc window.glb')
  const [shiny, setShiny] = useState(false)
  const [hovered, setHover] = useState(false)
  const selected = useSelect().map((sel) => sel.userData.store)
  const [store, materialProps] = useControls(selected, FirstLevaControl)
  debugger
  const isSelected = !!selected.find((sel) => sel === store)

  useCursor(hovered)
  return (
    <group {...props} dispose={null} name='groupG0'>
      {/* <PerspectiveCamera name='camera' fov={40} near={10} far={1000} position={[10, 0, 50]} />
      <pointLight intensity={10} position={[100, 50, 100]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <group position={[0, 0.304, 0]} rotation={[Math.PI, 0, Math.PI]} scale={0.025} name='groupG2'>
        <group position={[11.015, 0, 1.418]} name='groupG1'>
          <group position={[-20.248, -1.6, 1.72]} rotation={[Math.PI / 2, 0, 0]} name='groupG'>
            <mesh
              userData={{ store }}
              name='g2'
              geometry={nodes.Grip_01.geometry}
              material={nodes.Grip_01.material}
              position={[0.02, -0.937, -2.432]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              onPointerEnter={() => setShiny(true)}
              onPointerLeave={() => setShiny(false)}
              onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
              onPointerOut={(e) => setHover(false)}
            >
              <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
                <meshBasicMaterial transparent color='#333' depthTest={false} />
              </Edges>
              <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
            </mesh>
            <mesh
              userData={{ store }}
              name='g1'
              geometry={nodes.Grip_02.geometry}
              material={nodes.Grip_02.material}
              onPointerEnter={() => setShiny(true)}
              onPointerLeave={() => setShiny(false)}
            >
              <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
                <meshBasicMaterial transparent color='#333' depthTest={false} />
              </Edges>
              <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
            </mesh>
          </group>
          <mesh
            //userData={{ store }}
            geometry={nodes.Frame_02_2.geometry}
            material={nodes.Frame_02_2.material}
            position={[-11.015, 0, -0.93]}
            name='groupt1'
           /*  onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)} */
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Fused_Gaskets_01.geometry}
            material={nodes.Fused_Gaskets_01.material}
            position={[-11.023, -0.005, -1.7]}
            name='groupt2'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Fused_Gaskets_02.geometry}
            material={nodes.Fused_Gaskets_02.material}
            position={[-11.023, -0.005, -0.373]}
            name='groupt3'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Fused_Gaskets_03.geometry}
            material={nodes.Fused_Gaskets_03.material}
            position={[-11.015, 0, -0.314]}
            rotation={[Math.PI, 0, Math.PI]}
            name='groupt4'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Hinge_01.geometry}
            material={nodes.Hinge_01.material}
            position={[0.001, 8.533, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            name='groupt5'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Hinge_02.geometry}
            material={nodes.Hinge_02.material}
            position={[0.001, -8.523, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            name='groupt6'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Lock_01_1.geometry}
            material={nodes.Lock_01_1.material}
            position={[-20.323, -6.779, -1.198]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            name='groupt7'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Lock_01_2.geometry}
            material={nodes.Lock_01_2.material}
            position={[-20.249, -6.608, -1.197]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            name='groupt8'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Lock_02_1.geometry}
            material={nodes.Lock_02_1.material}
            position={[-20.323, 6.433, -1.198]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            name='groupt9'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Lock_02_2.geometry}
            material={nodes.Lock_02_2.material}
            position={[-20.249, 6.604, -1.197]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            name='groupt10'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            userData={{ store }}
            geometry={nodes.Lock_03.geometry}
            material={nodes.Lock_03.material}
            position={[-10.835, -0.882, -13.451]}
            rotation={[0, 0, -Math.PI]}
            name='groupt11'
            onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)}
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
           // userData={{ store }}
            geometry={nodes.Objekt_01.geometry}
            material={nodes.Objekt_01.material}
            position={[-11.012, 0.001, -1.243]}
            name='groupt12'
            /* onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)} */
          >
            {/* <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} /> */}
          </mesh>
          <mesh
            //userData={{ store }}
            geometry={nodes.Objekt_02.geometry}
            material={nodes.Objekt_02.material}
            position={[-11.012, 0.001, -0.729]}
            name='groupt13'
            /* onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)} */
          >
            {/* <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} /> */}
          </mesh>
          <mesh
            //userData={{ store }}
            geometry={nodes.Thermal_Glass_01.geometry}
            material={nodes.Thermal_Glass_01.material}
            position={[-11.011, 0.006, -1.5]}
            name='groupt14'
            /* onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)} */
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            //userData={{ store }}
            geometry={nodes.Thermal_Glass_02.geometry}
            material={nodes.Thermal_Glass_02.material}
            position={[-11.011, 0.006, -0.987]}
            name='groupt15'
            /* onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)} */
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
          <mesh
            //userData={{ store }}
            geometry={nodes.Thermal_Glass_03.geometry}
            material={nodes.Thermal_Glass_03.material}
            position={[-11.011, 0.006, -0.471]}
            name='groupt16'
           /*  onPointerEnter={() => setShiny(true)}
            onPointerLeave={() => setShiny(false)} */
          >
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
              <meshBasicMaterial transparent color='#333' depthTest={false} />
            </Edges>
            <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
          </mesh>
        </group>
        <mesh
          //userData={{ store }}
          geometry={nodes.Frame_01_2.geometry}
          material={nodes.Frame_01_2.material}
          name='groupt1'
          /* onPointerEnter={() => setShiny(true)}
          onPointerLeave={() => setShiny(false)} */
        >
          <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
            <meshBasicMaterial transparent color='#333' depthTest={false} />
          </Edges>
          <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
        </mesh>
        <mesh
          //userData={{ store }}
          geometry={nodes.Fused_Gaskets_04.geometry}
          material={nodes.Fused_Gaskets_04.material}
          position={[0, 0.001, -0.71]}
          rotation={[-Math.PI, 0, -Math.PI]}
          name='groupt18'
          /* onPointerEnter={() => setShiny(true)}
          onPointerLeave={() => setShiny(false)} */
        >
          <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
            <meshBasicMaterial transparent color='#333' depthTest={false} />
          </Edges>
          <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
        </mesh>
        <mesh
          userData={{ store }}
          geometry={nodes.Lock_02.geometry}
          material={nodes.Lock_02.material}
          position={[-9.462, 6.604, 0.22]}
          rotation={[Math.PI / 2, 0, 0]}
          name='groupt19'
          onPointerEnter={() => setShiny(true)}
          onPointerLeave={() => setShiny(false)}
        >
          <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
            <meshBasicMaterial transparent color='#333' depthTest={false} />
          </Edges>
          <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
        </mesh>
        <mesh
          userData={{ store }}
          geometry={nodes.Lock_02_1_2.geometry}
          material={nodes.Lock_02_1_2.material}
          position={[-9.462, -6.608, 0.22]}
          rotation={[Math.PI / 2, 0, 0]}
          name='groupt20'
          onPointerEnter={() => setShiny(true)}
          onPointerLeave={() => setShiny(false)}
        >
          <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
            <meshBasicMaterial transparent color='#333' depthTest={false} />
          </Edges>
          <meshPhongMaterial color={shiny ? 0xff00ff : 0xffffff} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/pvc window.glb')
