export {};
class StartADComponent {}
class MemoryPlayComponent {}
declare global {
  interface Window {
    AliPlayerComponent: {
      StartADComponent: StartADComponent;
      MemoryPlayComponent: MemoryPlayComponent;
    };
  }
}
