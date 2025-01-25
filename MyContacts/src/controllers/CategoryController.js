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

    async update(request, response) {
        const { id } = request.params;

        const category = await CategoryRepositories.update(id);
        response.status(200).json(category)
    }

    delete(request, response) {

    }
}

module.exports = new CategoryController();