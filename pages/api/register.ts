/*import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}*/

export const usersRepo = {
    register
}

function register(user: any) {
    // generate new user id
    //user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user

    alert(user.name + ':' + user.password);
    saveData();
}
function saveData() {
  //fs.writeFileSync('./users.json', JSON.stringify(users, null, 4));
}

