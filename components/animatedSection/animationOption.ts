export const fadeInParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      when: 'beforeChildren',
      staggerChildren: 0.2,
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

export const fadeInChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
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

export const zoomInParent = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const zoomInTop = {
  hidden: { opacity: 0, scale: 0.5, y: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export const zoomInTopRight = {
  hidden: { opacity: 0, scale: 0.8, x: 50, y: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.2,
    },
  },
};

export const slideFullWidth = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.4,
    },
  },
};

export const slideFullHeight = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: '100%',
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
