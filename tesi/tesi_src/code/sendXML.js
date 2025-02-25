sendXML: async function (access_token, guid, name, hostname, description ,port, serverUrl) {
        let checkName = false;
        let events;
        let xmlres = null;
        const api_gateway = new Gateway(serverUrl);

        const res = await api_gateway.getAllEvents(access_token);
        if (res.status === 200) {
            events = await res.json();
        }
        for (let i = 0; i < events.array.length; i++) {
            if (events.array[i].displayName === name) {
                checkName = true;
            }
        }
        if (checkName) {
            const url = "https://" + hostname + ":" + port;
            const xml = eventXML(guid, name, description);
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/xml'
                },
                body: xml
            }).then(async function (response) {
                const res = await response;
                xmlres = res;
            }).catch(function (err) {
                const msg = "Connection error: " + err
                xmlres = msg;
            });
        } else {
            xmlres = "Connection error: the event '" + name + "' doesn't exist"
        }
        return xmlres;
    },
}