export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export const bannerParentVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.06,
    },
  },
};

export const animatedAvatarVariant = {
  hidden: { opacity: 0, scale: 0.8, x: 80, y: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.06,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.01,
    },
  },
};

export const fadeInTopLeft = {
  hidden: { opacity: 0, scale: 0.8, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.02,
    },
  },
};

export const fadeInBottom1 = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.02,
    },
  },
};

export const fadeInBottomRight = {
  hidden: { opacity: 0, scale: 0.8, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.02,
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.02,
    },
  },
};

export const fadeInBottomParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      // duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

export const fadeInBottomChildren = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

// export const fadeInStaggered = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       // duration: 0.5,
//       ease: [0.42, 0, 0.58, 1],
//       delayChildren: 0.3,
//       staggerChildren: 0.8,
//     },
//   },
// };
