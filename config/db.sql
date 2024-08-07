-- create database
CREATE DATABASE sticky_notes;

USE sticky_notes
-- create table users in sticky_notes
CREATE TABLE `users` (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    email varchar(200) NOT NULL,
    password varchar(50) NOT NULL,
    PRIMARY KEY (id)
);
-- create table notes in sticky_notes
CREATE TABLE `notes` (
    id int(11) NOT NULL AUTO_INCREMENT,
    body varchar(500) DEFAULT NULL,
    colors varchar(200) DEFAULT NULL,
    position varchar(100) DEFAULT NULL,
    userId int(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
-- create table titles in sticky_notes
CREATE TABLE `titles` (
    id int(11) NOT NULL AUTO_INCREMENT,
    title varchar(200) DEFAULT NULL,
    fontSize varchar(30) DEFAULT NULL,
    color varchar(30) DEFAULT NULL,
    position varchar(100) DEFAULT NULL,
    userId int(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
-- insert data into users table in sticky_notes

INSERT INTO
    `users` (name, email, password)
VALUES (
        'Ibrahim',
        "ibrahim@gmail.com",
        "12345678"
    );

