const JwtStrategegy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("User", userSchema);
const dotenv = require('dotenv');
dotenv.config();


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategegy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload._id)
            .then(User => {
                if(User) {
                    return done(null,User);
                }
                return done(null,false);
            })
            .catch(err => console.log(err));
        })
    );
};