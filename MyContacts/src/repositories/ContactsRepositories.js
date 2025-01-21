const { v4 } = require('uuid')

const contacts = [
    {
        id: v4(),
        name: "Cauê",
        email: "cauealves@gmail.com",
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
}

module.exports = new ContactRepositores();