'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Workflow3DSceneProps {
  selectedNodeIndex: number;
  onSelectNode: (index: number) => void;
}

export default function Workflow3DScene({ selectedNodeIndex, onSelectNode }: Workflow3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef(selectedNodeIndex);
  selectedRef.current = selectedNodeIndex;

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

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 4, 22);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 8 Node Positions in 3D Space (S-curve ribbon)
    const nodeCoords: THREE.Vector3[] = [
      new THREE.Vector3(-10.5, 1.8, -1.5),
      new THREE.Vector3(-7.5, -1.2, 1.2),
      new THREE.Vector3(-4.5, 2.0, -0.8),
      new THREE.Vector3(-1.5, -0.8, 1.5),
      new THREE.Vector3(1.5, 1.8, -1.0),
      new THREE.Vector3(4.5, -1.2, 1.0),
      new THREE.Vector3(7.5, 1.9, -1.2),
      new THREE.Vector3(10.5, -0.5, 0.5)
    ];

    const nodeColors = [
      0x2563eb, // 1. Prospect (Blue)
      0x0284c7, // 2. Gateway (Sky)
      0x7c3aed, // 3. AI Agent (Purple)
      0x06b6d4, // 4. Qualify (Cyan)
      0x4f46e5, // 5. CRM (Indigo)
      0x3b82f6, // 6. Booking (Blue)
      0x8b5cf6, // 7. Follow-up (Violet)
      0x10b981  // 8. Deal (Emerald)
    ];

    // Node Meshes & Rings
    const nodeMeshes: THREE.Mesh[] = [];
    const haloRings: THREE.Line[] = [];

    nodeCoords.forEach((coord, idx) => {
      // 3D Geometry per stage
      let geom: THREE.BufferGeometry;
      if (idx === 0) geom = new THREE.SphereGeometry(0.85, 16, 16);
      else if (idx === 1) geom = new THREE.CylinderGeometry(0.8, 0.8, 1.0, 6);
      else if (idx === 2) geom = new THREE.IcosahedronGeometry(1.0, 1);
      else if (idx === 3) geom = new THREE.OctahedronGeometry(0.9);
      else if (idx === 4) geom = new THREE.CylinderGeometry(0.75, 0.75, 1.2, 16);
      else if (idx === 5) geom = new THREE.TorusGeometry(0.7, 0.28, 12, 24);
      else if (idx === 6) geom = new THREE.TetrahedronGeometry(0.9);
      else geom = new THREE.DodecahedronGeometry(0.95);

      const mat = new THREE.MeshBasicMaterial({
        color: nodeColors[idx],
        wireframe: true,
        transparent: true,
        opacity: 0.85
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.copy(coord);
      worldGroup.add(mesh);
      nodeMeshes.push(mesh);

      // Inner glowing core
      const coreGeom = new THREE.SphereGeometry(0.35, 12, 12);
      const coreMat = new THREE.MeshBasicMaterial({
        color: nodeColors[idx],
        transparent: true,
        opacity: 0.95
      });
      const core = new THREE.Mesh(coreGeom, coreMat);
      mesh.add(core);

      // Orbiting Halo Ring
      const ringPts: THREE.Vector3[] = [];
      for (let i = 0; i <= 36; i++) {
        const theta = (i / 36) * Math.PI * 2;
        ringPts.push(new THREE.Vector3(Math.cos(theta) * 1.35, 0, Math.sin(theta) * 1.35));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPts);
      const ringMat = new THREE.LineBasicMaterial({
        color: nodeColors[idx],
        transparent: true,
        opacity: 0.4
      });
      const halo = new THREE.Line(ringGeo, ringMat);
      halo.position.copy(coord);
      halo.rotation.x = Math.PI / 3;
      worldGroup.add(halo);
      haloRings.push(halo);
    });

    // 3D Spline Curve Connecting All 8 Nodes
    const curve = new THREE.CatmullRomCurve3(nodeCoords);
    const curvePoints = curve.getPoints(120);
    const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const curveMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.4
    });
    const curveLine = new THREE.Line(curveGeo, curveMat);
    worldGroup.add(curveLine);

    // Glowing Animated Energy Packets traveling along the 3D curve
    const packetCount = 5;
    const packetMeshes: THREE.Mesh[] = [];
    const packetGeom = new THREE.SphereGeometry(0.24, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < packetCount; i++) {
      const packet = new THREE.Mesh(packetGeom, packetMat);
      worldGroup.add(packet);
      packetMeshes.push(packet);
    }

    // Ambient floating 3D particle dust
    const dustCount = 80;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 26;
      dustPos[i + 1] = (Math.random() - 0.5) * 12;
      dustPos[i + 2] = (Math.random() - 0.5) * 10;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.12,
      transparent: true,
      opacity: 0.45
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    worldGroup.add(dust);

    // Mouse & Touch Drag Rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        // Subtle hover parallax
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetRotY = x * 0.15;
        return;
      }
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      worldGroup.rotation.y += deltaX * 0.006;
      worldGroup.rotation.x += deltaY * 0.004;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Raycaster for 3D Node Click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (e: MouseEvent) => {
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const index = nodeMeshes.indexOf(clickedMesh);
        if (index !== -1) {
          onSelectNode(index);
        }
      }
    };
    domElement.addEventListener('click', onClick);

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
      clock += 0.015;

      // Rotate nodes and pulse selected
      const currentSelected = selectedRef.current;
      nodeMeshes.forEach((mesh, idx) => {
        mesh.rotation.y += 0.012;
        mesh.rotation.x += 0.008;

        const isSel = idx === currentSelected;
        const targetScale = isSel ? 1.45 + Math.sin(clock * 3) * 0.12 : 1.0;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        // Halo spin
        const halo = haloRings[idx];
        halo.rotation.y += isSel ? 0.04 : 0.015;
        halo.scale.set(targetScale, targetScale, targetScale);
      });

      // Move energy packets along the 3D spline
      packetMeshes.forEach((packet, i) => {
        const t = (clock * 0.2 + i / packetCount) % 1;
        const pos = curve.getPointAt(t);
        packet.position.copy(pos);
      });

      // Subtle particle float
      dust.rotation.y += 0.0008;

      if (!isDragging) {
        worldGroup.rotation.y += (targetRotY - worldGroup.rotation.y) * 0.05;
        worldGroup.rotation.x += (targetRotX - worldGroup.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectNode]);

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-inner my-4">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* 3D Canvas Telemetry Overlay */}
      <div className="absolute top-3 left-4 flex items-center gap-2 text-[10px] font-mono text-cyan-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/20 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>THREE.JS 3D PIPELINE • DRAG TO ROTATE 360°</span>
      </div>

      <div className="absolute bottom-3 right-4 text-[10px] font-mono text-slate-400 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 pointer-events-none hidden sm:block">
        Click any 3D Node to inspect logic
      </div>
    </div>
  );
}
