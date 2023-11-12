const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy
const keys=require('./keysGoogle')
const User=require('../models/userGoogle')

passport.serializeUser((user,done)=>{
console.log('serializeUser',user)
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    console.log('deserializeUser',id)
    User.findById(id).then((user)=>{
        done(null,user)
    }).catch((error)=>{
        console.log('error al buscar el usuario en la base de datos',error)
        done(error,null)
    })

})



//REGISTRO CON GOOGLE
passport.use(
    'registroGoogle',
    new GoogleStrategy({
        //opciones de estrategia de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'http://localhost:3600/user/auth/google/callback',
        scope:['profile','email']
    }, 
    async(profile,done)=>{
        try{
        //funcion callback passport
        //array de scopes
        console.log(profile.id)
        //guardar el usuario en la base de datos

    

        //el usuario esta ya registrado con ese email
        const eldato=await User.findOne({googleId:profile.id});
          

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
                    const Usuarioguardado= await newUser.save();
                    console.log('el usuario se creo con exito',Usuarioguardado)
                    done(null,Usuarioguardado)
                        
                    
            }
        } catch(error){
            console.log('error al buscar el usuario en la base de datos',error)
            done(error,null);}
        })
    )


passport.use(
    'loginGoogle',
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

