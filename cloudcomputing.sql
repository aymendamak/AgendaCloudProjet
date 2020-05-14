-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  jeu. 14 mai 2020 à 14:09
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cloudcomputing`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `userID` int(255) NOT NULL AUTO_INCREMENT,
  `nom` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `prenom` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `login` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`userID`, `nom`, `prenom`, `login`, `password`) VALUES
(1, 'Administrateur', 'Administrateur', 'admin', 'admin'),
(2, 'DELORY', 'Erwan', 'erwan', 'erwan'),
(3, 'BONHOMME', 'Dorian', 'dorian', 'dorian'),
(4, 'DAMAK', 'Aymen', 'aymen', 'aymen');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
