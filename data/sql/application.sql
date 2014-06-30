CREATE DATABASE `fui`;

CREATE TABLE `fui`.`application` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(32) NOT NULL,
  `json` text,
  PRIMARY KEY (`id`),
  KEY `token` (`token`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

GRANT ALL PRIVILEGES ON `fui`.* TO 'fui'@'%' IDENTIFIED BY 'password';