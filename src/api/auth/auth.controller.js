import * as authService from './auth.service.js';

async function register(req, res) {
  const newUser = req.body;
  if (!newUser.username || !newUser.password) {
    res.status(400);
    res.json({ error: 'ERROR: The username and password params are required', });
    return;
  }

  try {
    const token = await authService.register({ newUser, });
    res.json(token);
  } catch(err) {
    res.status(400);
    res.json({ error: err.message, });
  }
}

async function login(req, res) {
  const user = req.body;
  if (!user.username || !user.password) {
    res.status(400);
    res.json({ error: 'ERROR: The username and password params are required', });
    return;
  }

  try {
    const token = await authService.login({ user, });
    res.json(token);
  } catch(err) {
    res.status(400);
    res.json({ error: err.message, });
  }
}

export { register, login };
