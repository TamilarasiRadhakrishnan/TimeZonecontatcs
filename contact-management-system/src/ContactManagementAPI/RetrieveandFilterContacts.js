// pages/api/contacts/get.js
import db from '../../../models';

export default async function getContacts(req, res) {
  const { filter } = req.query;

  const contacts = await db.Contact.findAll({
    where: filter ? { name: filter } : {},
    order: [['createdAt', 'DESC']],
  });
  res.json(contacts);
}
