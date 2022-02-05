const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug";

logger.info("La aplicacion inicio correctamente");
logger.warn("Alerta Libreria X no encontrara");
logger.error("Funcion Y no encontrada");
logger.fatal("No se pudo iniciar la aplicacion");

function sumar(x, y) {
  return x + y;
}


module.exports = sumar;




