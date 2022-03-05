import { a, useSpring } from '@react-spring/three';
import { MeshWobbleMaterial } from '@react-three/drei';
import React, { useRef, useState } from 'react'

import { useFrame } from 'react-three-fiber';



const SpinningMesh = ({position, args, color, speed}) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const [expand, setExpand] = useState(false);
  const pbox = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
  })
  return (
    <a.mesh onClick={() => setExpand(!expand)} scale={pbox.scale} castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        attach='material'
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  )
}

export default SpinningMesh