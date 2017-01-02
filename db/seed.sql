BEGIN;

INSERT INTO users (id, username, password) VALUES
(1,'Mohamed', 1234),
(2,'bouya', 3455);


INSERT INTO culture (id, symbol, value, costom, tradition, language, users_id) VALUES
(1,'dragon symbol ', 'ancient Chinese', 'items including chairs or costumes. It is considered a representation of power', 'A dragon is a legendary creature, typically with serpentine or reptilian traits', 'chinese language', 1),
(2, 'Susu Bala', 'Guinea musical instrument', 'It is a representation of traditional king wedding and meeting', 'wedding and meeting', 'Susu', 2);

INSERT INTO community (id, name, discription, location, culture_id, users_id) VALUES
(1,'china', 'This is china ancient cultural empire', 'south-east china', 1, 1),
(2,'susu bala foundation', 'A guinea traditional musical association', 'guinea', 2, 2);


COMMIT;
