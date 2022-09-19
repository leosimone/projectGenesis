async function handleClick() {
    const ul = document.getElementById('usersApi');
    const list = document.createDocumentFragment();
    const url = 'https://private-847f5-ivangenesis.apiary-mock.com/users';


    var users = await fetch(url, {
            method: 'GET',
        }).then((response) => {response.json()}).then((data) => {
            const users = data;
            users.map(function(user){
                const li = document.createElement('li');
                const name = document.createElement('h2');
                const email = document.createElement('span');

                name.innerHTML = `${user.name}`;
                email.innerHTML = `${user.email}`;

                li.appendChild(name);
                li.appendChild(email);
                list.appendChild(li);

            });
        }).catch(function(error){
            console.log(error)
        });

        ul.appendChild(list);

        console.log(users);
       // return JSON.stringify(users);
    }

const datatable = document.querySelector('.infoTable')
const tbody = datatable.querySelector('tbody')
const thead = datatable.querySelector('thead')

const columns = ['id', 'Name', 'CPF', 'Phone', 'Email'];

const rows = [
    { id: 1, name: 'teste', CPF: '04080757247', Phone: '11987654321', email: 'myemail1@test.com.br' },
    { id: 2, name: 'My name 2', CPF: '77797584192', Phone: '11987654321', email: 'myemail2@test.com.br' },
    { id: 3, name: 'My name 3', CPF: '45486737688', Phone: '11987654321', email: 'myemail1@test.com.br' },
]


const columnsTable = columns.map(column =>(
    `<th>${column}<th>`
));

thead.rows.item(0).innerHTML = columnsTable.join('');

const rowsTable = rows.map(row =>(
    `
    <tr>
        <td>${row.name}</td>
        <td>${row.CPF}</td>
        <td>${row.Phone}</td>
        <td>${row.email}</td>
    </tr>
    `
));
tbody.innerHTML = rowsTable.join('');
