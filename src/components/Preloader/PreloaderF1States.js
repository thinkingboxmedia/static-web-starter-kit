import merge from 'deep-extend';

export const IDLE = 'idle';
export const SHOW = 'show';
export const HIDE = 'hide';

export function states(height) {
  /**
   * IDLE
   */

  const idle = {
    container: {
      style: {
        translate: [0, 0, 0],
      },
    },
    title: {
      style: {
        opacity: 1,
        translate: [0, 0, 0],
      },
    },
    progressbar: {
      style: {
        scale: [1, 1],
      },
    },
  };

  /**
   * SHOW
   */

  const show = merge(
    {},
    idle,
    {
      container: {
        style: {
          translate: [0, 0, 0],
        },
      },
      title: {
        style: {
          opacity: 0,
          translate: [0, -20, 0],
        },
      },
      progressbar: {
        style: {
          scale: [0, 1],
        },
      },
    }
  );

  /**
   * HIDE
   */

  const hide = merge(
    {},
    idle,
    {
      container: {
        style: {
          translate: [0, -height, 0],
        },
      },
      title: {
        style: {
          opacity: 0,
          translate: [0, -20, 0],
        },
      },
      progressbar: {
        style: {
          scale: [0, 1],
          opacity: 0,
        },
      },
    }
  );

  //

  return {
    idle,
    show,
    hide,
  };
}
