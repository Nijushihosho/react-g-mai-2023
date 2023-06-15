function genererTitre( date ){
    const dt_fr = new Intl.DateTimeFormat("fr-FR").format(date);
    return `<h1>article publié le ${dt_fr}</h1>`;
}
// cd jour12-test-unitaire
// npx jest --watchAll
// npm run test

module.exports.genererTitre = genererTitre
