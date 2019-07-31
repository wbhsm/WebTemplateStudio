import {
    Client,
    AuthenticationProvider,
    GraphRequest,
    ClientOptions
} from "@microsoft/microsoft-graph-client";
import { SubscriptionItem } from "../azure-auth/azureAuth";

export class AppRegistration {
    public client: Client;
    constructor(subItem: SubscriptionItem) {
        let getAT = () => {
            return new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                    resolve(subItem.session.credentials.signRequest());
                }, 0);
            });
        };
        let authProvider : AuthenticationProvider = {getAccessToken: getAT }
        let options: ClientOptions = { authProvider: authProvider };
        this.client = Client.initWithMiddleware(options);
    }
    public async init(subItem: SubscriptionItem) {}

    getMe() {
        let gr: GraphRequest = this.client.api("/me");
        return gr.get();
    }
}
