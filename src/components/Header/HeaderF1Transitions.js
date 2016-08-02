import eases from 'eases';

import { IDLE, SHOW } from './HeaderF1States';

export default function transitions() {
  return [
    {
      from: IDLE,
      to: SHOW,
      bi: true,
      animation: {
        duration: 1,
        delay: 2,
        ease: eases.expoOut,
      },
    },
  ];
}
