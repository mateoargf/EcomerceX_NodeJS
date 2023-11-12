const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy
const keys=require('./keysGoogle')
const User=require('../models/userGoogle')

passport.serializeUser((user,done)=>{
        done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})

//REGISTRO CON GOOGLE
passport.use(
    new GoogleStrategy({
        //opciones de estrategia de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'http://localhost:3600/user/auth/google/callback',
        scope:['profile','email']
    }, 
    (profile,done)=>{
        //funcion callback passport


        console.log(profile)
        //el usuario esta ya registrado con ese email
        User.findOne({googleId:profile.id}).then((eldato)=>{
            if(eldato){
                        console.log('el usuario ya esta registrado en mi base')
                        done(null,eldato)
            }else{
                   //el usuario no esta registrado en mi base
                    const newUser = new User({
                        // googleId:profile.id,
                        username:profile.displayName,
                        email:profile.emails[0].value,
                    })
                    newUser.save().then((UsuarioGuardado)=>{
                        console.log('el usuario se creo con exito',UsuarioGuardado)
                        done(null,UsuarioGuardado)
                        
                    })
            }
        }).catch((error)=>{
            console.log('error al buscar el usuario en la base de datos',error)
            done(error,null)
        })
    })
)

passport.use(
    new GoogleStrategy({
        //opciones de estrategia de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'http://localhost:3600/user/auth/google/callback',
        scope:['profile','email']
    }, 
    (profile,done)=>{
        //funcion callback passport


        console.log(profile)
        //el usuario esta ya registrado con ese email
        User.findOne({googleId:profile.id}).then((eldato)=>{
            if(eldato){
                        console.log('el usuario ya esta registrado iniciar sesion')
                        done(null,eldato)
            }else{
                   done(null,false)
            }
        }).catch((error)=>{
            console.log('error al buscar el usuario en la base de datos',error)
            done(error,null)
        })


       
    
    })
)

