import merge from 'deep-extend';

export const IDLE = 'idle';
export const OVER = 'over';
export const SELECTED = 'selected';

export function states() {
  /**
   * IDLE
   */

  const idle = {
    icon: {
      style: {
        transformOrigin: [0.5, 0.5],
        scale: [0.5, 0.5],
        rotate: [0, 0, 0],
      },
    },
  };

  /**
   * OVER
   */

  const over = merge(
    {},
    idle,
    {
      icon: {
        style: {
          rotate: [0, 0, 90],
        },
      },
    }
  );

  /**
   * SELECTED
   */

  const selected = merge(
    {},
    idle,
    {
      icon: {
        style: {
          scale: [1, 1],
        },
      },
    }
  );

  //

  return {
    idle,
    over,
    selected,
  };
}
