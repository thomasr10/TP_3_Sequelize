import bcrypt from 'bcrypt';

const passwordHasher = async (userPassword) => {
    
    try {
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        return hashedPassword;

    } catch (e) {
        console.error(e);
        return;
    }
}

export default passwordHasher;