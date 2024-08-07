-- create database
CREATE DATABASE sticky_notes;

USE sticky_notes
-- create table sticky_notes
CREATE TABLE `users` (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    email varchar(200) NOT NULL,
    password varchar(50) NOT NULL,
    PRIMARY KEY (id)
);
-- insert data into table sticky_notes

INSERT INTO
    `users` (name, email, password)
VALUES (
        'Ibrahim',
        "ibrahim@gmail.com",
        "12345678"
    );