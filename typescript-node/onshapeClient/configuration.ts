export interface ApiKey {
    accessKey?: string;
    secretKey?: string;
}

export interface ConfigurationParameters {
    apiKey?: ApiKey;
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    host?: string;
}

export class Configuration {
    apiKey?: ApiKey;
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    host?: string;

    constructor(configurationParameters: ConfigurationParameters = {}) {
        this.apiKey = configurationParameters.apiKey;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.host = configurationParameters.host;
    }
}
