// console.log('started');
    window.onload = function () {
    console.log('onload');
    startup(); //carregando função que traz as informações


async function startup() {
    console.log('startup');

    const tbody = document.querySelector('#tbody');
    const addUserBtn = document.querySelector('#btnSubmit');
    // addUserBtn.setAttribute('id', 'lockedButton')
    if (!localStorage.getItem('users')) { 
        await fetchUsers(); //pegando usuarios da api
    }
    renderUsers(); //chamando função para colocar os usuários na tela

    addUserBtn.addEventListener('click', (e) => addUser(e), false); //adicionando users
}

 function addUser(e) {
    e.preventDefault();

    const nameUser = document.querySelector('#inputName');
    const cpf = document.querySelector('#inputCpf');
    const phone = document.querySelector('#inputPhone');
    const email = document.querySelector('#inputEmail');

    const users = getUsers();

    if(users.find(el => el.cpf === cpf.value || el.email === email.value)) {
        alert('User already submitted');
        startup();
        return;
    }
    users.push({ //colocando
        id: uuidv4(),
        name: nameUser.value,
        cpf: cpf.value,
        phone: phone.value,
        email: email.value,
    });

    nameUser.value = '';
    cpf.value = '';
    phone.value = '';
    email.value = '';

    localStorage.setItem('users', JSON.stringify(users)); 
    //depois do push do array de users, chama função para mostrar em tela


    renderUsers();
    return localStorage.setItem('users', JSON.stringify(users));
}

async function fetchUsers() { //fetch das informações da API
    const url = 'https://private-847f5-ivangenesis.apiary-mock.com/users';
    const users = await fetch(
        url,
    ).then(async (res) => {
        const response = await res.json();
        return response;
    });

    localStorage.setItem( //setando users na LS
        'users',
        JSON.stringify(
            users.map((el) => {
                el.id = uuidv4();
                return el;
            }),
        ),
    );
    return users;
}

async function renderUsers() { //renderizando as informações em tabela na tela
    const tb = document.querySelector('#infoTable>tbody');
    tb.innerHTML = '';
    const users = getUsers();
    console.log('users', users);
    for (const user of users) {
        const tr = document.createElement('tr');
        for (const prop in user) {
            if (prop !== 'id') { //não listar o id dos novos usuários na tabela
                const td = document.createElement('td');
                td.innerHTML = user[prop];
                tr.appendChild(td);
            }
        }
        tr.id = user.id;

        const editBtnTd = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtnTd.appendChild(editBtn);
        editBtn.setAttribute('id', 'editBtn')
        editBtn.innerHTML = 'EDIT'; //toda criação do botão de editar
        editBtn.addEventListener(
            'click',
            function (e) {
                console.log(this.parentElement);
            },
            false,
        );

        const removeBtnTd = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtnTd.appendChild(removeBtn);
        removeBtn.setAttribute('id', 'removeBtn')
        removeBtn.innerHTML = 'DELETE';
        removeBtn.addEventListener(
            'click',
            function (e) {
                removeUser(this.parentElement.id);
                renderUsers();
            },
            false,
        );

        tr.appendChild(editBtn);
        tr.appendChild(removeBtn);
        tb.appendChild(tr);
    }
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) ?? [];
}

function removeUser(id) {
    const users = getUsers();
    console.log(
        'filter',
        users.filter((user) => user.id !== id),
    );
    localStorage.setItem(
        'users',
        JSON.stringify(users.filter((user) => user.id !== id)),
    );
}

function validateForm(){
    const name = document.getElementById('inputName');
    const inputName = document.querySelector('#inputName')
    const wrng = document.createElement('p');
    if(name == '' || name.lentgh <= 3){
        wrng.textContent = 'minimum of 3 characters';
        inputName.appendChild(wrng);
        return false;
    }
}

function numbers(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      const codeNumbers = string.charCodeAt(i);
      if (codeNumbers < 48 || codeNumbers > 57) 
      alert('Only numbers, please')
      return false
    }
    return true
  }

// async function handleClick() {
//     const ul = document.getElementById('usersApi');
//     const list = document.createDocumentFragment();
//     const url = 'https://private-847f5-ivangenesis.apiary-mock.com/users';

//     const users = await fetch(
//         'https://private-847f5-ivangenesis.apiary-mock.com/users',
//     ).then(async (res) => {
//         const response = await res.json();
//         return response;
//     });

//     const newTable = document.createElement('table');
//     const header = document.createElement('thead');
//     const body = document.createElement('tbody');
//     const td = document.createElement('td');

//     td.innerHTML = `${users[0].name}`;
//     td.innerHTML = `${users[0].cpf}`;
//     td.innerHTML = `${users[0].phone}`;
//     td.innerHTML = `${users[0].email}`;

//     newTable.appendChild(header);
//     newTable.appendChild(body);
//     newTable.appendChild(td);
//     document.querySelector('#usersApi').appendChild(newTable);
// }

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        },
    );
}

}
