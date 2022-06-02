// Options to control particle effect
// See particles.js.org for more options

import { ISourceOptions } from 'tsparticles-engine'; // Interface for particleOptions

export const bouncySnow: ISourceOptions = {
  // background: {
  //   color: {
  //     value: '#141214',
  //   },
  //   position: '50% 50%',
  //   repeat: 'no-repeat',
  //   size: 'cover',
  // },
  // fullScreen: {
  //   zIndex: -1,
  // },
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: false,
    },
    modes: {
      push: {
        quantity: 1,
      },
      repulse: {
        factor: 2,
        maxSpeed: 2,
      },
    },
  },
  particles: {
    collisions: {
      bounce: {
        horizontal: {
          value: {
            min: 0.1,
            max: 1,
          },
        },
        vertical: {
          value: {
            min: 0.1,
            max: 1,
          },
        },
      },
      enable: true,
    },
    move: {
      angle: {
        value: 45,
        offset: 0,
      },
      direction: 'bottom-left',
      drift: 0.01,
      enable: true,
      speed: 6,
    },
    number: {
      value: 80,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.4,
      },
      value: {
        min: 0.4,
        max: 0.7,
      },
    },
    size: {
      value: {
        min: 2,
        max: 5,
      },
    },
    wobble: {
      distance: 10,
      enable: true,
      speed: 10,
    },
  },
};

export const colorShow: any = {
  background: {
    color: {
      value: '#000000',
    },
  },
  fullScreen: {
    zIndex: -1,
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#b6b2b2',
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      animation: {
        enable: true,
        speed: 12.181158184520175,
        minimumValue: 0.1,
        sync: false,
      },
    },
    lineLinked: {
      enable: false,
      distance: 150,
      color: '#c8c8c8',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'connect',
      },
      onClick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      connect: {},
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  detectRetina: true,
};
