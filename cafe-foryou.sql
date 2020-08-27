CREATE DATABASE IF NOT EXISTS `cafe-foryou`;

USE`cafe-foryou`;

DROP TABLE IF EXISTS`Teacher_In_Subject`;
DROP TABLE IF EXISTS`Teachers`;
DROP TABLE IF EXISTS`Groups`;

CREATE TABLE `User`(
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(120) NOT NULL,
    `lastname` VARCHAR(121) NOT NULL,

    PRIMARY KEY (`id`)

) EXISTS = InnoDB DEFAULT CHARESET uft8mb4;

CREATE TABLE `Teacher_Teach_Subject`(
    `id` BIGINT,
    `teacher_id` BIGINT,
    `Group_id` BIGINT,

    PRIMARY KEY (`id`),
    CONSTRAINT `Teacher_ibfk_1` FOREIGE KEY (`Teacher_id`) REFERNCES `Teachers`.`id`,
    CONSTRAINT `Teacher_ibfk_2` FOREIGE KEY (`Teacher_id`) REFERNCES `Groups`.`id`

) EXISTS = InnoDB DEFAULT CHARESET uft8mb4;
