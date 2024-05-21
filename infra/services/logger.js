const winston = require('winston');
const path = require('path');

// Configuração do nome do arquivo de log
const logFileName = path.join(__dirname, "logs/error.log");

// Definição dos níveis de log
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

// Definição das cores dos níveis de log
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white"
};

// Função para determinar o nível de log com base no ambiente
function level() {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
}

// Adicionando as cores aos níveis
winston.addColors(colors);

// Definição do formato de log
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

// Definição dos transportes de log
const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: logFileName,
    level: 'error' // grava somente logs de erro neste arquivo
  }),
  new winston.transports.File({
    filename: path.join(__dirname, 'logs/all-logs.log'), // grava todos os logs neste arquivo
  })
];

// Criação do logger
const Logger = winston.createLogger({
  level: level(),
  levels: levels,
  format: format,
  transports: transports
});

module.exports = {
  Logger
};
