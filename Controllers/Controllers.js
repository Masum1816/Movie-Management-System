
const DefaultController = (req, res) => {

    console.log("DEFAULT CONTROLLER");

    res.render('index');

}

const LogInController = (req, res) => {

    console.log("LOGIN CONTROLLER");

    res.render('logIn');

}

const SignUpController = (req, res) => {

    console.log("SIGNUP CONTROLLER");

    res.render('signUp');

}

module.exports = { DefaultController, LogInController, SignUpController };








