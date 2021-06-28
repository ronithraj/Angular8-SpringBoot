CREATE SCHEMA `flightbooking` ;

select * from flightbooking.airlines_table;

delete from flightbooking.airlines_table where id in (1,2,3,4);

drop table flightbooking.airlines_table;

commit;

CREATE TABLE `flightbooking`.`airlines_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `air_line_name` VARCHAR(45) NOT NULL,
  `flight_number` VARCHAR(45) NOT NULL,
  `contact_num` VARCHAR(10) NOT NULL,
  `city_from` VARCHAR(45) NOT NULL,
  `city_to` VARCHAR(45) NOT NULL,
  `seat_rows` INT NOT NULL,
  `ticket_cost` INT NOT NULL,
  `start_time` VARCHAR(5),
  `end_time` VARCHAR(5),
  `business_seats` int,
  `non_business_seats` INT,
  `is_available` boolean,
  `travel_hours` varchar(5),
   PRIMARY KEY (`id`));
   

select * from flightbooking.tickets_table;

drop table flightbooking.tickets_table;

commit;

CREATE TABLE `flightbooking`.`tickets_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `air_line_name` VARCHAR(45) NOT NULL,
  `flight_number` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `city_from` VARCHAR(45) NOT NULL,
  `city_to` VARCHAR(45) NOT NULL,
  `seat_count` INT NOT NULL,
  `dept_date` VARCHAR(45) NOT NULL,
  `pnr_number` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_fk_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id_fk`
    FOREIGN KEY (`user_id`)
    REFERENCES `flightbooking`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


select * from flightbooking.user;

delete from flightbooking.user where id in (1,2,3,4);

drop table flightbooking.user;

commit;
  
  CREATE TABLE `flightbooking`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role` VARCHAR(10) NOT NULL,
  `email_id` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));





