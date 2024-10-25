import multer from 'multer';
import csvParser from 'csv-parser';
import fs from 'fs';

const upload = multer({ dest: 'uploads/' });

export default async function uploadContacts(req, res) {
  const contacts = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', (data) => contacts.push(data))
    .on('end', async () => {
      await db.Contact.bulkCreate(contacts);
      res.status(200).json({ message: 'Contacts uploaded' });
    });
}
