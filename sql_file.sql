select * from flightbooking.airlines_table;

select * from flightbooking.tickets_table;

drop table flightbooking.airlines_table;

drop table flightbooking.tickets_table;

delete from flightbooking.airlines_table where id in (1,2,3,4);

delete from flightbooking.tickets_table where id in (1,2,3,4);

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
   
   CREATE TABLE `flightbooking`.`tickets_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `air_line_name` VARCHAR(45) NOT NULL,
  `flight_number` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
   `city_from` VARCHAR(45) NOT NULL,
  `city_to` VARCHAR(45) NOT NULL,
  `seat_count` INT NOT NULL,
  `dept_date` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`));
