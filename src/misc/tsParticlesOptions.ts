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
