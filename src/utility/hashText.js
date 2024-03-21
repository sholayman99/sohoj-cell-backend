const bcrypt = require('bcrypt');


async function hashText (text){

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(text,salt);
        return hash;
    }
    catch (e) {
        console.log(e.message);
    }

}

module.exports = hashText;