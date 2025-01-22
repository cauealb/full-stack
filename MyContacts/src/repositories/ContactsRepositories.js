const { v4 } = require('uuid')

let contacts = [
    {
        id: v4(),
        name: "Cauê",
        email: "cauealves@gmail.com",
        phone: "119773299885",
        category_id: v4()
    },
    {
        id: v4(),
        name: "Geovanna",
        email: "geovannaalvespitica@gmail.com",
        phone: "119773299885",
        category_id: v4()
    },
    {
        id: v4(),
        name: "Inaldo",
        email: "inaldo@gmail.com",
        phone: "119773299885",
        category_id: v4()
    },
    {
        id: v4(),
        name: "Cleide",
        email: "cleide@gmail.com",
        phone: "119773299885",
        category_id: v4()
    }
]

class ContactRepositores {
    findAll() {
        return new Promise((resolve) => {
            return resolve(contacts)
        })
    }

    async findById(id) {
        return new Promise((resolve) => {
            return resolve(
                contacts.find((item) => item.id === id)
            )
        })
    }

    async delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((item) => item.id != id)
            resolve();
        })
    }
}

module.exports = new ContactRepositores();