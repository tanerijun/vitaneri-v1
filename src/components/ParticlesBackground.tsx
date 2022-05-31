import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine'; // Type for Engine used in particlesInit
import { ISourceOptions } from 'tsparticles-engine'; // Interface for particleOptions
import { loadSlim } from 'tsparticles-slim'; // The Slim version is enough

const ParticlesBackground = () => {
  // See particles.js.org for more options
  const particlesOptions = useMemo(() => {
    return {};
  }, []);

  const particlesInit = useCallback((engine: Engine) => loadSlim(engine), []);

  return (
    <Particles
      init={particlesInit}
      options={particlesOptions as ISourceOptions}
    />
  );
};

export default ParticlesBackground;
