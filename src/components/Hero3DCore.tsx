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

    // Check WebGL availability
    let canvas: HTMLCanvasElement;
    try {
      canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all core elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core Sphere (Wireframe & Glowing Points)
    const sphereGeo = new THREE.IcosahedronGeometry(4.2, 3);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(coreSphere);

    // Inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(2.4, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerSphere);

    // 2. Orbital Rings
    const ringMaterials = [
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35 }),
      new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.35 }),
      new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.25 })
    ];

    const rings: THREE.Line[] = [];
    const ringRadii = [6.5, 8.2, 9.8];
    const ringRotations = [
      { x: Math.PI / 4, y: 0, z: Math.PI / 6 },
      { x: -Math.PI / 3, y: Math.PI / 5, z: 0 },
      { x: Math.PI / 6, y: -Math.PI / 4, z: Math.PI / 3 }
    ];

    ringRadii.forEach((radius, idx) => {
      const ringPoints: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        ringPoints.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
      const ring = new THREE.Line(ringGeo, ringMaterials[idx % ringMaterials.length]);
      ring.rotation.set(ringRotations[idx].x, ringRotations[idx].y, ringRotations[idx].z);
      mainGroup.add(ring);
      rings.push(ring);
    });

    // 3. Orbiting Data Nodes (Representing AI, CRM, API, Data, Cloud)
    const nodeCount = 12;
    const nodeGeos = [
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
      new THREE.OctahedronGeometry(0.55),
      new THREE.TetrahedronGeometry(0.6)
    ];
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true
    });
    const nodeMatViolet = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true
    });

    const nodes: { mesh: THREE.Mesh; orbitRadius: number; speed: number; angle: number; yOffset: number; axis: THREE.Vector3 }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const geom = nodeGeos[i % nodeGeos.length];
      const mat = i % 2 === 0 ? nodeMat : nodeMatViolet;
      const mesh = new THREE.Mesh(geom, mat);
      const orbitRadius = 6.0 + (i % 3) * 1.8;
      const speed = 0.008 + (i % 4) * 0.004;
      const angle = (i / nodeCount) * Math.PI * 2;
      const yOffset = ((i % 5) - 2) * 1.2;
      const axis = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        1,
        (Math.random() - 0.5) * 0.5
      ).normalize();

      mainGroup.add(mesh);
      nodes.push({ mesh, orbitRadius, speed, angle, yOffset, axis });
    }

    // 4. Particle Cloud / Field
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 28;
      positions[i + 1] = (Math.random() - 0.5) * 28;
      positions[i + 2] = (Math.random() - 0.5) * 18;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.12,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

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

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Core rotation
      coreSphere.rotation.y += 0.003;
      coreSphere.rotation.x += 0.0015;
      innerSphere.rotation.y -= 0.006;
      innerSphere.rotation.z += 0.003;

      // Rotate rings
      rings.forEach((r, idx) => {
        r.rotation.y += 0.002 * (idx % 2 === 0 ? 1 : -1);
      });

      // Update orbiting nodes
      nodes.forEach((n) => {
        n.angle += n.speed;
        n.mesh.position.x = Math.cos(n.angle) * n.orbitRadius;
        n.mesh.position.z = Math.sin(n.angle) * n.orbitRadius;
        n.mesh.position.y = n.yOffset + Math.sin(n.angle * 2) * 0.8;
        n.mesh.rotation.x += 0.02;
        n.mesh.rotation.y += 0.02;
      });

      // Subtle particle float
      particles.rotation.y += 0.0008;

      // Mouse smoothing
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
      className={`relative w-full h-[380px] sm:h-[480px] lg:h-[580px] flex items-center justify-center pointer-events-auto ${className}`}
      aria-label="Interactive 3D AI Automation Core"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-cyan-500/10 via-purple-500/5 to-transparent blur-2xl pointer-events-none" />
    </div>
  );
}
