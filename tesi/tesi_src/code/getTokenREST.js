getTokenREST: async function (username, password, serverUrl) {
        let token = null;
        const idpUrl = serverUrl + "...";

        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "password");
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        urlencoded.append("client_id", "GrantValidatorClient");
        await fetch(idpUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
        }).then(async function (response) {
            const res = await response;
            token = res;
        }).catch(function (error) {
            const msg = "Failed to retrieve token - " + error;
            token = msg;
        });

        return token;
    }