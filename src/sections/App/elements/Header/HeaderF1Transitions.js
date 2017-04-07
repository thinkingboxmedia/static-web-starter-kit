import eases from 'eases';

import { IDLE, OUT } from './HeaderF1States';

export default function transitions() {
  return [
    {
      from: IDLE,
      to: OUT,
      bi: true,
      animation: {
        duration: 1,
        delay: 2,
        ease: eases.expoOut,
      },
    },
  ];
}
