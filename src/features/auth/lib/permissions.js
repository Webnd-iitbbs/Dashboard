export function isMentor(user) {
  return user?.isMentor === true;
}

export function isAdmin(user) {
  return (
    user?.email ===
    process.env.SUPER_ADMIN_EMAIL
  );
}