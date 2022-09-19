export function handleClick() {
    var users = window.fetch('https://private-847f5-ivangenesis.apiary-mock.com/users', {
            method: 'GET'
        });
            // .then((response) => response.json());


        // const users = await window.fetch('https://private-847f5-ivangenesis.apiary-mock.com/users', {
        //     method: 'GET'
        // });
        console.log(users);
        return users.json;
    }
