const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy
const keys=require('./keysGoogle')
const UserGoogle=require('./../models/userGoogle');
// const mongoose = require('mongoose');




//REGISTRO CON GOOGLE
passport.use('registroGoogle',new GoogleStrategy({
        //opciones de estrategia de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'http://localhost:3600/user/auth/google/callback',
        scope: ['email', 'profile']
        
    }, async(accessToken,refreshToken,profile,done)=>{
        console.log("profile",profile)
        let nuevoUsuario=false;
        
        try {   
            // Verificar si el usuario ya existe en tu base de datos por su correo electrónico
            
            googleId=profile.id;
            const user = await UserGoogle.findOne({googleId});
            //nuevousuario por defecto false
            

            if (!user) {
              // Si el mail no existe, créalo en tu base de datos
                const newUser=await UserGoogle.create({ 
                    username:profile.displayName,
                    email:profile.emails[0].value,
                    googleId
                });
                nuevoUsuario=true;
                // res.redirect('/user/registroExitoso')
                console.log('el usuario se creo con exito',newUser)
                done(null,newUser,{nuevoUsuario})
            }else{
                //variable resultadobusqueda = a true
                
                console.log('el usuario ya esta registrado. iniciar sesion')
                // res.render('/googleCallback',{resultadoBusqueda:true})
                console.log('user',user)
                nuevoUsuario=false;
                done(null,user,{nuevoUsuario})
                
            }
        
        }catch(error){
            console.log('error al guardar el usuario en la base de datos',error)
            done(error,null,{nuevoUsuario:null})};
        }
    ));

             
             
        //      user = await User.create({
        //         googleId: profile.id,
        //         userName: profile.displayName,
        //         email: profile.emails[0].value,
        //         // Otros datos necesarios
        //       });
        //     }
        //     console.log("user",user)
        //     // Devuelve el usuario
        //     done(null, user);
        //   } catch (error) {
        //     done(error, null);
        //   }}));
          passport.serializeUser((user,done)=>{
            console.log('serializeUser',user)
                done(null,user.id)
            })
           
            passport.deserializeUser((id,done)=>{
                
               UserGoogle.findById({_id:id})
               .then((user)=>{
                   if(!user){
                       return done(new Error('usuario no encontrado'),null)
                  }
                   done(null,user);
                })
              .catch((error)=>{
                    console.log('error al buscar el usuario en la base de datos',error)
                    done(error,null)
               })
            
            }
            )      

       
  
//     async(accessToken,refreshToken,profile,done)=>{
//         console.log("profile",profile)

//         try{
//         //el usuario esta ya registrado con ese email
//         const eldato=await User.findOne({googleId:profile.id});

//             if(eldato){
//                 console.log('el usuario ya esta registrado en mi base')
//                 done(null,eldato)
//             }else{
//                 const newUser = new User({
//                 username:profile.displayName,
//                 email:profile.emails[0].value,});
//                 const usuarioGuardado= await newUser.save();
//                 console.log('el usuario se creo con exito',usuarioGuardado)
//                 done(null,usuarioGuardado);
//                 }
//         }catch(error){
//                 console.log('error al guardar el usuario en la base de datos',error)
//                 done(error,null);
//             }
//     })
// );



// passport.use(
//     'loginGoogle',
//     new GoogleStrategy({
//         //opciones de estrategia de google
//         clientID:keys.google.clientID,
//         clientSecret:keys.google.clientSecret,
//         callbackURL:'http://localhost:3600/user/auth/google/callback',
//         scope:['profile','email']
//     }, 
//     (profile,done)=>{
//         //funcion callback passport


//         console.log(profile)
//         //el usuario esta ya registrado con ese email
//         User.findOne({googleId:profile.id}).then((eldato)=>{
//             if(eldato){
//                         console.log('el usuario ya esta registrado iniciar sesion')
//                         done(null,eldato)
//             }else{
//                    done(null,false)
//             }
//         }).catch((error)=>{
//             console.log('error al buscar el usuario en la base de datos',error)
//             done(error,null)
//         })


       
    
//     })
// )

module.exports = {passport} ;
