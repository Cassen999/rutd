-- WARNING: Please take caution when running the the DROP TABLE query,
----------  It will delete all tables from the database ---- 
DROP TABLE "user",
"type",
"rank",
"gender",
"married",
"branch",
"status",
"country",
"state",
"discharge",
"injury",
"percentage",
"categories",
"veteran",
"match",
"organization",
"veteran_categories",
"organization_categories" CASCADE;
-- End drop tables

-- Select all below and copy, then paste into the SQL Query window in Postico
-- Alter tables
-- If you ever delete a table, these make the id column restart at 1 when you recreate the table
ALTER SEQUENCE user_id_seq RESTART WITH 1;

ALTER SEQUENCE type_id_seq RESTART WITH 1;

ALTER SEQUENCE gender_id_seq RESTART WITH 1;

ALTER SEQUENCE married_id_seq RESTART WITH 1;

ALTER SEQUENCE branch_id_seq RESTART WITH 1;

ALTER SEQUENCE rank_id_seq RESTART WITH 1;

ALTER SEQUENCE status_id_seq RESTART WITH 1;

ALTER SEQUENCE country_id_seq RESTART WITH 1;

ALTER SEQUENCE state_id_seq RESTART WITH 1;

ALTER SEQUENCE discharge_id_seq RESTART WITH 1;

ALTER SEQUENCE injury_id_seq RESTART WITH 1;

ALTER SEQUENCE percentage_id_seq RESTART WITH 1;

ALTER SEQUENCE categories_id_seq RESTART WITH 1;
-- End alter tables

-- Create dropdown tables
CREATE TABLE "gender" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "married" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "branch" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "rank" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "country" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "state" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "discharge" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "injury" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "percentage" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "type" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);
-- End Create dropdown tables

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80),
    "password" VARCHAR (1000),
    "type_id" INT REFERENCES "type" ON DELETE CASCADE
);

-- Inserts into dropdown table
INSERT INTO
    "type" (description)
VALUES
    ('Veteran'),
    ('Admin'),
    ('Organization');

INSERT INTO
    gender (description)
VALUES
    ('Male'),
    ('Female'),
    ('Other'),
    ('Prefer not to answer');

INSERT INTO
    married (description)
VALUES
    ('Single'),
    ('Married'),
    ('Divorce'),
    ('Prefer not to answer');

INSERT INTO
    branch (description)
VALUES
    ('Army'),
    ('Marine Corps'),
    ('Navy'),
    ('Air Force'),
    ('Space Force'),
    ('Coast Guard'),
    ('National Guard');

INSERT INTO
    rank (description)
VALUES
    ('E1'),
    ('E2'),
    ('E3'),
    ('E4'),
    ('E5'),
    ('E6'),
    ('E7'),
    ('E8'),
    ('E9'),
    ('O1'),
    ('O2'),
    ('O3'),
    ('O4'),
    ('O5'),
    ('O6'),
    ('O7'),
    ('O8'),
    ('O9'),
    ('O10'),
    ('W1'),
    ('W2'),
    ('W3'),
    ('W4'),
    ('W5');

INSERT INTO
    status (description)
VALUES
    ('Active/Return to Active'),
    ('Discharged'),
    ('National Guard'),
    ('Pending Med Board'),
    ('Permanent Disabillity Retired List (PDRL)'),
    ('Reserved'),
    ('Retired'),
    ('Temporary Disabillity Retired List (TDRL)');

INSERT INTO
    discharge (description)
VALUES
    ('Active'),
    ('Administrative'),
    ('Bad Conduct Discharge'),
    ('General Under Honorable Conditions'),
    ('General Under Other than Honorable Conditions'),
    ('Honorable'),
    ('Unknown'),
    ('Uncharacterized');

INSERT INTO
    injury (description)
VALUES
    ('Amputee'),
    ('Blind'),
    ('Post-Traumatic Stress Disorder(PTSD)'),
    ('Traumatic Brain Injury(TBI)'),
    ('Vision Impairment'),
    ('Mental Health'),
    ('Orthopedic'),
    ('Spinal Cord Injury(SCI)'),
    ('Shrapnel Fragment/ Gunshot Wound(SFW / GSW)'),
    ('Hearing Impairment'),
    ('Military Sexual Trauma(MST)'),
    ('Other');

INSERT INTO
    percentage (description)
VALUES
    ('0%'),
    ('10%'),
    ('20%'),
    ('30%'),
    ('40%'),
    ('50%'),
    ('60%'),
    ('70%'),
    ('80%'),
    ('90%'),
    ('100%');

INSERT INTO
    categories (description)
VALUES
    ('Benefits and Compensation'),
    ('Education and Training'),
    ('Employment'),
    ('Family and Caregiver Support'),
    ('Health'),
    ('Homeless Assistance'),
    ('Housing'),
    ('Other Services and Resources'),
    ('Military Adaptive Sports Program'),
    ('Transportation and Travel');

INSERT INTO
    state (description)
VALUES
    ('Alaska'),
    ('Alabama'),
    ('Arizona'),
    ('Arkansas'),
    ('California'),
    ('Colorado'),
    ('Connecticut'),
    ('Delaware'),
    ('District of Columbia'),
    ('Florida'),
    ('Georgia'),
    ('Hawaii'),
    ('Idaho'),
    ('Illinois'),
    ('Indiana'),
    ('Iowa'),
    ('Kansas'),
    ('Kentucky'),
    ('Louisiana'),
    ('Maine'),
    ('Maryland'),
    ('Massachusetts'),
    ('Michigan'),
    ('Minnesota'),
    ('Mississippi'),
    ('Missouri'),
    ('Montana'),
    ('Nebraska'),
    ('Nevada'),
    ('New Hampshire'),
    ('New Jersey'),
    ('New Mexico'),
    ('New York'),
    ('North Carolina'),
    ('North Dakota'),
    ('Ohio'),
    ('Oklahoma'),
    ('Oregon'),
    ('Pennsylvania'),
    ('Puerto Rico'),
    ('Rhode Island'),
    ('South Carolina'),
    ('South Dakota'),
    ('Tennessee'),
    ('Texas'),
    ('Utah'),
    ('Vermont'),
    ('Virginia'),
    ('Washington'),
    ('West Virginia'),
    ('Wisconsin'),
    ('Wyoming');

INSERT INTO
    country (description)
VALUES
    ('United States of America');
-- End inserts into dropdown tables

-- Inserts into user
-- The username can be changed, password cannot
-- The password for ALL user inserts is admin
-- The inserts that end in 1 can be changed to anything but was used in our demo to show how matching worked
-- The user inserts are only used for dummy data from our presentation, they are not required for the app to function
INSERT INTO "user" (username, password, type_id)
VALUES ('bob', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user2', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user3', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user4', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user5', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user6', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user7', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user8', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user9', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user10', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user11', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user12', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user13', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user14', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('user15', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 1),
('woundedwarrior', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 3),
('hivesforheroes', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 3),
('texasveteransoutdoors', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 3),
('birdwell', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 3),
('mightyoaksfoundation', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 3),
('admin', '$2a$10$dRmmRPlGvIhU/gLBZSNffeQzPvOcURuTMjTU3Z4Jao/IggiiVjMzy', 2);
-- End inserts into user

 -- Create veteran, organization, categories and match tables
CREATE TABLE "veteran" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "user" ON DELETE CASCADE,
    "first_name" VARCHAR (255),
    "last_name" VARCHAR (255),
    "email" VARCHAR (255),
    "date_of_birth" DATE,
    "number" VARCHAR (10),
    "gender_id" INT REFERENCES "gender" ON DELETE CASCADE,
    "married_id" INT REFERENCES "married" ON DELETE CASCADE,
    "children" INT,
    "homeless" BOOLEAN,
    "current_address" varchar(255),
    "city" VARCHAR(255),
    "state_id" INT REFERENCES "state" ON DELETE CASCADE,
    "zipcode" VARCHAR (5),
    "country_id" INT REFERENCES "country" ON DELETE CASCADE,
    "mailing_address" VARCHAR(255),
    "city2" VARCHAR(255),
    "state_id2" INT REFERENCES "state" ON DELETE CASCADE,
    "zipcode2" VARCHAR (5),
    "country_id2" INT REFERENCES "country" ON DELETE CASCADE,
    "branch_id" INT REFERENCES "branch" ON DELETE CASCADE,
    "rank_id" INT REFERENCES "rank" ON DELETE CASCADE,
    "start_date" DATE,
    "end_date" DATE,
    "status_id" INT REFERENCES "status" ON DELETE CASCADE,
    "discharge_id" INT REFERENCES "discharge" ON DELETE CASCADE,
    "injury_id" INT REFERENCES "injury" ON DELETE CASCADE,
    "compensation" BOOLEAN,
    "percentage" INT REFERENCES "percentage" ON DELETE CASCADE,
    "danger_areas" BOOLEAN,
    "purple_heart" BOOLEAN
);

CREATE TABLE "organization" (
    "id" SERIAL PRIMARY KEY UNIQUE,
    "org_id" INT REFERENCES "user" ON DELETE CASCADE,
    "name" VARCHAR(255),
    "number" bigint,
    "email" VARCHAR(255),
    "city" VARCHAR(255),
    "state_id" INT REFERENCES "state" ON DELETE CASCADE,
    "pdf" bytea,
    "website" VARCHAR(255),
    "pictures" bytea,
    "description" VARCHAR(1000),
    "approved" BOOLEAN
);

CREATE TABLE "veteran_categories" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "veteran" ON DELETE CASCADE,
    "categories_id" INT REFERENCES "categories" ON DELETE CASCADE
);

CREATE TABLE "organization_categories" (
    "id" SERIAL PRIMARY KEY,
    "org_id" INT REFERENCES "organization" ON DELETE CASCADE,
    "categories_id" INT REFERENCES "categories" ON DELETE CASCADE
);

CREATE TABLE "match" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "veteran" ON DELETE CASCADE,
    "org_id" INT REFERENCES "organization" ON DELETE CASCADE,
    "received" TIME,
    "contacted" TIME,
    "approved" TIME
);
 -- End create veteran, organization, categories and match tables

-- Alter tables
-- If you ever delete a table, these make the id column restart at 1 when you recreate the table
ALTER SEQUENCE veteran_id_seq RESTART WITH 1;

ALTER SEQUENCE organization_id_seq RESTART WITH 1;

ALTER SEQUENCE veteran_categories_id_seq RESTART WITH 1;

ALTER SEQUENCE organization_categories_id_seq RESTART WITH 1;

ALTER SEQUENCE match_id_seq RESTART WITH 1;
-- End alter tables

-- Inserts into organization
INSERT INTO "organization" ("org_id", "name", "number", "email", "city", "state_id", "pdf", "website", "pictures", "description", "approved")
VALUES (7, 'Wounded Warrior Project', 8778326997, 'resourcecenter@woundedwarriorproject.org', 'Jacksonvile', 10, 'none', 'www.Woundedwarriorproject.org', 'none', 'The WWP mission is to honor and empower Wounded Warriors who incurred a physical or mental injury, illnesses, or wound, co-incident to your military service on or after September 11, 2001', true);
INSERT INTO "organization" ("org_id", "name", "number", "email", "city", "state_id", "pdf", "website", "pictures", "description", "approved")
VALUES (8, 'Hives for Heroes', 8323651183, 'support@hivesforheroes.com', 'Houston', 45, 'none', 'www.hivesforheroes.com', 'none', 'Hives for Heroes is a national military veteran non-profit organization focusing on honey bee conservation, suicide prevention, and a healthy transition from service.', true);
INSERT INTO "organization" ("org_id", "name", "number", "email", "city", "state_id", "pdf", "website", "pictures", "description", "approved")
VALUES (9, 'Texas Veterans Outdoors', 8179807303, 'none', 'Houston', 45, 'none', 'www.texasveteransoutdoors.org', 'none', 'Texas Veterans Outdoors we are dedicated to be a charitable organization that provides a positive social atmosphere for Texas Veterans through educational outdoor experiences', true);
INSERT INTO "organization" ("org_id", "name", "number", "email", "city", "state_id", "pdf", "website", "pictures", "description", "approved")
VALUES (9, 'The Birdwell Foundation', 2104861639, 'fakeemail@email.com', 'Houston', 45, 'none','www.birdwellfoundation.org', 'none', 'The Birdwell Foundation, non-profit organization was birthed in June of 2018. A vision to expand to not just Combat Veterans suffering from PTSD/TBI, but to include any Veteran, both men and women suffering from PTSD/TBI, and First Responders. To provide warrior and family support groups across our great nation for our Veteran and First Responder communities. To bring awareness and engage the public about the epidemic that twenty-two Veterans take their own lives. To educate the public to not stigmatize our Veterans by labeling them as "crazy". And finally, to build a state-of-the-art facility in the North Georgia area where Veterans and First Responders can come for a period of time to find restoration, healing from the invisible scars of trauma, and to learn how to continue a healthy and loving relationship with their families. ', true);
INSERT INTO "organization" ("org_id", "name", "number", "email", "city", "state_id", "pdf", "website", "pictures", "description", "approved")
VALUES (7, 'Mighty Oaks Foundation', 6194245900, 'Info@MightyOaksPrograms.org', 'Murrieta', 5, 'none', 'www.Woundedwarriorproject.org', 'none', 'The Mighty Oaks Foundation is a faith-based Veteran service organization that teaches combat Veterans struggling with Post Traumatic Stress how to get beyond combat trauma and live their lives in the manner God intended. Many combat vets are unable to reintegrate back into civilian life, leaving their families to deal with the aftermath of broken homes and suicide at times. By aligning their lives to Biblical principles, these Warriors are able to lead their families, their communities and our nation. Our mission is to serve and restore our nations Warriors and families, who have endured hardship through their service to America, and to help them find a new life purpose through hope in Christ and our resiliency and peer-to-peer recovery programs.', true);
-- End inserts into organization

-- Inserts into match
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (1, 3, '2021-02-16', '2021-01-19', '2020-01-19');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (2, 2,'2021-02-16', '2021-01-19', '2020-01-19');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (3, 3, '2021-02-16', '2021-01-19', '2020-01-19');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (4, 4, '2020-10-19', '2021-01-19', '2020-01-19');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (5, 5, '2021-02-16', '2021-01-19', '2020-01-19');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (6, 6, '2021-02-16', '2021-01-19', '2020-01-19');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (7, 7, '2020-10-19', '2021-01-19 ', '2020-01-19 ');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (8, 8, '2021-02-16', '2021-01-19 ', '2020-01-19 ');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (9, 10,'2021-02-16', '2021-01-19 ', '2020-01-19');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (1, 3, '2021-02-16 12:23:54', '2021-01-19 13:23:54', '2020-01-19 07:23:54');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (2, 2,'2021-02-16 12:23:54', '2021-01-19 13:23:54', '2020-01-19 07:23:54');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (3, 3, '2021-02-16 12:23:54', '2021-01-19 13:23:54', '2020-01-19 07:23:54');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (4, 4, '2020-10-19 10:23:54', '2021-01-19 13:23:54', '2020-01-19 07:23:54');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (5, 5, '2021-02-16 12:23:54', '2021-01-19 13:23:54', '2020-01-19 07:23:54');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (6, 6, '2021-02-16 12:23:54', '2021-01-19 13:23:54', '2020-01-19 07:23:54');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (7, 7, '2020-10-19', '2021-01-19 ', '2020-01-19 ');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (8, 8, '2021-02-16', '2021-01-19 ', '2020-01-19 ');
INSERT INTO "match" ("vet_id", "org_id", "received", "contacted", "approved")
VALUES (9, 10,'2021-02-16 12:23:54', '2021-01-19 13:23:54', '2020-01-19 07:23:54');
-- End inserts into match

-- Inserts into veteran_categories 
INSERT INTO veteran_categories(vet_id, categories_id) VALUES (1, 1), (1, 3), (1, 4), (2, 5), (2, 6), (2, 7), (2, 8), (3, 9), (3, 10), (3, 3),(3, 4),(6, 1),(8, 9), (4, 10), (8, 3),(3, 4),(6, 1);
-- End inserts into match

-- Inserts into organization_categories
INSERT INTO organization_categories(org_id, categories_id) VALUES (1, 1), (1, 2), (1, 5), (2, 3), (2, 9), (3, 1), (3, 2), (3, 3), (3, 4), (3, 5);
-- End inserts into organization_categories