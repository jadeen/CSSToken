import peggy from "peggy";

export class CSSTokenizer {

  #parser: peggy.Parser | null = null;

  constructor() {
    this.init();
  }

  init(): void {
    // Initialize the parser here
    this.#parser = peggy.generate("start = ('a' / 'b')+");
  }

  parser(content: string): string[] {

    if (!this.#parser) {
      throw new Error("Parser not initialized");
    }

    // Example implementation returning an empty array
    return this.#parser.parse(content);
  }
}