import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
        options={{
          background: {
            color: 'transparent',
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              grab: {
                distance: 120,
                links: {
                  opacity: 0.7,
                  color: '#6874e8',
                },
              },
            },
          },
          particles: {
            color: {
              value: '#6874e8',
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
            number: {
              value: 5,
              density: {
                enable: true,
                area: 600,
              },
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 3, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
