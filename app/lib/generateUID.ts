import conn from "./db"

export const generateUID = async (len: number = 5) => {
  const characters: string = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxYyZz0123456789"
  let uid: string = ""

  while (true) {
    for (let index: number = 0; index < len; index++) {
      uid += characters.charAt(Math.floor(Math.random() * characters.length))
    }
  
    const query = 'SELECT count(id) FROM urls WHERE id = $1'
    const res = await conn.query(query, [uid])

    if (res.rows[0]?.count === '0') break
    else uid = ''
  }

  return uid;
}
