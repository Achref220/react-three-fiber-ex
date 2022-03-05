import './App.scss';
import { Canvas } from 'react-three-fiber';
import SpinningMesh from './components/SpinningMesh';
import { OrbitControls, softShadows } from '@react-three/drei';


softShadows();





function App() {
  // postion={[x, y, z]}
  return (
    <>
      <h1 className='title'>Three js with react example</h1>
      <Canvas
        shadows
        camera={{ position: [-5, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadowmapSizeWidth={1024}
          shadowmapSizeHeight={1024}
          shadowcamerafar={50}
          shadowcameraleft={-10}
          shadowcameraright={10}
          shadowcameratop={10}
          
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' transparent opacity={0.3}/>
          </mesh>
        </group>
        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' speed={2}/>
        <SpinningMesh position={[-2, 1, -4]} color='pink' speed={6}/>
        <SpinningMesh position={[4, 1, -2]} color='pink' speed={6} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
