const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy
const keys=require('./keysGoogle')
const User=require('../models//userGoogle')

passport.serializeUser((user,done)=>{
        done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})





passport.use(
    new GoogleStrategy({
        //opciones de estrategia de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'/auth/google/redirect'
    },(accessToken,refreshToken,profile,done)=>{
        //funcion callback passport

        console.log(profile)
        //el usuario esta ya registrado con ese email
        User.findOne({googleId:profile.id}).then((eldato)=>{
            if(eldato){
                        console.log('el usuario ya esta registrado en mi base por segundo vez')
                        done(null,eldato)
            }else{
                   
                    new User({
                        googleId:profile.id,
                        username:profile.displayName,
                        thumbnail:profile.photos[0].value
                    })
                    .save()
                    .then((pepe)=>{
                        console.log('el usuario se creo con exito',pepe)
                        done(null,pepe)
                        
                    })
            }
        })


       
    
    })
)


