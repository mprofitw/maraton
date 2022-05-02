const btnAll = [...document.querySelectorAll('button')]
const basketList = document.querySelector('.basket-list')
console.log(btnAll)

const removeProduct =(e)=>{
   console.log('usun')
    basketList.removeChild(e.target)
}

const addProduct = (e) => {

    const li = document.createElement('li')
    li.dataset.id = '1'
    const product = e.target.dataset.name;
    // const product = e.target.parentElement.textContent
    li.addEventListener('click', removeProduct)
    li.append(product)
    basketList.append(li)
    console.log(e.target.textContent)

}

btnAll.forEach(product => product.addEventListener('click', addProduct))