import eases from 'eases';

module.exports = function transitions() {

  return [
    { 
      from: 'idle', to: 'over', animation: {
        duration: 0.25,
        ease: eases.backOut,
      },
    },
    { 
      from: 'over', to: 'idle', animation: {
        duration: 0.25,
        ease: eases.expoOut,
      },
    },
    { 
      from: 'over', to: 'selected', bi: true, animation: {
        duration: 0.5,
        ease: eases.expoIn,
      },
    },
    { 
      from: 'idle', to: 'selected', bi: true, animation: {
        duration: 0.5,
        ease: eases.expoIn,
      },
    },
  ];
}
