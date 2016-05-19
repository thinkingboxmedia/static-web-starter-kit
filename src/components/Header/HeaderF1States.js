import merge from 'deep-extend';

export const IDLE = 'idle';
export const SHOW = 'show';

export function states() {
  /**
   * IDLE
   */

  const idle = {
    container: {
      style: {
        translate: [0, 0, 0],
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
          translate: [0, -150, 0],
        },
      },
    }
  );

  //

  return {
    idle,
    show,
  };
}
