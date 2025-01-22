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

    async findByEmail(email) {
        return new Promise((resolve) => {
            return resolve(
                contacts.find((item) => item.email === email)
            )
        })
    }

    async delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((item) => item.id != id)
            resolve();
        })
    }

    async create({ name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const newContacts = {
                id: v4(),
                name,
                email,
                phone,
                category_id
            }
            contacts.push(newContacts)
            resolve(newContacts)
        })
    }

    async update(id, { name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const updateContact = {
                id,
                name, 
                email, 
                phone,
                category_id
            }

            contacts = contacts.map((item) => {
                item.id === id ? updateContact : item
            })
            resolve(updateContact)
        })
    }
}

module.exports = new ContactRepositores();