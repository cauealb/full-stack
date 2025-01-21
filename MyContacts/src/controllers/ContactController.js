class ContactController {
    index(request, response) {
        response.send('Você entrou na rota de get!!')
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