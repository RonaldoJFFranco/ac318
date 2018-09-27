-- MySQL Script generated by MySQL Workbench
-- Thu Sep 27 11:49:23 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`avaliador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`avaliador` (
  `id_avaliador` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_avaliador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`atividade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`atividade` (
  `id_atividade` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `dificuldade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_atividade`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sala` (
  `id_sala` INT NOT NULL,
  `pin` VARCHAR(45) NOT NULL,
  `avaliador_id_avaliador` INT NOT NULL,
  PRIMARY KEY (`id_sala`, `avaliador_id_avaliador`),
  INDEX `fk_sala_avaliador1_idx` (`avaliador_id_avaliador` ASC),
  CONSTRAINT `fk_sala_avaliador1`
    FOREIGN KEY (`avaliador_id_avaliador`)
    REFERENCES `mydb`.`avaliador` (`id_avaliador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`atividade_has_avaliador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`atividade_has_avaliador` (
  `atividade_id_atividade` INT NOT NULL,
  `avaliador_id_avaliador` INT NOT NULL,
  PRIMARY KEY (`atividade_id_atividade`, `avaliador_id_avaliador`),
  INDEX `fk_atividade_has_avaliador_avaliador1_idx` (`avaliador_id_avaliador` ASC),
  INDEX `fk_atividade_has_avaliador_atividade1_idx` (`atividade_id_atividade` ASC),
  CONSTRAINT `fk_atividade_has_avaliador_atividade1`
    FOREIGN KEY (`atividade_id_atividade`)
    REFERENCES `mydb`.`atividade` (`id_atividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atividade_has_avaliador_avaliador1`
    FOREIGN KEY (`avaliador_id_avaliador`)
    REFERENCES `mydb`.`avaliador` (`id_avaliador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sala_has_atividade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sala_has_atividade` (
  `sala_id_sala` INT NOT NULL,
  `sala_avaliador_id_avaliador` INT NOT NULL,
  `atividade_id_atividade` INT NOT NULL,
  PRIMARY KEY (`sala_id_sala`, `sala_avaliador_id_avaliador`, `atividade_id_atividade`),
  INDEX `fk_sala_has_atividade_atividade1_idx` (`atividade_id_atividade` ASC),
  INDEX `fk_sala_has_atividade_sala1_idx` (`sala_id_sala` ASC, `sala_avaliador_id_avaliador` ASC),
  CONSTRAINT `fk_sala_has_atividade_sala1`
    FOREIGN KEY (`sala_id_sala` , `sala_avaliador_id_avaliador`)
    REFERENCES `mydb`.`sala` (`id_sala` , `avaliador_id_avaliador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sala_has_atividade_atividade1`
    FOREIGN KEY (`atividade_id_atividade`)
    REFERENCES `mydb`.`atividade` (`id_atividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
