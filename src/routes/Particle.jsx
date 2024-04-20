import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadTrianglesPreset } from 'tsparticles-preset-triangles';

function Particle() {
  const [presetLoaded, setPresetLoaded] = useState(false);

  const particlesInit = useCallback((engine) => {
    if (!presetLoaded) {
      loadPreset(engine);
    }
  }, [presetLoaded]);

  const loadPreset = (engine) => {
    try {
      loadTrianglesPreset(engine);
      setPresetLoaded(true);
    } catch (error) {
      console.error('Error loading preset:', error);
    }
  };

  useEffect(() => {
    // You may perform additional setup here if needed
    return () => {
      // Cleanup or additional actions on component unmount
    };
  }, []);

  const particleOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: '#000',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#00ffff',
      },
      links: {
        color: '#00ffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
    preset: 'triangles',
  };

  return <Particles id="tsparticles" init={particlesInit} options={particleOptions} />;
}

export default Particle;
