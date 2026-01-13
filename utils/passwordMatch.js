import bcrypt from 'bcrypt';

const passwordMatch = async (password, userPassword) => {
    try {

        const isValid = await bcrypt.compare(password, userPassword);
        return isValid;
    } catch (e) {
        console.error(`Error comparing passwords : ${e}`);
        return false;
    }
}

export default passwordMatch;