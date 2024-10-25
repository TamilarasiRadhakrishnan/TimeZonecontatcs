import Joi from 'joi';

const registrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default async function register(req, res) {
  const { error } = registrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  // Continue with registration process...
}
