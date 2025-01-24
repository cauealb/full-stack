const CategoryRepositories = require('../repositories/CategoryRepositories')

class CategoryController {
    index(request, response) {

    }

    store(request, response) {
        const { name } = request.body

        if(!name) {
            return response.status(400).json({ error: 'Name is required' })
        }


    }

}

module.exports = new CategoryController();