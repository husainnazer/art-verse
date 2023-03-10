import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'art-verse/styles/Home.module.css'
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "../components/Cylinder3d";

export default function Home() {
  return (
    <>
      <Head>
        <title>ArtVerse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="App-header">
          {/* Canvas 1 */}
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <ambientLight />
            <Cylinder3d position={[-1.2, 0, 0]} />
            <Cylinder3d position={[1.2, 0, 0]} />
          </Canvas>

          {/* Canvas 2 */}
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.5} />
            <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
            <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
          </Canvas>

          {/* Canvas 3 */}
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <ambientLight color={"red"} />
            <Cylinder3d position={[-1.2, 0, 0]} />
            <Cylinder3d position={[1.2, 0, 0]} />
          </Canvas>
        </section>
      </main>
    </>
  );
}
