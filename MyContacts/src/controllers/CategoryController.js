const CategoryRepositories = require('../repositories/CategoryRepositories')

class CategoryController {
    async index(request, response) {
        const { orderBy } = request.query;
        const categories = await CategoryRepositories.findAll(orderBy)
        response.status(200).json(categories)
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