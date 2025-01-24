const CategoryRepositories = require('../repositories/CategoryRepositories')

class CategoryController {
    index(request, response) {

    }

    async store(request, response) {
        const { name } = request.body

        if(!name) {
            return response.status(400).json({ error: 'Name is required' })
        }

        const category = await CategoryRepositories.create({ name })
        response.status(200).json(category)
    }

}

module.exports = new CategoryController();