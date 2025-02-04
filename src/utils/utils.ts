export function isPcDevice(): boolean {
    return !('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }
  