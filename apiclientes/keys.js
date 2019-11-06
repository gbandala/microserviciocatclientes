//const DbConnection='mongodb://localhost:27017/galeria';
//cuando se pase al contenedor cambiar localhost al nombre del servidor (contenedor) del compose
const DbConnection='mongodb://mongoserver:27017/galeria';
exports.conn=DbConnection;