const ContactsRepositories = require('../repositories/ContactsRepositories')

class ContactController {
    async index(request, response) {
        const { orderBy } = request.query;
        const contacts = await ContactsRepositories.findAll(orderBy)
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

    async store(request, response) {
        // Criar um registro
        const { name, email, phone, category_id } = request.body

        if(!name) {
            return response.status(400).json({error: 'Name is required'})
        }
        const existEmail = await ContactsRepositories.findByEmail(email)

        if(existEmail) {
            return response.status(404).json({ error: 'E-mail is in use' })
        }

        const contact = await ContactsRepositories.create({
            name, email, phone, category_id
        })

        response.status(200).json(contact)
    }

    async update(request, response) {
        // Alterar um registro
        const { id } = request.params
        const { name, email, phone, category_id } = request.body

        const existId = await ContactsRepositories.findById(id);
        if(!existId) {
            return response.status(404).json({error: 'Cannot find id'})
        }

        const existEmail = await ContactsRepositories.findByEmail(email)
        if(existEmail && existEmail.id != id){
            return response.status(404).json({error: 'E-mail in use'})
        }
        
        const contact = await ContactsRepositories.update(id, {
            name, email, phone, category_id
        })
        
        response.status(200).json(contact)
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