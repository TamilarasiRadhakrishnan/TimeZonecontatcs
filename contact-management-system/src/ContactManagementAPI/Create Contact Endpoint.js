// pages/api/contacts/add.js
import db from '../../../models';

export default async function addContact(req, res) {
  const { name, email, phone, address, timezone } = req.body;
  try {
    const contact = await db.Contact.create({
      name,
      email,
      phone,
      address,
      timezone,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create contact' });
  }
}
