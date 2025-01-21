const ContactsRepositories = require('../repositories/ContactsRepositories')

class ContactController {
    async index(request, response) {
        const contacts = await ContactsRepositories.findAll()

        response.json(contacts)
        
    }

    show() {
        // Retornanr UM registro
    }

    store() {
        // Criar um registro
    }

    update() {
        // Alterar um registro
    }

    delete() {
        // Deleter um registro
    }
}

module.exports = new ContactController()