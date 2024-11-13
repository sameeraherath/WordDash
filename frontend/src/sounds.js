import { Howl } from "howler";

export const correctSound = new Howl({
  src: ["/assets/correct.mp3"],
});

export const wrongSound = new Howl({
  src: ["/assets/wrong.mp3"],
});

export const hintSound = new Howl({
  src: ["/assets/hint.mp3"],
});

export const gameOverSound = new Howl({
  src: ["/assets/gameover.mp3"],
});
