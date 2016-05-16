import eases from 'eases';

import { IDLE, OVER, SELECTED } from './HeaderF1States';

export default function transitions() {
  return [
    {
      from: IDLE, to: OVER, bi: true, animation: {
        duration: 0.25,
        ease: eases.backOut,
      },
    },
    {
      from: OVER, to: IDLE, animation: {
        duration: 0.25,
        ease: eases.expoOut,
      },
    },
    {
      from: OVER, to: SELECTED, bi: true, animation: {
        duration: 0.5,
        ease: eases.expoIn,
      },
    },
    {
      from: IDLE, to: SELECTED, bi: true, animation: {
        duration: 0.5,
        ease: eases.expoIn,
      },
    },
  ];
};
