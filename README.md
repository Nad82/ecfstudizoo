# ecfstudizoo

L'ECF du zoo Arcadia

##Diagrammes

[diagramme MCD](https://github.com/user-attachments/assets/6443048a-4fa0-4f7d-af6f-1703dfa1e4f0)


[Diagramme de sequence zoo Arcadia.drawio.pdf](https://github.com/user-attachments/files/17081167/Diagramme.de.sequence.zoo.Arcadia.drawio.pdf)


[Diagramme en cas utilisation zoo.drawio (3).pdf](https://github.com/user-attachments/files/17081274/Diagramme.en.cas.utilisation.zoo.drawio.3.pdf)

[Uploading Diagramme de classes.drawio…]()




##Gestion de projet

https://trello.com/invite/b/661ffd51dcf5a8e5a9e8fa18/ATTI13706de2ae688d66b4b33e4913ddeefcD9493837/gestion-de-projet-zoo-arcadia

##Fichiers SQL


#Création de tables


[Uploading Ccreate table studizoo.User (
id INT primary key auto_increment not null,
email VARCHAR (70) not null unique,
password VARCHAR (20),
email_verified DATETIME,
created_at DATETIME,
updated_at DATETIME,
role_id INT not null, 
foreign key (role_id) references Role (id)
); 

create table studizoo.Role (
id INT primary key auto_increment not null,
nom VARCHAR(20)
); 

create table studizoo.Account (
id INT primary key auto_increment not null,
type VARCHAR(255),
provider VARCHAR(255),
provider_accountId VARCHAR (255),
refresh_token VARCHAR (255),
access_token VARCHAR (255),
expire_at INT,
token_type VARCHAR (255),
scope VARCHAR (255),
id_token TEXT,
session_state VARCHAR (255),
refresh_token_expire_in INT,
user_id INT not null unique, 
foreign key (user_id) references User (id)
);

create table studizoo.Session (
id INT primary key auto_increment not null,
session_token VARCHAR(255) unique,
expires DATETIME,
created_at DATETIME,
updated_at DATETIME,
user_id INT not null unique,
foreign key (user_id) references User (id)
); 

create table studizoo.Verification_token (
id INT primary key auto_increment not null,
token VARCHAR(255),
expires DATETIME
); 

create table studizoo.Horaires (
id INT primary key auto_increment not null,
description TEXT
);

create table studizoo.Avis (
id INT primary key auto_increment not null,
pseudo VARCHAR (40),
commentaires VARCHAR (255),
published BOOLEAN
);

create table studizoo.Services (
id INT primary key auto_increment not null,
nom VARCHAR(40),
description TEXT
);

create table studizoo.Habitat (
id INT primary key auto_increment not null,
nom VARCHAR (40),
description TEXT
);

create table studizoo.Animal (
id INT primary key auto_increment not null,
prenom VARCHAR (40),
race VARCHAR (40),
habitatId INT,
foreign key (habitatId) references Habitat(id)
);

create table studizoo.Image_habitat(
id INT primary key auto_increment not null,
habitatId INT,
nom VARCHAR(255),
foreign key (habitatId) references Habitat(id)
);

create table studizoo.Image_animal (
id INT primary key auto_increment not null,
nom VARCHAR(255),
animalId INT,
foreign key (animalId) references Animal(id)
);

create table studizoo.Consommation_animal (
id INT primary key auto_increment not null,
nourriture VARCHAR (40),
quantite INT,
heure DATETIME,
animalId INT,
foreign key (animalId) references Animal(id)
);

create table studizoo.Compte_rendu (
id INT primary key auto_increment not null,
etat VARCHAR (40),
nourriture VARCHAR (40),
quantite_nourriture INT,
heure_passage DATETIME,
animalId INT,
foreign key (animalId) references Animal(id)
);

create table studizoo.Etat_habitat (
id INT primary key auto_increment not null,
commentaires TEXT,
amelioration BOOLEAN,
habitatId INT,
foreign key (habitatId) references Habitat(id)
);
reation table studizoo.sql…]()


#Fixtures des tables


[Uploading Fixtures stuINSERT INTO studizoo.Animal
(id, prenom, race)
VALUES
(0, 'Medor', 'Lion'),
(0, 'Lala', 'Singe'),
(0, 'Momo', 'Crocodile'),
(0, 'Lolo', 'Girafe'),
(0, 'Gallia', 'Ara'),
(0, 'Riri', 'Tortue');

INSERT INTO studizoo.Avis
(id, pseudo, commentaires, published)
values
(0, 'Magalie68', 'Heureuse d avoir passé un moment de qualité et de bien-être avec mes propres de ce suberbe parc!', 0),
(0, 'Paul49', 'Super zoo, on voit que les animaux sont bien traités!!', 0),
(0, 'Kiki', 'Un moment agréable et de communion familiale, à refaire!', 0);

INSERT INTO studizoo.Compte_rendu
(id, etat, nourriture, quantite_nourriture, heure_passage)
VALUES
(0, 'bon', 'feuilles', 0, '2024-07-07 8:20:40'),
(0, 'bon', 'viande', 0, '2024-07-07 8:25:40'),
(0, 'malade', 'poisson', 0, '2024-07-07 8:30:40'),
(0, 'bon', 'insectes', 0, '2024-07-07 8:40:40');

INSERT INTO studizoo.Consommation_animal
(id, nourriture, quantite, heure)
VALUES
(0, 'feuilles', 0, '2024-07-07 8:20:40'),
(0, 'viande', 0, '2024-07-07 8:25:40'),
(0, 'poisson', 0, '2024-07-07 8:30:40'),
(0, 'insectes', 0, '2024-07-07 8:40:40');

INSERT INTO studizoo.Etat_habitat
(id, commentaires, amelioration)
VALUES
(0, 'bon', 0),
(0, 'très sale', 0),
(0, 'Revoir l arrivée d eau ', 0),
(0, 'bon', 0);

INSERT INTO studizoo.Habitat
(id,nom, description)
VALUES
(0, 'Savane', 'Dans cette plaine de 2 hectares, Vous pourrez rencontrez nos animaux emblématiques.'),
(0, 'Jungle', 'Ecosystème unique où petit et grand pourront découvrir rencontrer et découvrir les animaux propres à cette environnemant.'),
(0, 'Marais', 'Environnement incontournable à découvrir ou à redécouvrir');

INSERT INTO studizoo.`role`
(id, nom)
VALUES(0, 'administrateur'),
(0, 'employe'),
(0, 'veterinaire');

INSERT INTO studizoo.Services
(id, nom, description)
VALUES(0, 'Restauration', 'Pendant votre visite, vous avez une petite faim. Venez découvrir les saveurs du restaurants du zoo: une cuisine française et gastronomique.'),
(0, 'Visite du zoo avec un guide', 'Profitez du guide expérimenté de notre zoo. Il vous présentera les moindres recoins du zoo et chaque animal de chaque habitat.'),
(0, 'Visite du zoo en petit train', 'Petit et grand ont la possibilité de visiter le zoo en petit train. Le tarif est avantageux selon la catégorie des usagers.');

INSERT INTO studizoo.horaires
(id, description)
VALUES(0, 'Ouvert 7 jours sur 7 de 9h à 18h Même les jours fériés');

insert into studizoo.`user` 
(id, email, password, email_verified, created_at, updated_at, role_id)
values(0, 'adminstudizoo@hotmail.com', 'BeteArgentee40', '2024-07-07 8:40:40', '2024-07-07 8:40:40', '2024-07-07 8:40:40', 2);


dizoo.sql…]()



##Manuel d'utilisation



##Les Personas


[Persona site vitrine zoo Arcadia.docx](https://github.com/user-attachments/files/17081111/Persona.site.vitrine.zoo.Arcadia.docx)




## Charte graphique


[Charte graphique zoo Arcadia.pdf](https://github.com/user-attachments/files/17081139/Charte.graphique.zoo.Arcadia.pdf)



##Maquettes



[Zoo Arcadia Mockups.pdf](https://github.com/user-attachments/files/17081144/Zoo.Arcadia.Mockups.pdf)




[Maquettes zoo Arcadia.pdf](https://github.com/user-attachments/files/17081154/Maquettes.zoo.Arcadia.pdf)




##Copie ECF


[copie à rendre ECF studi.pdf](https://github.com/user-attachments/files/17081100/copie.a.rendre.ECF.studi.pdf)





##Déploiement
his is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
