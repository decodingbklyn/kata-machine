export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let currentJump = jumpAmount;

  for(let i = jumpAmount; i < breaks.length; i += jumpAmount) {
    if(breaks[i]) {
      for(let j = i - jumpAmount; j < i; j++) {
        if(breaks[j]) {
          return j;
        }
      }
    }
  }
  currentJump -= jumpAmount;
  for(let j = 0; j < jumpAmount && currentJump < breaks.length; j++, currentJump++) {
    if(breaks[currentJump]) {
      return currentJump;
    }
  }
  return -1;
}