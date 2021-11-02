const jwt = require("jsonwebtoken");
const { hash, compare } = require('../helpers/bcrypt');
const pg_poole = require("../helpers/pg_db_config");

exports.register =  () => {
    const {
        first_name = '',
        last_name = '',
        email = '',
        password = '',
        shop_name = '',
        address1 = '',
        address2 = '',
        city = '',
        state = '',
        country = '',
        zip = '',
        api_key = '',
        api_password = '',
        api_url = '',
        api_secret = '',
        created_at = '',
        status = '',
        phone = '',
        plan = ''
    } = data;
    console.log('register data',data)



}
