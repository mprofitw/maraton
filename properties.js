class Property {


    constructor(type, street, city, postcode, status) {

        this.type = type
        this.street = street
        this.city = city
        this.postcode = postcode
        this.status = status
        // this.mortgageRate = this.setMortgageRate() Tak chyba jest poprawnie
        // this.rentalAmount = this.setRentalAmount()
        this.setMortgageRate()
        this.setRentalAmount()
    }


    costOfPurchase(costOfPurchase) {
        //    koszt zakupu
    }

    setMortgageRate(mortgageRate) {
         this.mortgageRate = mortgageRate
    }


    setRentalAmount(rentalAmount) {
        if (rentalAmount === undefined) {
            return this.rentalAmount = 0
        } else
            return this.rentalAmount = rentalAmount
    }

}

class Properties {
    constructor() {
        this.properties = []
    }

    addProperty(property) {
        this.properties.push(property)
    }

    showProperties() {
        this.properties.forEach(el => console.log(el))
    }
}

const house1 = new Property('flat', '12 Clergy Street')
const house2 = new Property('house', '19 Fountain Park', 'Banff')
const houseArr = new Properties()

house2.setRentalAmount(440)
house1.setMortgageRate(999)


houseArr.addProperty(house1)
houseArr.addProperty(house2)
houseArr.showProperties()
console.log(houseArr)

const rentalHouse2 = house2.setRentalAmount(440)
console.log(rentalHouse2)
const house1Mortgage = house1.setMortgageRate(665)
console.log('Miesięczna rata kredytu to £' + house1Mortgage)


