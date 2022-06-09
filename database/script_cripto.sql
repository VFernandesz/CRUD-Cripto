DROP SCHEMA IF EXISTS `CriptoDatabase` ;
CREATE SCHEMA IF NOT EXISTS `CriptoDatabase`;
USE `CriptoDatabase`;

CREATE TABLE IF NOT EXISTS `CriptoDatabase`.`cripto` (
  `id_cripto` INT NOT NULL AUTO_INCREMENT,
  `nm_cripto` VARCHAR(45) NOT NULL,
  `ds_cripto` TEXT(100) NOT NULL,
  `qt_cotacao_cripto` INT NOT NULL,
  `dt_inclusao_cripto` DATE NOT NULL,
  `dt_update_cripto` DATE NULL,
  PRIMARY KEY (`id_cripto`));
  
  INSERT INTO cripto(nm_cripto,ds_cripto,qt_cotacao_cripto,dt_inclusao_cripto) VALUES ('bitcoin', 'Criada por Satoshi Nakamoto', 14195830, current_date());
  INSERT INTO cripto (nm_cripto,ds_cripto,qt_cotacao_cripto,dt_inclusao_cripto)VALUES ('ethereum', 'Capaz de executar contratos inteligentes', 842262, current_date());
  INSERT INTO cripto (nm_cripto,ds_cripto,qt_cotacao_cripto,dt_inclusao_cripto)VALUES ('litecoin', 'Popular entre comerciantes', 29463, current_date());
  
  


