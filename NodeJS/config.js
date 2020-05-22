const config = {
    // paramètres de connexion à la base de données
    mysqlHost: 'db',
    //mysqlPort: '8889',
    mysqlDatabase: 'cloudcomputing',
    charset: 'utf8',
    mysqlLogin: 'root',
    mysqlPassword: 'root',

    // les noms des tables
    mysqlUsers: 'utilisateur'
};

// on exporte la config. En l'exportant comme ci-dessous, on pourra utiliser la
// syntaxe suivante pour la charger dans d'autres fichiers :
// const config = require ('./config');
module.exports = config;