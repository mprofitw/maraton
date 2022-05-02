const tbody = document.querySelector('tbody')

const idTena = document.querySelector('#id')
const fName = document.querySelector('#fName')
const surname = document.querySelector('#surname')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const numberOfTen = document.querySelector('#numberoftenants')

const btnAddTenant = document.querySelector('.save-tenant')
const table = document.querySelector('table')

// const btnDelete = [...document.querySelectorAll('[data-id]')]
const btnDelete = [...document.querySelectorAll('.btn-delete-tenant')]
const searchName = document.querySelector('.search-input')

const form = document.querySelector('form')
const btnSearch = document.querySelector('.btn-search')
const searchInfo = document.querySelector('.search-info')
const emptyInfo = document.querySelector('.empty-info')
const btnCancelAddTenant = document.querySelector('.btn-cancel')


const removeTenant = (event) => {

    const id = Number(event.target.parentNode.parentNode.dataset.id)
    console.log("Numer id to " + id)
    console.log(event.target.parentNode)
    console.log("e.currentTarget: ", event.currentTarget);

    const row = tbody.insertRow()
    let cell = row.insertCell()
    if (event.target.classList.contains("btn-delete-tenant")) {
        tenants.removeTenant(id)
        row.remove(id)
    }


    showEmptyHeader()
    console.log(tenants)
    clearTenantTable()
    createTenantTable()
};

const createTenantTable = () => {

    // console.log(tenants)

    for (const text of tenants.getTenantsList()) {

        console.log(text)
        const row = tbody.insertRow()
        let cell = row.insertCell()
        row.dataset.id = text.id // tworzy data-id w html w <tr> z kolejnym id

        cell.textContent = text.id;

        cell = row.insertCell()
        cell.textContent = text.name

        cell = row.insertCell()
        cell.textContent = text.surname
        cell = row.insertCell()
        cell.textContent = text.phone
        cell = row.insertCell()
        cell.textContent = text.email
        cell = row.insertCell()
        cell.textContent = text.numTenant
        cell = row.insertCell()
        cell.textContent = text.status
        cell = row.insertCell()
        cell.innerHTML = ' <button class="btn-edit-tenant" >Edit</button><button class="btn-delete-tenant"  >Delete</button>'


        tbody.addEventListener('click', removeTenant);


    }
}
createTenantTable()

const clearTenantTable = () => {
    // Czyszczenie wszystkich wierszy w tabeli
    const rowCount = table.rows.length;
    for (let i = 1; i < rowCount; i++) {
        table.deleteRow(1)
    }
}

const saveTenant = () => {

    clearTenantTable()
    tenants.addTenants(new Tenant('', fName.value, surname.value, phone.value, email.value))
    console.log(tenants)

    createTenantTable()

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveTenant()

})

/*    Wyszukiwanie   */

const findName = () => {

    console.log(tenants.findTenant(searchName.value))


    clearTenantTable()
    if (tenants.findTenant(searchName.value).length > 0) {
        searchInfo.textContent = ''
        for (const text of tenants.findTenant(searchName.value)) {


            const row = tbody.insertRow()
            let cell = row.insertCell()
            row.dataset.id = text.id // tworzy data-id w html w <tr> z kolejnym id

            cell.textContent = text.id;

            cell = row.insertCell()
            cell.textContent = text.name

            cell = row.insertCell()
            cell.textContent = text.surname
            cell = row.insertCell()
            cell.textContent = text.phone
            cell = row.insertCell()
            cell.textContent = text.email
            cell = row.insertCell()
            cell.textContent = text.numTenant
            cell = row.insertCell()
            cell.textContent = text.status
            cell = row.insertCell()
            cell.innerHTML = ' <button class="btn-edit-tenant" >Edit</button><button class="btn-delete-tenant"  >Delete</button>'
            row.addEventListener('click', (event) => {
                const id = Number(event.target.parentNode.dataset.id)
                console.log("Numer id to " + id)
                console.log(event.target.parentNode)
                tenants.removeTenant(id)
                row.remove(id)

                showEmptyHeader()
                console.log(tenants)
                clearTenantTable()
                createTenantTable()
            })
        }
    } else {
        searchInfo.textContent = 'The tenant was not found in the database!'
    }

}
searchName.addEventListener('keyup', findName)
btnSearch.addEventListener('click', findName)


const showEmptyHeader = () => {
    if (tenants.getTenantsList().length === 0) {
        emptyInfo.textContent = 'List of tenants is empty now'
        console.log('empty')
    }
}




