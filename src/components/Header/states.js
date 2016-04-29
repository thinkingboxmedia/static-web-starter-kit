import merge from 'deep-extend';

module.exports = function states(props) {
  
 // props?

  /**
   * IDLE
   */

  var idle = {
    icon: {
      style: {
        transformOrigin: [ 0.5, 0.5 ],
        scale: [ 0.5, 0.5 ],
        rotate: [ 0, 0, 0 ],
      },
    },
  };

  /**
   * OVER
   */

  var over = merge(
    {},
    idle,
    {
      icon: {
        style: {
          rotate: [ 0, 0, 90 ],
        },
      },
    }
  );

  /**
   * SELECTED
   */

  var selected = merge(
    {},
    idle,
    {
      icon: {
        style: {
          scale: [ 1, 1 ],
        },
      },
    }
  );

  //

  return {
    idle: idle,
    over: over,
    selected: selected,
  };
};
