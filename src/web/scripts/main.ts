export default class UsersFromApi {

    async getUsers() {

        const users = await fetch('https://private-847f5-ivangenesis.apiary-mock.com/users', {
            method: 'GET'
        })
            .then((response) => response.json());


        // const users = await window.fetch('https://private-847f5-ivangenesis.apiary-mock.com/users', {
        //     method: 'GET'
        // });
        console.log(users);
        return users.json;
    }
}
