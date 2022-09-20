async function handleClick() {
    const ul = document.getElementById('usersApi');
    const list = document.createDocumentFragment();
    const url = 'https://private-847f5-ivangenesis.apiary-mock.com/users';



    const users = fetch('https://private-847f5-ivangenesis.apiary-mock.com/users').then(async (res) => {
    const response = await res.json()    
    return response;
});


// function getInfo(users){

//     users.map(function(user){
//         const li = document.createElement('li');
//         const name = document.createElement('h2');
//         const email = document.createElement('span');

//         name.innerHTML = `${user.name}`;
//         email.innerHTML = `${user.email}`;

//         li.appendChild(name);
//         li.appendChild(email);
//         list.appendChild(li);

//     });

// ul.appendChild(list);
// }


    // const fetchTableData = ( => {
    //     return fetch('https://private-847f5-ivangenesis.apiary-mock.com/users')
    //       .then(result => result.json())
    //       .then(data => {
    //           return data;
    //       })
    //   }
    //   console.log(fetchTableData[0].data);
  
    //   export default fetchTableData;


    // var users = await fetch(url, {
    //         method: 'GET',
    //     }).then((response) => {response.json()}).then((data) => {
    //         const users = data;
    //         users.map(function(user){
    //             const li = document.createElement('li');
    //             const name = document.createElement('h2');
    //             const email = document.createElement('span');

    //             name.innerHTML = `${user.name}`;
    //             email.innerHTML = `${user.email}`;

    //             li.appendChild(name);
    //             li.appendChild(email);
    //             list.appendChild(li);

    //         });
    //     }).catch(function(error){
    //         console.log(error)
    //     });

    //     ul.appendChild(list);

    //     console.log(users);
       // return JSON.stringify(users);
    }


function getInfo(users){
const datatable = document.querySelector('.infoTable')
const tbody = datatable.querySelector('tbody')
const thead = datatable.querySelector('thead')

const columns = ['id', 'Name', 'CPF', 'Phone', 'Email'];

const rows = users

const columnsTable = columns.map(column =>(
    `<th>${column}<th>`
));

thead.rows.item(0).innerHTML = columnsTable.join('');

// for(row of rows){
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

// }
tbody.innerHTML = rowsTable.join('');
}

const tbody = document.querySelector('tbody');
const nameUser = document.querySelector('formName');
const cpf = document.querySelector('formCpf');
const phone = document.querySelector('formPhone');
const email = document.querySelector('formEmail');
const btnSubmit = document.querySelector('btnSubmit');

let itens = ''; //itens para manipulação das informações do localstorage
let id; //id que serve para pegar o index do array no localstorage

//abaixo pega os itens da LocalStorage ou retorna um array vazio caso não haja, mas tem a API
const getItensLS = () => JSON.parse(localStorage.getItem('lsFunction')) ?? [];
const setItensLS = () => localStorage.setItem('lsFunction', JSON.stringify(itens));

//função para iniciar com as informações da LS, ou que retornam da API
function loadInformation(){
    itens = getItensLS();
    tbody.innerHTML = ''
    itens.forEach((item, index)=>{ //for em cada dado para ser criada a linha
        insertItem(item, index)
    })
}

loadInformation();

function insertItem(item, index){
    const tr = document.createElement('tr'); //criação dos td com as informações
    tr.innerHTML = 
    `
    <td>${item.nameUser}</td>
    <td>${item.cpf}</td>
    <td>${item.phone}</td>
    <td>${item.email}</td>
    <td>
    <button onClick="edit(${index})"><i class="material-icons">edit</i></button>
    </td>
    <td>
    <button onClick="delete(${index})"><i class="material-icons">trash</i></button>
    </td>
    `
    tbody.appendChild(tr); //carregando para dentro do body para ser apresentado em tela
}

function excludeItem(index){
    itens.splice(index, 1) //pega o index, retira um item
    setItensLS(); //atualiza no LS
    loadInformation(); //carrega novamente as informações
}

function editItem(index) {

    insert(true, index);
  }

function insert(edit = false, index = 0){ //vem como padrao false, caso seja edição virá true

    if(edit){
        nameUser.value = itens[index].name;
        cpf.value = itens[index].cpf;
        phone.value = itens[index].phone;
        email.value = itens[index].email;
    }else{
        nameUser.value = '';
        cpf.value = '';
        phone.value = '';
        email.value = '';
    }



} 