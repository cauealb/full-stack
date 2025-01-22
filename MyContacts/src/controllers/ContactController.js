const ContactsRepositories = require('../repositories/ContactsRepositories')

class ContactController {
    async index(request, response) {
        const contacts = await ContactsRepositories.findAll()

        response.json(contacts)
        
    }

    async show(request, response) {
        // Retornanr UM registro
        const { id } = request.params

        const contacts = await ContactsRepositories.findById(id)

        if(!contacts) {
            return response.status(404).json({ error: 'Cannot find contact' })
        }

        return response.status(200).json(contacts)
    }

    store() {
        // Criar um registro
    }

    update() {
        // Alterar um registro
    }

    async delete(request, response) {
        // Deleter um registro
        const { id } = request.params

        const contacts = await ContactsRepositories.findById(id)

        if(!contacts) {
            return response.status(404).json({error: 'Cannot find contact'})
        }

        await ContactsRepositories.delete(id)

        response.sendStatus(204)
    }
}

module.exports = new ContactController()