import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { PublicClientApplication } from '@azure/msal-browser/dist/app/PublicClientApplication';


export const msalConfig = {
    auth: {
        clientId: "31b57d79-2d56-4594-9cf7-7748b9b675d5",
        authority: "https://login.microsoftonline.com/865cc515-a530-4538-8ef8-072b7b2be759",
        redirectUri: "http://localhost:3000/authenticate",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
}

export const loginRequest = {
    scopes: ["User.Read"]
};
export const msalInstance = new PublicClientApplication(msalConfig);

const userAgent = window.navigator.userAgent;
const msie = userAgent.indexOf("MSIE ");
const msie11 = userAgent.indexOf("Trident/");
const isIE = msie > 0 || msie11 > 0;
let accountId: any;
let credType: any;


msalInstance.handleRedirectPromise()
    .then(handleResponse)
    .catch((error: any) => {
        console.log(error);
    })

function handleResponse(resp: any) {

    if (resp !== null) {
        accountId = resp.account.homeAccountId;
        credType = resp.account.credentialType;
        msalInstance.setActiveAccount(resp.account);
    }
    else 
    {
        const currentAccounts = msalInstance.getAllAccounts();
        if (!currentAccounts || currentAccounts.length < 1) {
            signIn("loginRedirect");
        }
        else if (currentAccounts.length > 1) {
            // add choose account code here
        }
        else if (currentAccounts.length === 1) {
            const activeAccount = currentAccounts[0];

            msalInstance.setActiveAccount(activeAccount);

            accountId = activeAccount.homeAccountId;
            //credType = activeAccount.credentialType;
        }
    }
}
async function signIn(method: string) {
    let signInType = isIE ? "loginRedirect" : method;
    if (signInType === "loginPopup") {
        return msalInstance.loginPopup(loginRequest)
        .then(handleResponse)
        .catch(function (error) {
            console.log(error);
        });
    }
    else if (signInType === "loginRedirect") {
        return msalInstance.loginRedirect(loginRequest);
    }
}

function signOut() {
    const logoutRequest = {
        account: msalInstance.getAccountByHomeId(accountId)
    };

    msalInstance.logoutRedirect(logoutRequest);
}

async function getTokenPopup(request:any, account:any) {
    request.account = account;

    return await msalInstance.acquireTokenSilent(request).catch(async (error) => {
        console.log("silent token acquisition fails.");

        if (error instanceof InteractionRequiredAuthError) {
            console.log("acquiring token using popup");

            return msalInstance.acquireTokenPopup(request).catch(error => {
                console.error(error);
            });
        }
        else {
            console.error(error);
        }
    });
}

async function getTokenRedirect(request:any, account:any) {
    request.account = account;

    return await msalInstance.acquireTokenSilent(request).catch(async (error) => {
        console.log("silent token acquisition fails.");

        if (error instanceof InteractionRequiredAuthError) {
            // fallback to interaction when silent call fails
            console.log("acquiring token using redirect");

            msalInstance.acquireTokenRedirect(request);
        }
        else {
            console.error(error);
        }
    });
}