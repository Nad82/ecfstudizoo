-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NULL,
    `provider` VARCHAR(255) NULL,
    `provider_accountId` VARCHAR(255) NULL,
    `refresh_token` VARCHAR(255) NULL,
    `access_token` VARCHAR(255) NULL,
    `expire_at` INTEGER NULL,
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
CREATE TABLE `animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(40) NULL,
    `race` VARCHAR(40) NULL,
    `habitatId` INTEGER NULL,

    INDEX `habitatId`(`habitatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(40) NULL,
    `commentaires` VARCHAR(255) NULL,
    `published` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compte_rendu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etat` VARCHAR(40) NULL,
    `nourriture` VARCHAR(40) NULL,
    `quantite_nourriture` INTEGER NULL,
    `heure_passage` DATETIME(0) NULL,
    `animalId` INTEGER NULL,

    INDEX `animalId`(`animalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consommation_animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nourriture` VARCHAR(40) NULL,
    `quantite` INTEGER NULL,
    `heure` DATETIME(0) NULL,
    `animalId` INTEGER NULL,

    INDEX `animalId`(`animalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etat_habitat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `commentaires` TEXT NULL,
    `amelioration` BOOLEAN NULL,
    `habitatId` INTEGER NULL,

    INDEX `habitatId`(`habitatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `habitat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(40) NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horaires` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` BLOB NULL,
    `animalId` INTEGER NULL,

    INDEX `animalId`(`animalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_habitat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `habitatId` INTEGER NULL,
    `image` BLOB NULL,

    INDEX `habitatId`(`habitatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(20) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(40) NULL,
    `description` TEXT NULL,

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
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(70) NOT NULL,
    `password` VARCHAR(20) NULL,
    `email_verified` DATETIME(0) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,
    `role_id` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
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
ALTER TABLE `account` ADD CONSTRAINT `account_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animal` ADD CONSTRAINT `animal_ibfk_1` FOREIGN KEY (`habitatId`) REFERENCES `habitat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `compte_rendu` ADD CONSTRAINT `compte_rendu_ibfk_1` FOREIGN KEY (`animalId`) REFERENCES `animal`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `consommation_animal` ADD CONSTRAINT `consommation_animal_ibfk_1` FOREIGN KEY (`animalId`) REFERENCES `animal`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `etat_habitat` ADD CONSTRAINT `etat_habitat_ibfk_1` FOREIGN KEY (`habitatId`) REFERENCES `habitat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `image_animal` ADD CONSTRAINT `image_animal_ibfk_1` FOREIGN KEY (`animalId`) REFERENCES `animal`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `image_habitat` ADD CONSTRAINT `image_habitat_ibfk_1` FOREIGN KEY (`habitatId`) REFERENCES `habitat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

