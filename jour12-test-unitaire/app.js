// lancer un terminal et se positionner dans le dossier jour12-test-
// pour pouvoir réaliser des test unitaire 
// nous allons installer une librairie qui s'appelle jest 
// npm init --yes
// cette première commande permet de créer un fichier package.json 
// npm i -D jest
// cette deuxieme commande permet d'installer la librairie qui va nous permettre de réaliser des tests 
// jest est une librairie de développement 
// c'est à dire une librairie qui ne doit être disponible et installée QUe sur l'environnement de développement
// cette librairie NE DOIT PAS etre envoyée sur Netlify 

// il s'agit de la commande -D de la commande npm i -D jest 

// modifier le package.json dans la propriété scripts
// "test" : "jest --watchAll"
// cette modification dans le fichier package.json 
// va permettre de pouvoir lancer jest 
// npm run test
// saisir dans le terminal la commande npm run test 
// fini de préparer 

function hello(){
    return "hello" ; 
}
