import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const BoxVisualization = ({ data }) => {
  if (!data.success || !data.data.length) return <p>Aucune donnée disponible</p>;
  
  const container = data.data[0];
  const boxes = container.boxes || [];

  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      
      {/* Conteneur */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[container.totalWidth || 1, container.totalHeight || 1, container.totalLength || 1]} />
        <meshStandardMaterial color="lightgray" wireframe />
      </mesh>
      
      {/* Boîtes */}
      {boxes.map((box, index) => (
        <mesh key={index} position={[box.position.x, box.position.y, box.position.z]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      ))}
    </Canvas>
  );
};

export default function BinPacking3DVis() {
  const jsonData = { //POST req to get this data in http://localhost:3000/api/v1/bin-packing-3d 'check swagger'
    "success": true,
    "data": [
      {
        "width": 0,
        "length": 0,
        "height": 0,
        "weight": 0,
        "totalWidth": 5,
        "totalHeight": 5,
        "totalLength": 5,
        "boxes": [
          {
            "index": 0,
            "position": {
              "x": 0,
              "y": 0,
              "z": 0
            }
          },
          {
            "index": 1,
            "position": {
              "x": 15,
              "y": 24,
              "z": 0
            }
          }
        ]
      }
    ]
  };
  
  return <BoxVisualization data={jsonData} />;
}
