'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCoreProps {
  className?: string;
}

export default function Hero3DCore({ className = '' }: Hero3DCoreProps) {
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

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Iridescent AI Orb (Light Theme)
    // Outer wireframe sphere in vibrant sapphire blue
    const outerGeo = new THREE.IcosahedronGeometry(4.6, 3);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const outerSphere = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerSphere);

    // Inner iridescent core sphere in violet & cyan
    const innerGeo = new THREE.IcosahedronGeometry(2.8, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerSphere);

    // Center radiant core node
    const nucleusGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.75
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    mainGroup.add(nucleus);

    // 2. Holographic Orbital Rings
    const ringColors = [0x2563eb, 0x7c3aed, 0x06b6d4];
    const rings: THREE.Line[] = [];
    const ringRadii = [7.0, 8.8, 10.5];
    const ringRotations = [
      { x: Math.PI / 3.5, y: 0, z: Math.PI / 5 },
      { x: -Math.PI / 3, y: Math.PI / 4, z: 0 },
      { x: Math.PI / 5, y: -Math.PI / 3.5, z: Math.PI / 4 }
    ];

    ringRadii.forEach((radius, idx) => {
      const ringPoints: THREE.Vector3[] = [];
      const segments = 80;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        ringPoints.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
      const ringMat = new THREE.LineBasicMaterial({
        color: ringColors[idx],
        transparent: true,
        opacity: 0.45
      });
      const ring = new THREE.Line(ringGeo, ringMat);
      ring.rotation.set(ringRotations[idx].x, ringRotations[idx].y, ringRotations[idx].z);
      mainGroup.add(ring);
      rings.push(ring);
    });

    // 3. Orbiting Data Nodes (AI, Phone, Code, Cloud, CRM)
    const nodeCount = 14;
    const nodeGeos = [
      new THREE.BoxGeometry(0.75, 0.75, 0.75),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.65)
    ];
    const nodeMatBlue = new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true });
    const nodeMatViolet = new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true });
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true });

    const nodes: { mesh: THREE.Mesh; orbitRadius: number; speed: number; angle: number; yOffset: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const geom = nodeGeos[i % nodeGeos.length];
      const mat = i % 3 === 0 ? nodeMatBlue : i % 3 === 1 ? nodeMatViolet : nodeMatCyan;
      const mesh = new THREE.Mesh(geom, mat);
      const orbitRadius = 6.4 + (i % 3) * 1.9;
      const speed = 0.007 + (i % 4) * 0.003;
      const angle = (i / nodeCount) * Math.PI * 2;
      const yOffset = ((i % 5) - 2) * 1.3;

      mainGroup.add(mesh);
      nodes.push({ mesh, orbitRadius, speed, angle, yOffset });
    }

    // 4. Subtle Particle Field for Light Background
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 30;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.16,
      transparent: true,
      opacity: 0.5
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 5. Holographic Beacon Satellites with Mini Rings
    const beaconColors = [0x00f2fe, 0x7c3aed, 0x10b981, 0x3b82f6];
    const beacons: { mesh: THREE.Mesh; ring: THREE.Line; angle: number; radius: number; speed: number; y: number }[] = [];

    beaconColors.forEach((col, i) => {
      const bGeom = new THREE.SphereGeometry(0.4, 12, 12);
      const bMat = new THREE.MeshBasicMaterial({ color: col });
      const bMesh = new THREE.Mesh(bGeom, bMat);

      // Mini ring
      const bRingPts: THREE.Vector3[] = [];
      for (let j = 0; j <= 24; j++) {
        const th = (j / 24) * Math.PI * 2;
        bRingPts.push(new THREE.Vector3(Math.cos(th) * 0.7, 0, Math.sin(th) * 0.7));
      }
      const bRingGeo = new THREE.BufferGeometry().setFromPoints(bRingPts);
      const bRingMat = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.6 });
      const bRing = new THREE.Line(bRingGeo, bRingMat);
      bRing.rotation.x = Math.PI / 4;
      bMesh.add(bRing);

      mainGroup.add(bMesh);
      beacons.push({
        mesh: bMesh,
        ring: bRing,
        angle: (i / beaconColors.length) * Math.PI * 2,
        radius: 7.8 + (i % 2) * 1.5,
        speed: 0.012 + i * 0.003,
        y: (i - 1.5) * 1.8
      });
    });

    // Mouse Parallax Interaction & Click Energy Burst
    let targetRotationX = 0;
    let targetRotationY = 0;
    let energyBurst = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.55;
      targetRotationX = -y * 0.45;
    };

    const handleClick = () => {
      energyBurst = 2.8;
    };

    window.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('click', handleClick);

    // Resize Handler
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

    // Render Animation Loop
    let animId: number;
    let clock = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.015;

      // Energy burst decay
      energyBurst = Math.max(0, energyBurst - 0.035);
      const speedMult = 1 + energyBurst * 1.5;

      // Pulse nucleus with energy burst amplification
      const pulseScale = (1 + Math.sin(clock * 2) * 0.08) * (1 + energyBurst * 0.25);
      nucleus.scale.set(pulseScale, pulseScale, pulseScale);

      // Core rotations
      outerSphere.rotation.y += 0.003 * speedMult;
      outerSphere.rotation.x += 0.0015 * speedMult;
      innerSphere.rotation.y -= 0.006 * speedMult;
      innerSphere.rotation.z += 0.003 * speedMult;

      // Rotate rings
      rings.forEach((r, idx) => {
        r.rotation.y += 0.0025 * (idx % 2 === 0 ? 1 : -1) * speedMult;
      });

      // Update orbiting nodes
      nodes.forEach((n) => {
        n.angle += n.speed * speedMult;
        n.mesh.position.x = Math.cos(n.angle) * n.orbitRadius;
        n.mesh.position.z = Math.sin(n.angle) * n.orbitRadius;
        n.mesh.position.y = n.yOffset + Math.sin(n.angle * 2) * 0.9;
        n.mesh.rotation.x += 0.02 * speedMult;
        n.mesh.rotation.y += 0.02 * speedMult;
      });

      // Update Beacon Satellites
      beacons.forEach((b) => {
        b.angle += b.speed * speedMult;
        b.mesh.position.x = Math.cos(b.angle) * b.radius;
        b.mesh.position.z = Math.sin(b.angle) * b.radius;
        b.mesh.position.y = b.y + Math.cos(b.angle * 2) * 0.6;
        b.ring.rotation.y += 0.03 * speedMult;
      });

      // Subtle particle drift
      particles.rotation.y += 0.0008;

      // Mouse smoothing
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[300px] sm:h-[450px] lg:h-[580px] flex items-center justify-center pointer-events-auto ${className}`}
      aria-label="Interactive 3D AI Digital Core"
    >
      {/* Background radial light glow */}
      <div className="absolute inset-0 bg-radial from-blue-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
}
