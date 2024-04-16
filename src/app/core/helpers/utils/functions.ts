export function generateRandomId() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let randomId = '';
  for (let i = 0; i < 8; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return randomId;
}
