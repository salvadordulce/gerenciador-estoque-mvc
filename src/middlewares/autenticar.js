function protegerRota(request, response, next) {

  console.log('Cliente autenticado com sucesso!', request.session.cliente);
  if(request.session.cliente) {
    next();
  } else {
    response.redirect("/");
  }
}

module.exports = {
  protegerRota
}