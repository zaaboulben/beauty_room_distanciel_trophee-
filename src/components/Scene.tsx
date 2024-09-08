"use client";
import {
  AccumulativeShadows,
  Environment,
  EnvironmentMap,
  Html,
  Instance,
  Line,
  OrbitControls,
  useProgress
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CatmullRomCurve3, Euler, Vector3 } from "three";
import { Suspense, useMemo } from "react";
import { div } from "three/webgpu";
import Light from "./Light";
import SimpleCamearaMouvement from "./SimpleCameraMouvement";
import Model from "./Model";

export default function Scene() {
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
      <Html center>
        <div className="w-full h-full ">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only text-white">
              {" "}{progress} % loaded
            </span>
          </div>
          <div className="text-white text-lg text-center p-2">
            {progress} % loaded
          </div>
        </div>
      </Html>
    );
  }
  const eyeHeight = 2.8;

  // const points = useMemo(() => [
  //   // new Vector3(2.295, eyeHeight, -10),
  //   // new Vector3(2.295, eyeHeight-0.2, -5),
  //   new Vector3(2.295, eyeHeight + 1, -4),
  //   new Vector3(2.295, eyeHeight - 0.2, -3),
  //   new Vector3(2.295, eyeHeight - 0.25, -1.7),
  //   // new Vector3(2.295, eyeHeight - 0.3, -1.2)

  // ], [eyeHeight]);

  // const curve = useMemo(() => new CatmullRomCurve3(points, false, 'catmullrom', 0.5), [points]);

  // const mirrorPoints = useMemo(() => {
  //   return[
  //   new Vector3(2.29, eyeHeight , 4),
  //   new Vector3(2.29, eyeHeight , 3),
  //   new Vector3(2.29, eyeHeight , .0),]
  //   }, []);

  // const mirrorCurve = useMemo(() => new CatmullRomCurve3(mirrorPoints, false, 'catmullrom', 0.5), [mirrorPoints]);

  return (
    <Canvas
      shadows
      gl={{
        antialias: true,
        preserveDrawingBuffer: true
      }}
      dpr={[1, 2]}
      camera={{
        near: 0.1,
        far: 100,
        position: [2.295, eyeHeight + 1, -4]
      }}
    >
      <Suspense fallback={<Loader />}>
        {/* <Environment


          // files={[
          //     "/beautyroomenvmapv2/px.png",
          //     "/beautyroomenvmapv2/nx.png",
          //     "/beautyroomenvmapv2/py.png",
          //     "/beautyroomenvmapv2/ny.png",
          //     "/beautyroomenvmapv2/pz.png",
          //     "/beautyroomenvmapv2/nz.png",
          //     ]} 
          background={true}

          path="/beautyroomenvmapv2/"
          environmentIntensity={1}
        // ground={{
        //   height: 10,
        //   radius: 30,
        //   scale: 100
        // }}
        /> */}

        {/* <Line points={curve.getPoints(100)} color="blue" /> */}

        <Model
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
          //@ts-ignore
          duration={3.5}
        />
        <Light />

        <SimpleCamearaMouvement duration={4} eyeHeight={2.8} fov={75} />
        {/* <OrbitControls/> */}
      </Suspense>
    </Canvas>
  );
}