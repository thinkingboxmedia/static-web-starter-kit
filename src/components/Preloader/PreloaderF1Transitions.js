import eases from 'eases';

import { IDLE, OUT, HIDE } from './PreloaderF1States';

export default function transitions() {
  return [
    {
      from: OUT,
      to: IDLE,
      bi: true,
      animation: {
        duration: 1,
        ease: eases.expoOut,
        title: {
          style: {
            duration: 0.5,
            ease: eases.expoOut,
          },
        },
      },
    },
    {
      from: IDLE,
      to: HIDE,
      bi: true,
      animation: {
        duration: 1,
        ease: eases.expoIn,
        container: {
          style: {
            duration: 0.8,
            delay: 0.2,
            ease: eases.expoIn,
          },
        },
        title: {
          style: {
            duration: 0.25,
            ease: eases.expoOut,
          },
        },
        progressbar: {
          style: {
            duration: 0.25,
            ease: eases.expoOut,
          },
        },
      },
    },
  ];
}
