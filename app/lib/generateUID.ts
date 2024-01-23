import prisma from "./prisma"

export const generateUID = async (len: number = 5) => {
  const characters: string = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxYyZz0123456789"
  let uid: string = ""

  while (true) {
    for (let index: number = 0; index < len; index++) {
      uid += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    
    const res = await prisma.urls.count({
      where: {
        id: uid
      }
    })

    console.log(res)
    if (res === 0) break
    else uid = ''
  }

  return uid;
}
