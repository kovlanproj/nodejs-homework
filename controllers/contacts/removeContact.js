const { NotFound } = require('http-errors');

const {Contact} = require('../../models');

const removeContact = async (req, res, next) => {
const {contactId} = req.params;
const result = await Contact.findByIdAndRemove(contactId);
if (!result) {
    throw new NotFound(`Product with id=${contactId} not found`)
}
res.json({
          status: 'succcess',
          code: 200,
          message: "product deleted",
          data: { result },
        });
};

module.exports = removeContact