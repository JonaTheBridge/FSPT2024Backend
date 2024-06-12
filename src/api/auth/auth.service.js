import * as usersRepository from '../users/users.repository.js';
import { hashSync, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

function getToken({ username, }) {
  const payload = { username, };
  // eslint-disable-next-line no-undef
  const { AUTH_SECRET_KEY, AUTH_EXPIRES_IN, } = process.env;
  const token = jwt.sign(payload, AUTH_SECRET_KEY, {
    expiresIn: AUTH_EXPIRES_IN, // in secs
  });

  return token;
}

async function register({ newUser, }) {
  const { username, password, } = newUser;
  const dbUser = await usersRepository.getByUsername({ username, });
  if (dbUser) {
    throw new Error('This username already exists');
  }

  const hashedPassword = hashSync(password, 10);
  newUser.password = hashedPassword;

  usersRepository.create({ user: newUser, });
  return getToken({ username, });
}

async function login({ user, }) {
  const { username, password, } = user;
  const dbUser = await usersRepository.getByUsername({ username, });
  if (!dbUser) {
    throw new Error('Wrong credentials');
  }

  const isSamePassword = compareSync(password, dbUser.password);
  if (!isSamePassword) {
    throw new Error('Wrong credentials');
  }

  return getToken({ username, });
}

export { register, login };
