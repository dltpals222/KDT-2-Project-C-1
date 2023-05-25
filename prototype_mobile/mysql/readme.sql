
CREATE DATABASE `msmg` DEFAULT CHARACTER set utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;

use msmg

CREATE TABLE ingredients_table (
ingredients_id INT NOT NULL AUTO_INCREMENT,
ingredients VARCHAR(255) ,
PRIMARY KEY(ingredients_id)
);

CREATE TABLE recipe_regist_table (
recipe_id INT NOT NULL AUTO_INCREMENT,
recipe_register VARCHAR(255),
recipe_title VARCHAR(255),
thumbnail_img VARCHAR(255),
recipe_views INT,
recipe_recommend INT,
PRIMARY KEY(recipe_id)
);

CREATE TABLE recipe_step_table (
step_id INT NOT NULL AUTO_INCREMENT,
recipe_id INT NOT NULL,
recipe_step_content VARCHAR(255) NOT NULL,
recipe_step_img VARCHAR(255) NOT NULL,
recipe_step_number INT NOT NULL,
PRIMARY KEY(step_id),
FOREIGN KEY (recipe_id) REFERENCES recipe_regist_table(recipe_id) ON DELETE CASCADE ON UPDATE CASCADE 
);

CREATE TABLE recipe_ingredients_table (
recipe_ingredients_id INT NOT NULL AUTO_INCREMENT,
recipe_id INT NOT NULL,
recipe_weight VARCHAR(255),
regist_ingredients TEXT,
ingredients_id INT,
PRIMARY KEY(recipe_ingredients_id),
FOREIGN KEY (recipe_id) REFERENCES recipe_regist_table(recipe_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (ingredients_id) REFERENCES ingredients_table(ingredients_id) ON DELETE CASCADE ON UPDATE CASCADE
);
