-- CreateTable
CREATE TABLE `accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NULL,
    `provider` VARCHAR(255) NULL,
    `provider_accountId` VARCHAR(255) NULL,
    `refresh_token` VARCHAR(255) NULL,
    `access_token` VARCHAR(255) NULL,
    `expireAt` INTEGER NULL,
    `token_type` VARCHAR(255) NULL,
    `scope` VARCHAR(255) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(255) NULL,
    `refresh_token_expire_in` INTEGER NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(40) NOT NULL,
    `race` VARCHAR(40) NOT NULL,
    `habitat` VARCHAR(40) NOT NULL,
    `image_animal_id` INTEGER NULL,
    `compte_rendu_id` INTEGER NULL,
    `consommation_animal_id` INTEGER NULL,

    INDEX `image_animal_id`(`image_animal_id`),
    INDEX `compte_rendu_id`(`compte_rendu_id`),
    INDEX `consommation_animal_id`(`consommation_animal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(40) NOT NULL,
    `commentaires` TEXT NOT NULL,
    `published` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compte_rendus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etat` VARCHAR(40) NOT NULL,
    `nourriture` VARCHAR(50) NOT NULL,
    `grammage_nourriture` INTEGER NOT NULL,
    `heure_passage` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consommation_animals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nourriture` VARCHAR(40) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `date` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etat_habitats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `commentaires` TEXT NOT NULL,
    `amelioration` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `habitats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(40) NOT NULL,
    `description` TEXT NOT NULL,
    `image_habitat_id` INTEGER NOT NULL,
    `etat_habitat_id` INTEGER NOT NULL,

    INDEX `image_habitat_id`(`image_habitat_id`),
    INDEX `etat_habitat_id`(`etat_habitat_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_animals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_habitats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(20) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(40) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `session_token` VARCHAR(255) NULL,
    `expires` DATETIME(0) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `session_token`(`session_token`),
    UNIQUE INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(40) NOT NULL,
    `password` VARCHAR(20) NULL,
    `email_verified` DATETIME(0) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,
    `role_id` INTEGER NOT NULL,

    UNIQUE INDEX `username`(`username`),
    INDEX `role_id`(`role_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification_token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(255) NULL,
    `expires` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_ibfk_1` FOREIGN KEY (`image_animal_id`) REFERENCES `image_animals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_ibfk_2` FOREIGN KEY (`compte_rendu_id`) REFERENCES `compte_rendus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_ibfk_3` FOREIGN KEY (`consommation_animal_id`) REFERENCES `consommation_animals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `habitats` ADD CONSTRAINT `habitats_ibfk_1` FOREIGN KEY (`image_habitat_id`) REFERENCES `image_habitats`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `habitats` ADD CONSTRAINT `habitats_ibfk_2` FOREIGN KEY (`etat_habitat_id`) REFERENCES `etat_habitats`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

