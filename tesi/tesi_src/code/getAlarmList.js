 getAlarmList: async function (tokenSOAP, hostname, port, maxLines, order, target) {
        let list;
        const resSession = await getAlarmLines(tokenSOAP, hostname, port, maxLines, order, target);
        if (typeof resSession !== 'object') {
            list = {
                "error": resSession.split(', reason: ').shift(),
                "description": resSession.split('reason: ').pop()
            }
        } else {
            const xmlList = await resSession.text();
            const jsonList = JSON.parse(xml2json(xmlList));
            if (resSession.status !== 200) {
                const err = jsonList.elements[0].elements[0].elements[0].elements[1].elements[0].text;
                const error = resSession.status + ' ' + resSession.statusText;
                list = {
                    "error": error,
                    "description": err
                };
            } else {
                list = [];
                const alarm = new Map();
                const alarms = jsonList.elements[0].elements[0].elements[0].elements[0].elements;
                for (let k = 0; k < alarms.length; k++) {
                    const line = lookup(alarms[k], 'elements')[1];
                    for (let i = 0; i < line.length; i++) {
                        if (line[i].hasOwnProperty('elements')) {
                            alarm.set((lookup(line[i], 'name')[1].substring(2)), lookup(line[i], 'elements')[1][0].text);
                        }
                    }
                    list.push(Object.fromEntries(alarm));
                }
            }
        }
        return list;
    }