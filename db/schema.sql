DROP DATABASE IF EXISTS ClientDirectory;

CREATE DATABASE ClientDirectory;

USE ClientDirectory;

CREATE TABLE contactForm (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR (60) NULL,
  phone VARCHAR(25) NULL,
  message VARCHAR (1000) NOT NULL,
  date_entered TIMESTAMP
);