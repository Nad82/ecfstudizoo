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
    `prenom` VARCHAR(40) NOT NULL,
    `race` VARCHAR(40) NOT NULL,
    `habitat_id` INTEGER NULL,
    `image_animal_id` INTEGER NULL,
    `compte_rendu_id` INTEGER NULL,
    `consommation_animal_id` INTEGER NULL,

    INDEX `compte_rendu_id`(`compte_rendu_id`),
    INDEX `consommation_animal_id`(`consommation_animal_id`),
    INDEX `habitat_id`(`habitat_id`),
    INDEX `image_animal_id`(`image_animal_id`),
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
CREATE TABLE `compte_rendu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etat` VARCHAR(40) NOT NULL,
    `nourriture` VARCHAR(50) NOT NULL,
    `quantite_nourriture` INTEGER NOT NULL,
    `heure_passage` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consommation_animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nourriture` VARCHAR(40) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `heure` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etat_habitat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `commentaires` TEXT NOT NULL,
    `amelioration` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `habitat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(40) NOT NULL,
    `description` TEXT NOT NULL,
    `image_habitat_id` INTEGER NULL,
    `etat_habitat_id` INTEGER NULL,

    INDEX `etat_habitat_id`(`etat_habitat_id`),
    INDEX `image_habitat_id`(`image_habitat_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horaires` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_habitat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NULL,

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
ALTER TABLE `animal` ADD CONSTRAINT `animal_ibfk_1` FOREIGN KEY (`habitat_id`) REFERENCES `habitat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animal` ADD CONSTRAINT `animal_ibfk_2` FOREIGN KEY (`image_animal_id`) REFERENCES `image_animal`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animal` ADD CONSTRAINT `animal_ibfk_3` FOREIGN KEY (`compte_rendu_id`) REFERENCES `compte_rendu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animal` ADD CONSTRAINT `animal_ibfk_4` FOREIGN KEY (`consommation_animal_id`) REFERENCES `consommation_animal`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `habitat` ADD CONSTRAINT `habitat_ibfk_1` FOREIGN KEY (`image_habitat_id`) REFERENCES `image_habitat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `habitat` ADD CONSTRAINT `habitat_ibfk_2` FOREIGN KEY (`etat_habitat_id`) REFERENCES `etat_habitat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

