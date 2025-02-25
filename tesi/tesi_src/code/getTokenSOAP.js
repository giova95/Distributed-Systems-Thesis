getTokenSOAP: async function (username, password, serverUrl) {
        let token = null;
        const idpUrl = serverUrl + "...";
        const payload = loginXML();
        const auth = Buffer.from(username + ":" + password).toString('base64')

        await fetch(idpUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml',
                'SOAPAction': '...',
                'Authorization': `Basic ${auth}`
            },
            body: payload
        }).then(async function (response) {
            const res = await response;
            token = res;
        }).catch(function (error) {
            const msg = "Failed to retrieve token: " + error;
            token = msg;
        });
        return token;
    }