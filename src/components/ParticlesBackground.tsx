import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // The Slim version is enough
import type { Engine } from 'tsparticles-engine'; // Type for Engine used in particlesInit
import { bouncySnow } from '../misc/tsParticlesOptions';

const ParticlesBackground = () => {
  const particlesOptions = useMemo(() => {
    return bouncySnow;
  }, []);

  const particlesInit = useCallback((engine: Engine) => loadSlim(engine), []);

  return <Particles init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
