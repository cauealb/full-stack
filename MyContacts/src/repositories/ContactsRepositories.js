const { v4 } = require('uuid')

const contacts = [
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
            resolve(
                contacts.find((item) => item.id === id)
            )
        })
    }
}

module.exports = new ContactRepositores();