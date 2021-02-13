const knex = require('../database')

module.exports = {
  async create(req, res, next) {
    try {
      const { name } = req.body

      await knex('pets').insert({
        name
      })

      return res.status(201).json({
        message: 'Pet criado com sucesso!'
      })
    } catch (err) {
      next(err)
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params

      const pet = await knex('pets').where('id', id).first()

      if (!pet) {
        return res.status(404).json({
          message: 'Pet não encontrado!'
        })
      }

      return res.status(200).json(pet)
    } catch (err) {
      next(err)
    }
  },

  async index(req, res, next) {
    try {
      const { id } = req.params

      const pets = await knex('pets')

      return res.status(200).json(pets)
    } catch (err) {
      next(err)
    }
  }
}