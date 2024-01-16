export const generateUID = (len: number = 5) => {
    const characters: string = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxYyZz0123456789"
    let uid: string = ""

    for (let index: number = 0; index < len; index++) {
        uid += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return uid;
}
