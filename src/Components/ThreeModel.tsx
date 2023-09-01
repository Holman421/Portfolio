import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const ThreeModel = () => {
   const mountRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      // create a new scene
      const scene = new THREE.Scene();

      // create a new camera
      const camera = new THREE.PerspectiveCamera(
         75,
         mountRef.current?.clientWidth! / mountRef.current?.clientHeight!,
         0.1,
         1000
      );

      // create a new renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
         mountRef.current?.clientWidth!,
         mountRef.current?.clientHeight!
      );
      mountRef.current?.appendChild(renderer.domElement);

      // add lighting to the scene
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 0, 10);
      scene.add(light);

      // load the 3D model
      const loader = new GLTFLoader();
      loader.load("../Assets/Avatar/scene.gltf", (gltf) => {
         // set the position and rotation of the model
         gltf.scene.position.set(0, 0, 0);
         gltf.scene.rotation.set(0, Math.PI / 2, 0);

         // add the model to the scene
         scene.add(gltf.scene);
      });

      // set the initial camera position
      camera.position.z = 5;

      // animate the scene
      const animate = () => {
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
      };

      animate();

      // clean up the renderer when the component unmounts
      return () => {
         mountRef.current?.removeChild(renderer.domElement);
         renderer.dispose();
      };
   }, []);

   return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default ThreeModel;
