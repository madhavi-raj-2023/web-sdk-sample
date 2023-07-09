type Config = {
    apiKey: string;
};
export declare abstract class Base {
    private apiKey;
    constructor(config: Config);
    protected logEvent(e: string, m: string): void;
}
export {};
