import merge from 'deep-extend';

export const IDLE = 'idle';
export const OUT = 'out';

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
   * OUT
   */

  const out = merge(
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
    out,
  };
}
