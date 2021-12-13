export class AlloyError extends Error {
  public readonly code: string;

  public constructor(code: number, message: string) {
    super(`E${code} ${message}`);
    this.code = `E${code}`;
  }
}
