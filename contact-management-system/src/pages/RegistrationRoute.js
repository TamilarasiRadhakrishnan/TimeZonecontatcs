import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../../../models';

export default async function register(req, res) {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await db.User.create({ email, password: hashedPassword });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'User registration failed' });
  }
}
