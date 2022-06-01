// Options to control particle effect
// See particles.js.org for more options

export const bouncySnow = {
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
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
        parallax: {
          force: 100,
        },
      },
      resize: false,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
      },
      push: {
        quantity: 1,
      },
      repulse: {
        factor: 2,
        maxSpeed: 2,
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 2,
          speed: 1,
          maxSpeed: 2,
          easing: 'ease-out-quad',
          selectors: [],
        },
      },
    },
  },
  motion: {
    reduce: {
      value: false,
    },
  },
  particles: {
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: true,
          },
          value: {
            min: 0.1,
            max: 1,
          },
        },
        vertical: {
          random: {
            enable: true,
          },
          value: {
            min: 0.1,
            max: 1,
          },
        },
      },
      enable: true,
    },
    color: {
      animation: {
        h: {
          count: 20,
          offset: 20,
          speed: 20,
          sync: false,
        },
        s: {
          sync: false,
        },
        l: {
          sync: false,
        },
      },
    },
    life: {
      delay: {
        sync: true,
      },
    },
    links: {
      color: {
        value: '#ffffff',
      },
      distance: 150,
    },
    move: {
      angle: {
        value: 45,
      },
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: 'bottom-left',
      drift: 0.01,
      enable: true,
      path: {},
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      speed: 6,
      spin: {},
      trail: {
        length: 1,
      },
    },
    number: {
      density: {
        area: 1000,
        factor: 100,
      },
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
      animation: {
        speed: 3,
        minimumValue: 0.1,
      },
    },
    orbit: {
      rotation: {
        random: {
          minimumValue: 1,
        },
      },
    },
    repulse: {
      random: {
        minimumValue: 50,
      },
      distance: 100,
      factor: 100,
      speed: 100,
    },
    roll: {
      darken: {
        value: 2,
      },
      enlighten: {
        value: 200,
      },
    },
    size: {
      value: {
        min: 2,
        max: 5,
      },
      animation: {
        speed: 200,
        minimumValue: 0.1,
      },
    },
    wobble: {
      distance: 10,
      enable: true,
      speed: 10,
    },
  },
};
