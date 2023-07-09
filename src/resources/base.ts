
type Config = {
  apiKey: string;
};

export abstract class Base {
  private apiKey: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
  }

  protected logEvent(e: string, m: string) {
    console.log(`${e} ${m}`)
  }
}