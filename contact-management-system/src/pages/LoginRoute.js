import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../../../models';

export default async function login(req, res) {
  const { email, password } = req.body;

  const user = await db.User.findOne({ where: { email } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token });
}
