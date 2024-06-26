import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 export function Iphone(props) {
  const { nodes, materials } = useGLTF("https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7")
  return (
    <group {...props} dispose={null}>
      <group position={[0.043, -1.857, -0.052]} scale={0.708}>
        <group
          position={[0.016, 3.969, 0.074]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-1.18, 1.18, 1.216]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.Side_Rails}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.Side_Rails}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.Side_Rails}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Side_Rails}
          position={[-0.133, 4.386, -0.112]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.256, 0.25, 0.256]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Camera_Lens}
          position={[-0.261, 4.387, -0.112]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.204, 0.037, 0.204]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Lens_Rim}
          position={[-0.261, 4.387, -0.112]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.226, 0.127, 0.226]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Lens_Interior}
          position={[-0.261, 4.387, -0.112]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.226, 0.127, 0.226]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Side_Rails}
          position={[-0.133, 4.68, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.256, 0.25, 0.256]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Lens_Interior}
          position={[-0.261, 4.681, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.147, 0.082, 0.147]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Camera_Lens}
          position={[-0.261, 4.681, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.204, 0.037, 0.204]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Lens_Rim}
          position={[-0.261, 4.681, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.226, 0.127, 0.226]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Side_Rails}
          position={[-0.133, 4.088, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.256, 0.25, 0.256]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Lens_Interior}
          position={[-0.261, 4.089, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.2, 0.112, 0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Camera_Lens}
          position={[-0.261, 4.089, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.204, 0.037, 0.204]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Lens_Rim}
          position={[-0.261, 4.089, -0.667]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.226, 0.127, 0.226]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Side_Rails}
          position={[0.011, 3.519, -1.152]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={[-0.15, 0.15, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Side_Rails}
          position={[0.017, 3.617, 1.299]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={[0.15, 0.15, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Side_Rails}
          position={[0.017, 3.142, 1.299]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={[0.15, 0.15, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Back_Glass}
          position={[-0.09, 3.961, 0.074]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.29, 1.17, 1.206]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Screen}
          position={[0.11, 3.961, 0.074]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.29, 1.17, 1.206]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Camera_Glass}
          position={[-0.169, 4.39, -0.395]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.571, 0.681, 0.571]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.LiDAR_Sensor}
          position={[-0.203, 3.948, -0.122]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.109, 0.174, 0.109]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.Flash}
          position={[-0.203, 4.81, -0.122]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.082, 0.132, 0.082]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.Camera_Mic}
          position={[-0.198, 4.05, 0.075]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.02, 0.032, 0.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.Side_Rails}
          position={[0.04, 4.059, 1.285]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={[0.067, 0.054, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Side_Rails}
          position={[-0.127, 2.657, 0.089]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.Shadows}
          position={[0, 2.25, 1.283]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.099, 0.247, 0.308]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.Back_Glass}
          position={[0.011, 2.127, -1.124]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={[-0.15, 0.158, 0.134]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Charging_Port_Plating}
          position={[0.021, 0.111, 0.073]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-0.093, 0.143, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.Screws}
          position={[0.02, 0.097, 0.293]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.024, 0.024, 0.024]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.Screws}
          position={[0.02, 0.096, -0.177]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.024, 0.024, 0.024]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.Shadows}
          position={[0, 0.106, -0.482]}
          scale={[0.081, 1, 0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.Shadows}
          position={[0, 0.106, 0.547]}
          scale={[0.081, 1, 0.185]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.Back_Glass}
          position={[0.009, 4.615, 1.228]}
          scale={[0.12, 0.018, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.Back_Glass}
          position={[0.009, 0.656, 1.228]}
          scale={[0.12, 0.018, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.Back_Glass}
          position={[0.009, 4.615, -1.082]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.12, 0.018, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.Back_Glass}
          position={[0.009, 0.657, -1.082]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.12, 0.018, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.Back_Glass}
          position={[0.009, 5.087, -0.63]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-0.12, 0.018, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_78.geometry}
          material={materials.Back_Glass}
          position={[0.009, 0.157, 0.801]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[-0.12, 0.018, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials.Shadows}
          position={[0.117, 4.856, 0.103]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.279, 0.279, 0.272]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_82.geometry}
          material={materials.Lens_Interior}
          position={[0.123, 4.968, 0.406]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.039, 0.022, 0.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_84.geometry}
          material={materials.Lens_Rim}
          position={[0.124, 4.968, 0.407]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.05, 0.028, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_86.geometry}
          material={materials.Camera_Lens}
          position={[0.126, 4.968, 0.409]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[-0.048, 0.014, 0.048]}
        />
      </group>
    </group>
  )
}

export default Iphone;

useGLTF.preload("https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7")
