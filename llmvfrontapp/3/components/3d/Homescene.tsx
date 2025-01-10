import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import * as THREE from "three";

const Homescene = () => {
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={(gl) => {
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          1000
        );
        camera.position.z = 5;

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        let animationFrameId: number;

        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };

        animate();

        // Cleanup resources when component unmounts
        return () => {
          cancelAnimationFrame(animationFrameId);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
        };
      }}
    />
  );
};

export default Homescene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
