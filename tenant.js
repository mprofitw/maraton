// let nextId = 1

class Tenant {

    static count = 0;

    constructor(id, firstName, surname, phone, email, numberTenants) {
        if (typeof firstName !== 'string') {
            throw new Error('First name must be a string not a number!')
        }
        // this.id = new Date().toISOString();
        this.id = ++this.constructor.count;
        // this.id = nextId++;
        this.firstName = firstName
        this.surname = surname
        this.phone = phone
        this.email = email
        this.numberOfTenants()
        // this.setTenatStatus(false)
    }

    hasFirstName(firstName) {
        return this.firstName.toLowerCase().includes(firstName.toLowerCase())
        // return this.firstName.toLowerCase().includes(firstName)
    }

    numberOfTenants(numberTenants) {
        return this.numberTenants = numberTenants
    }

    setTenatStatus(tStatus) {
        if (tStatus === false) {
            // console.log('Status najemcy nieaktywny')
            return this.tStatus = 'inactive'
        } else {
            // console.log('Status najemcy aktywny')
            return this.tStatus = 'active'
        }

    }
}

class Tenants {
    constructor() {
        this.tenants = []
    }

    removeTenant(no) {
        this.tenants.splice(no - 1, 1);
    }

    // getTenantLength() {
    //     return this.tenants.length
    // }

    addTenants(tenant) {
        this.tenants.push(tenant)
    }

    getTenantsList() {

        return this.tenants
            .map((tenant, i) => {
                return {
                    id: i + 1,
                    name: tenant.firstName,
                    surname: tenant.surname,
                    phone: tenant.phone,
                    email: tenant.email,
                    numTenant: tenant.numberOfTenants(),
                    status: tenant.setTenatStatus(false),
                };
            });
    }


    showTenants() {
        this.tenants.forEach((el) => {
            console.log(el.firstName)
        })
    }

    findTenant(tenantFirstName) {
        const foundNames = this.tenants.filter(tenant => {
            return tenant.hasFirstName(tenantFirstName)
        })

        return foundNames.map((tenant, i) => {
            return {
                id: i + 1,
                name: tenant.firstName,
                surname: tenant.surname,
                phone: tenant.phone,
                email: tenant.email,
                numTenant: tenant.numberOfTenants(56),
                status: tenant.setTenatStatus(true),
            };
        });

    }

    saveTenantToJson() {
        // Synchronicznie
        // const path = 'tenantList.json';
        // const fs = require('fs');
        // const data = this.getTenantsList()
        //
        // const storeData = (data, path) => {
        //     try {
        //         fs.writeFileSync(path, JSON.stringify(data))
        //         console.log('The data was successfully written to the file!')
        //     } catch (err) {
        //         console.error('Write error!', err)
        //     }
        // }

        // storeData(data, path)

        // Asynchronicznie
        const saveTenants = () => {
            const fs = require('fs');

// convert JSON object to a string
            const data = JSON.stringify(this.getTenantsList());

// write file to disk
            fs.writeFile('tenantList.json', data, 'utf8', (err) => {

                if (err) {
                    console.log(`Error writing file: ${err}`);
                } else {
                    console.log(`File is written successfully!`);
                }

            });
        }
         saveTenants()
    }

    // readTenantfromJson() {
    //     const fs = require('fs');
    //
    //     try {
    //
    //         const data = fs.readFileSync('tenantList.json', 'utf8');
    //
    //         // parse JSON string to JSON object
    //         const databases = JSON.parse(data);
    //
    //         // print all databases
    //         databases.forEach(db => {
    //             console.log(`${db.name}: ${db.surname}:${db.phone}:${db.email}`);
    //         });
    //
    //     } catch (err) {
    //         console.log(`Error reading file from disk: ${err}`);
    //     }
    // }
}


const tenant1 = new Tenant('', 'Patrycja', 'Reinholz', '0785933', 'pati@wp.pl')
const tenant2 = new Tenant('', 'Adam', 'Harendarek', '078999923')
const tenant3 = new Tenant('', 'Jackie', 'Morgan', '0785933', 'jakcs@wp.pl')
const tenant4 = new Tenant('', 'Ashly', 'Smith', '095866', 'ash@fd.pl')
const tenant5 = new Tenant('', 'George', 'Weismann', '088896', 'george@fd.pl')
const tenant6 = new Tenant('', 'Basia', 'Kąkońska', '0785933', 'basia@wp.pl')
const tenant7 = new Tenant('', 'Barbara', 'Konkolewska', '0785933', 'basia@wp.pl')

tenant1.setTenatStatus(true)
tenant2.setTenatStatus(false)


tenant1.numberOfTenants(3)
tenant2.numberOfTenants(5)


const tenants = new Tenants()

tenants.addTenants(tenant1)
tenants.addTenants(tenant2)
tenants.addTenants(tenant3)
tenants.addTenants(tenant4)
tenants.addTenants(tenant5)
tenants.addTenants(tenant6)
tenants.addTenants(tenant7)


// tenants.saveTenantToJson()
// tenants.readTenantfromJson()

console.log(tenants)