const { v4 } = require('uuid')
const db = require('../../src/database')


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
    async findAll() {
        const rows = db.query("SELECT * FROM contacts")
        return rows;
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
        const [newRow] = await db.query(`
            INSERT INTO contacts(name, email, phone, category_id)
            VALUES($1, $2, $3, $4)
            RETURNING *
        `, [name, email, phone, category_id])
        return newRow
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
                return item.id === id ? updateContact  : item
            })

            resolve(updateContact)
        })
    }
}

module.exports = new ContactRepositores();