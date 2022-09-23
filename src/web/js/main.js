window.onload = async function(){
    const resp = await handleClick();
    // createUsersTable(); 
   // await appendUsers(resp);
     
};
async function handleClick() { 
    const url = 'https://private-847f5-ivangenesis.apiary-mock.com/users';
    const users = await fetch(url).then(async (res) => {
    const response = await res.json()
    return response;
});
    // return users

const usersInfo = document.querySelector(".container");
let headers = ['Name', 'CPF', 'Phone', 'Email'];

const createUsersTable = () => {

    console.log('teste3');

    console.log('teste2');
    const usersTable = document.createElement('table');
    usersTable.className = 'usersTable'; //cria tabela

    const usersTableHead = document.createElement('thead');
    usersTableHead.className = 'usersTableHead'; //head da tabela

    const usersTableHeaderRow = document.createElement('tr');
    usersTableHeaderRow.className = 'usersTableHeaderRow'; //linha dos headers

    headers.forEach(header =>{
    const userHeader = document.createElement('th');
    userHeader.innerText = header; //iteração do header
    usersTableHeaderRow.append(userHeader);
});

    usersTableHead.append(usersTableHeaderRow);
    usersTable.append(usersTableHead); //append da coluna do head ao elemento head

    const usersTableBody = document.createElement('tbody'); //cria body
    usersTableBody.className = 'usersTableBody';
    usersTable.append(usersTableBody); //coloca o body na tabela

    usersInfo.append(usersTable); //coloca a tabela na div do usersInfo
    
}

// const responseLength = response.length;
for(let i = 0; i < 4; i++){
    const appendUsers = (response) => {
    const users = response;
    for(const user of users){
    const usersInfoTable = document.querySelector('.usersTable'); //localiza tabela criada
    console.log(users);
    const usersTableBodyRow = document.createElement('tr');
    usersTableBodyRow.className = 'usersTableBodyRow'; //cria a linha

    const usersName = document.createElement('td');
    usersName.innerText = user.name; //linha do nome

    const usersCpf = document.createElement('td');
    usersCpf.innerText = user.cpf; //linha do cpf
    
    const usersPhone = document.createElement('td');
    usersPhone.innerText = user.phone; //linha do phone

    const usersEmail = document.createElement('td');
    usersEmail.innerText = user.email; //linha do nome

    usersTableBodyRow.append(usersName, usersCpf, usersPhone, usersEmail); //coloca a informações nas linhas
    usersInfoTable.append(usersTableBodyRow);
    appendUsers(users);
}}
}
}


//const newTable = document.createElement("table");
// const thead = document.createElement("thead");

// newTable.appendChild(td);
// document.getElementById("usersApi").appendChild(newTable);


// td.innerHTML = `${user.name}`;
// td.innerHTML = `${user.cpf}`;
// td.innerHTML = `${user.phone}`;
// td.innerHTML = `${user.email}`;

// newTable.appendChild(header);
// newTable.appendChild(body);




// const columns = ['id', 'Name', 'CPF', 'Phone', 'Email'];
// const rows = users

// const columnsTable = columns.map(column =>(
//     `<th>${column}<th>`
// ));

//     // thead.rows.item(0).innerHTML = columnsTable.join('');

//  for(row of rows){
// const rowsTable = rows.map(row =>(
//     `
//     <tr>
//         <td>${row.name}</td>
//         <td>${row.CPF}</td>
//         <td>${row.Phone}</td>
//         <td>${row.email}</td>
//     </tr>
//     `
// ));
// tbody.innerHTML = rowsTable.join('');
// }










function getInfo(){

    // const usuario = users[0].name
    // const newTable = document.createElement("table");
    // const header = document.createElement("thead");
    // const body = document.createElement("tbody");
    // const td = document.createElement("td");

    // td.innerHTML = `${usuario}`;
    // newTable.appendChild(header);
    // newTable.appendChild(body);
    // newTable.appendChild(td);
    // document.getElementById("usersApi").appendChild(newTable);


    //     users.map(function(user){
    //     const li = document.createElement('li');
    //     const name = document.createElement('h2');
    //     const email = document.createElement('span');
    //     const cpf = document.createElement('span');
    //     const phone = document.createElement('span');

    //     name.innerHTML = `${user.name}`;
    //     email.innerHTML = `${user.email}`;
    //     cpf.innerHTML = `${user.CPF}`;
    //     phone.innerHTML = `${user.phone}`;


    //     li.appendChild(name);
    //     li.appendChild(email);
    //     li.appendChild(cpf);
    //     li.appendChild(phone);
    //     list.appendChild(li);
    // });

// ul.appendChild(list);
}
// document.onload(getInfo());




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




// function getInfo(users){
// const datatable = document.querySelector('.infoTable')
// const tbody = datatable.querySelector('tbody')
// const thead = datatable.querySelector('thead')

// const columns = ['id', 'Name', 'CPF', 'Phone', 'Email'];

// const rows = users

// const columnsTable = columns.map(column =>(
//     `<th>${column}<th>`
// ));

// thead.rows.item(0).innerHTML = columnsTable.join('');

// // for(row of rows){
// const rowsTable = rows.map(row =>(
//     `
//     <tr>
//         <td>${row.name}</td>
//         <td>${row.CPF}</td>
//         <td>${row.Phone}</td>
//         <td>${row.email}</td>
//     </tr>
//     `
// ));

// }
// tbody.innerHTML = rowsTable.join('');
// }

// ---------------------------------------
// const tbody = document.querySelector('#tbody');
// const nameUser = document.querySelector('#formName');
// const cpf = document.querySelector('#formCpf');
// const phone = document.querySelector('#formPhone');
// const email = document.querySelector('#formEmail');
// const btnSubmit = document.querySelector('#btnSubmit');

// let itens = ''; //itens para manipulação das informações do localstorage
// let id; //id que serve para pegar o index do array no localstorage

// //abaixo pega os itens da LocalStorage ou retorna um array vazio caso não haja, mas tem a API
// const getItensLS = () => JSON.parse(localStorage.getItem('lsFunction'));
// const setItensLS = () => localStorage.setItem('lsFunction', JSON.stringify(itens));

// // função para iniciar com as informações da LS, ou que retornam da API
// function loadInformation(){
//     itens = getItensLS();
//     tbody.innerHTML = '';
//     itens.forEach((item, index)=>{ //for em cada dado para ser criada a linha
//         insertItem(item, index)
//     })
// }

// loadInformation();

// function insertItem(item, index){
//     const tr = document.createElement('tr'); //criação dos td com as informações
//     tr.innerHTML = 
//     `
//     <td>${item.nameUser}</td>
//     <td>${item.cpf}</td>
//     <td>${item.phone}</td>
//     <td>${item.email}</td>
//     <td>
//     <button onClick="edit(${index})"><i class="material-icons">edit</i></button>
//     </td>
//     <td>
//     <button onClick="delete(${index})"><i class="material-icons">trash</i></button>
//     </td>
//     `
//     tbody.appendChild(tr); //carregando para dentro do body para ser apresentado em tela
// }

// function excludeItem(index){
//     itens.splice(index, 1) //pega o index, retira um item
//     setItensLS(); //atualiza no LS
//     loadInformation(); //carrega novamente as informações
// }

// function editItem(index) {

//     insert(true, index);
//   }

// function insert(edit = false, index = 0){ //vem como padrao false, caso seja edição virá true

//     if(edit){
//         nameUser.value = itens[index].name;
//         cpf.value = itens[index].cpf;
//         phone.value = itens[index].phone;
//         email.value = itens[index].email;
//     }else{
//         nameUser.value = '';
//         cpf.value = '';
//         phone.value = '';
//         email.value = '';
//     }
// } 

// btnSubmit.onclick = e => {
  
//     if (nameUser.value == '' || cpf.value == '' || phone.value == '' || email.value == '') {
//       return
//     } //verifica nulos e vazios
  
//     e.preventDefault();
  
//     if (id !== undefined) { // diferente de undefined, é pq veio de edição, atualiza com novos valores ou faz o push em valores novos
//       itens[id].nameUser = nameUser.value
//       itens[id].cpf = cpf.value
//       itens[id].phone = phone.value
//       itens[id].email = email.value
//     } else {
//       itens.push({'name': nameUser.value, 'cpf': cpf.value, 'phone': phone.value, 'email': email.value})
//     }
  
//     setItensLS() // seta os novos itens na LS  
//     loadInformation() // carrega as novas informações
//     id = undefined // id undefined para pegar novo
//   }

function inputLength(){
    if(document.getElementById('inputName').value.length < 3){
        document.getElementById('#btnSubmit').disabled = true;
    }else{
        document.getElementById('#btnSubmit').disabled = false;  
    }
}


function emptyFields(){
    const nameInput = document.getElementById('inputName').value;
    const cpf = document.getElementById('inputCpf').value;
    const phone = document.getElementById('inputPhone').value;
    const email = document.getElementById('inputEmail').value;
    const btnSubmit = document.getElementById('btnSubmit');
    const locked = document.getElementById('lockedButton').value;

    if((nameInput == '' && cpf == '' && phone == '' && email == '')){
        btnSubmit.style.backgroundColor = '#dddcdc';
        btnSubmit.style.color ='#f6f6f6'
        btnSubmit.disabled = true;
    }
}