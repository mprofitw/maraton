const hour = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const btnResult = document.querySelector('button')
const tbody = document.querySelector('.tbody')
const table = document.querySelector('table')
const info = document.querySelector('.far')
const timesBackground = document.querySelector('.times')


const showTimesTable = () => {

    timesBackground.style.display = 'flex'
    table.style.visibility = 'visible'

    let totalMarathonSeconds = (parseInt(hour.value) * 3600) + (parseInt(minutes.value) * 60) + parseInt(seconds.value)
    let oneKm = totalMarathonSeconds / 42.195


    const numberRows = 43
    for (let i = 1; i <= numberRows; i++) {
        const row = tbody.insertRow()
        let cell = row.insertCell()

        if (i !== 43) {
            let secondTotal = oneKm * i
            let h = parseInt(secondTotal / 3600)
            let m = parseInt((secondTotal % 3600) / 60)
            let s = parseInt(secondTotal % 60)
            cell.textContent = `${i} km`;
            cell = row.insertCell();
            cell.textContent = `${h}:${m}:${s}`

        } else {
            let h = parseInt(totalMarathonSeconds / 3600)
            let m = parseInt((totalMarathonSeconds % 3600) / 60)
            let s = parseInt(totalMarathonSeconds % 60)
            cell.textContent = 'Maraton'
            cell = row.insertCell();
            cell.textContent = `${h}:${m}:${s}`
        }
    }

}

btnResult.addEventListener('click', showTimesTable)