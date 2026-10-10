'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TECH_NODES = [
  { name: 'GPT-4o Realtime', color: 0x10b981 },
  { name: 'Twilio SIP Voice', color: 0x06b6d4 },
  { name: 'Next.js 16 Edge', color: 0x2563eb },
  { name: 'n8n Automations', color: 0x7c3aed },
  { name: 'PostgreSQL DB', color: 0x3b82f6 },
  { name: 'Whisper STT', color: 0x6366f1 },
  { name: 'Docker / Cloud', color: 0x0ea5e9 },
  { name: 'Meta WhatsApp API', color: 0x14b8a6 },
  { name: 'FastAPI Python', color: 0x8b5cf6 },
  { name: 'Redis Broker', color: 0xf43f5e }
];

export default function Interactive3DTechMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let canvas: HTMLCanvasElement;
    try {
      canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const matrixGroup = new THREE.Group();
    scene.add(matrixGroup);

    // Central Wireframe Cyber Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(3.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    matrixGroup.add(coreMesh);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.6, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.25
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    matrixGroup.add(innerMesh);

    // Orbiting 3D Tech Nodes around Fibonacci sphere points
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeCount = TECH_NODES.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    const nodePositions: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      const r = 5.6; // orbital radius
      const x = Math.cos(theta) * radius * r;
      const z = Math.sin(theta) * radius * r;
      const yPos = y * r;

      const pos = new THREE.Vector3(x, yPos, z);
      nodePositions.push(pos);

      // Node Mesh (Octahedron / Box / Tetrahedron)
      const geom = i % 2 === 0 ? new THREE.OctahedronGeometry(0.55) : new THREE.BoxGeometry(0.65, 0.65, 0.65);
      const mat = new THREE.MeshBasicMaterial({
        color: TECH_NODES[i].color,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.copy(pos);
      matrixGroup.add(mesh);
      nodeMeshes.push(mesh);

      // Inner glowing core dot
      const dotGeo = new THREE.SphereGeometry(0.2, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({ color: TECH_NODES[i].color });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      mesh.add(dot);
    }

    // Connect nodes with 3D glowing network constellation lines
    const linePoints: THREE.Vector3[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 6.8) {
          linePoints.push(nodePositions[i], nodePositions[j]);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.25
    });
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    matrixGroup.add(networkLines);

    // Floating 3D Sparkle particles
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 15;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.12,
      transparent: true,
      opacity: 0.5
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    matrixGroup.add(particles);

    // Mouse / Touch Drag Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetRotationY = x * 0.2;
        return;
      }
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      matrixGroup.rotation.y += deltaX * 0.007;
      matrixGroup.rotation.x += deltaY * 0.005;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w && h) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.012;

      // Constant gentle rotation
      if (!isDragging) {
        matrixGroup.rotation.y += 0.003;
        matrixGroup.rotation.x += 0.001;
      }

      // Rotate individual nodes
      nodeMeshes.forEach((mesh, idx) => {
        mesh.rotation.x += 0.015;
        mesh.rotation.y += 0.015;
        const scale = 1 + Math.sin(clock * 2 + idx) * 0.08;
        mesh.scale.set(scale, scale, scale);
      });

      // Pulse core
      const coreScale = 1 + Math.sin(clock * 2) * 0.05;
      coreMesh.scale.set(coreScale, coreScale, coreScale);
      coreMesh.rotation.z -= 0.002;

      particles.rotation.y -= 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-72 sm:h-88 rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 shadow-xl mb-12 select-none">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* 3D Matrix Badge */}
      <div className="absolute top-4 left-5 flex items-center gap-2 text-[10px] font-mono text-cyan-300 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>THREE.JS 3D CONSTELLATION MATRIX • DRAG 360°</span>
      </div>

      <div className="absolute bottom-4 right-5 text-[10px] font-mono text-slate-400 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 pointer-events-none hidden sm:block">
        Interconnected Cloud &amp; AI Stack
      </div>
    </div>
  );
}
