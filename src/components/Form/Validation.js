

// export default function validation (inputs){
//   let errors={};
//   const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   const regexPassword = /^(?=.*?[a-z])(?=.*[0-9]).{6,10}$/;
  
//   // const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//   // --- Username ---
//   if(!inputs.username) errors.username = "Por favor, complete este campo.";
//   else if(inputs.username.length > 35) errors.username = "Nombre de usuario demaciado largo.";
//   else if(!regexEmail.test(inputs.username)) errors.username = "El nombre de usuario deber ser un email valido.";
//   // --- Password ---
//   if(!inputs.password) errors.password = "Se requiere una password valida";
//   else if(inputs.password.length > 10) errors.password = "La contraseña es demaciado larga.";
//   else if(inputs.password.length < 6) errors.password = "La contraseña es demaciado corta.";
//   else if(!regexPassword.test(inputs.password)) errors.password = "La contraseña debe tener almenos un numero.";
  
//   return errors;
// }


const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*[0-9]).{6,10}$/;

export default function validation(inputs) {
  let errors = {}

  if(!regexUsername.test(inputs.username)) {
    inputs.username = 'El nombre de usuario tiene que ser un mail.'}
  else if(!inputs.username) errors.username = 'El nombre de usuario no puede estar vacío.'
  else if(inputs.username.length > 35) {
    errors.username = 'El nombre de usuarion no puede tener más de 35 caracteres.'
  }
  if(!regexPassword.test(inputs.password)) {
    errors.password = 'La contraseña tiene que tener al menos un número'
  }
  else if(inputs.password.length < 6 && inputs.password.length > 10) {
    errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
  }

  return (
        errors
    )
}
