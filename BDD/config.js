const config = {
    // paramètres de connexion à la base de données
    mysqlHost: '127.0.0.1',
    mysqlPort: '8889',
    mysqlDatabase: 'bddRDVagenda',
    charset: 'utf8',
    mysqlLogin: 'root',
    mysqlPassword: 'root',

    // les noms des tables
    mysqlUsers: 'rdv'
};

// on exporte la config. En l'exportant comme ci-dessous, on pourra utiliser la
// syntaxe suivante pour la charger dans d'autres fichiers :
// const config = require ('./config');
module.exports = config;