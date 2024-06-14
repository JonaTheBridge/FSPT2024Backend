function roleMiddleware(req, res, next, allowedRoles) {
  const isAllowed = allowedRoles.includes(req.user.role);
  if (!isAllowed) {
    res.status(401);
    res.json({ error: 'Unauthorized', });
    return;
  }

  next();
}

export default roleMiddleware;
