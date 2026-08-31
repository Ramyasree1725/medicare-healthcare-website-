/**
 * Seed data for MediCare Pro
 * Populates in-memory database with sample healthcare data
 */

const { v4: uuidv4 } = require('uuid');

module.exports = function seedData() {
  console.log('Seeding database...');

  // Departments
  global.db.departments = [
    { id: uuidv4(), name: 'Cardiology', description: 'Department of Cardiology', head: 'Meera Menon', floor: 10, isActive: true },
    { id: uuidv4(), name: 'Neurology', description: 'Department of Neurology', head: 'Priya Joshi', floor: 9, isActive: true },
    { id: uuidv4(), name: 'Orthopedics', description: 'Department of Orthopedics', head: 'Rohan Reddy', floor: 2, isActive: true },
    { id: uuidv4(), name: 'Pediatrics', description: 'Department of Pediatrics', head: 'Ananya Rao', floor: 5, isActive: true },
    { id: uuidv4(), name: 'Oncology', description: 'Department of Oncology', head: 'Meera Pillai', floor: 6, isActive: true },
    { id: uuidv4(), name: 'Dermatology', description: 'Department of Dermatology', head: 'Ravi Desai', floor: 6, isActive: true },
    { id: uuidv4(), name: 'Gastroenterology', description: 'Department of Gastroenterology', head: 'Neha Sharma', floor: 3, isActive: true },
    { id: uuidv4(), name: 'Endocrinology', description: 'Department of Endocrinology', head: 'Sunita Bose', floor: 6, isActive: true },
    { id: uuidv4(), name: 'Pulmonology', description: 'Department of Pulmonology', head: 'Vivek Das', floor: 1, isActive: true },
    { id: uuidv4(), name: 'Nephrology', description: 'Department of Nephrology', head: 'Rohan Nair', floor: 4, isActive: true },
    { id: uuidv4(), name: 'Urology', description: 'Department of Urology', head: 'Vikram Chopra', floor: 1, isActive: true },
    { id: uuidv4(), name: 'Gynecology', description: 'Department of Gynecology', head: 'Geeta Mukherjee', floor: 6, isActive: true },
    { id: uuidv4(), name: 'Ophthalmology', description: 'Department of Ophthalmology', head: 'Kiran Das', floor: 8, isActive: true },
    { id: uuidv4(), name: 'ENT', description: 'Department of ENT', head: 'Raj Nair', floor: 3, isActive: true },
    { id: uuidv4(), name: 'Psychiatry', description: 'Department of Psychiatry', head: 'Neha Rao', floor: 10, isActive: true },
    { id: uuidv4(), name: 'Rheumatology', description: 'Department of Rheumatology', head: 'Ananya Kumar', floor: 3, isActive: true },
    { id: uuidv4(), name: 'Hematology', description: 'Department of Hematology', head: 'Sneha Das', floor: 10, isActive: true },
    { id: uuidv4(), name: 'Infectious Disease', description: 'Department of Infectious Disease', head: 'Suresh Iyer', floor: 2, isActive: true },
    { id: uuidv4(), name: 'Emergency Medicine', description: 'Department of Emergency Medicine', head: 'Shreya Kumar', floor: 5, isActive: true },
    { id: uuidv4(), name: 'General Surgery', description: 'Department of General Surgery', head: 'Sunita Singh', floor: 5, isActive: true },
    { id: uuidv4(), name: 'Plastic Surgery', description: 'Department of Plastic Surgery', head: 'Rahul Rao', floor: 5, isActive: true },
    { id: uuidv4(), name: 'Radiology', description: 'Department of Radiology', head: 'Sneha Verma', floor: 6, isActive: true },
    { id: uuidv4(), name: 'Anesthesiology', description: 'Department of Anesthesiology', head: 'Rahul Rao', floor: 9, isActive: true },
    { id: uuidv4(), name: 'Pathology', description: 'Department of Pathology', head: 'Suresh Patel', floor: 7, isActive: true },
    { id: uuidv4(), name: 'Physical Therapy', description: 'Department of Physical Therapy', head: 'Ravi Nair', floor: 2, isActive: true },
    { id: uuidv4(), name: 'Nutrition', description: 'Department of Nutrition', head: 'Sanjay Pillai', floor: 5, isActive: true },
    { id: uuidv4(), name: 'Allergy and Immunology', description: 'Department of Allergy and Immunology', head: 'Rohan Reddy', floor: 5, isActive: true },
    { id: uuidv4(), name: 'Geriatrics', description: 'Department of Geriatrics', head: 'Pooja Malhotra', floor: 3, isActive: true },
    { id: uuidv4(), name: 'Sports Medicine', description: 'Department of Sports Medicine', head: 'Amit Bose', floor: 8, isActive: true },
    { id: uuidv4(), name: 'Pain Management', description: 'Department of Pain Management', head: 'Kavya Joshi', floor: 9, isActive: true },
  ];

  // Doctors
  global.db.doctors = [
    { id: uuidv4(), firstName: 'Divya', lastName: 'Iyer', specialization: 'Gastroenterology', department: 'Gastroenterology', experienceYears: 26, consultationFee: 1273, rating: 3.0, isAvailable: true, phone: '+917161625657', email: 'doctor0@medicare.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Desai', specialization: 'General Surgery', department: 'General Surgery', experienceYears: 30, consultationFee: 1992, rating: 4.3, isAvailable: true, phone: '+918843427790', email: 'doctor1@medicare.com' },
    { id: uuidv4(), firstName: 'Ravi', lastName: 'Menon', specialization: 'Gastroenterology', department: 'Gastroenterology', experienceYears: 22, consultationFee: 1498, rating: 3.0, isAvailable: true, phone: '+917382263527', email: 'doctor2@medicare.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Bose', specialization: 'Sports Medicine', department: 'Sports Medicine', experienceYears: 9, consultationFee: 1958, rating: 4.1, isAvailable: true, phone: '+918584024272', email: 'doctor3@medicare.com' },
    { id: uuidv4(), firstName: 'Rekha', lastName: 'Mukherjee', specialization: 'Physical Therapy', department: 'Physical Therapy', experienceYears: 30, consultationFee: 1009, rating: 3.6, isAvailable: true, phone: '+917094712019', email: 'doctor4@medicare.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Chatterjee', specialization: 'Pulmonology', department: 'Pulmonology', experienceYears: 15, consultationFee: 1679, rating: 3.8, isAvailable: true, phone: '+919255033424', email: 'doctor5@medicare.com' },
    { id: uuidv4(), firstName: 'Priya', lastName: 'Bose', specialization: 'Gynecology', department: 'Gynecology', experienceYears: 7, consultationFee: 1661, rating: 4.1, isAvailable: true, phone: '+917901767534', email: 'doctor6@medicare.com' },
    { id: uuidv4(), firstName: 'Priya', lastName: 'Singh', specialization: 'General Surgery', department: 'General Surgery', experienceYears: 27, consultationFee: 1851, rating: 4.8, isAvailable: true, phone: '+918550379675', email: 'doctor7@medicare.com' },
    { id: uuidv4(), firstName: 'Manoj', lastName: 'Chopra', specialization: 'Dermatology', department: 'Dermatology', experienceYears: 30, consultationFee: 1254, rating: 4.1, isAvailable: true, phone: '+918250113187', email: 'doctor8@medicare.com' },
    { id: uuidv4(), firstName: 'Suresh', lastName: 'Naidu', specialization: 'Gynecology', department: 'Gynecology', experienceYears: 17, consultationFee: 1612, rating: 3.3, isAvailable: true, phone: '+919312932824', email: 'doctor9@medicare.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Desai', specialization: 'Emergency Medicine', department: 'Emergency Medicine', experienceYears: 21, consultationFee: 1172, rating: 4.5, isAvailable: true, phone: '+917318668442', email: 'doctor10@medicare.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Desai', specialization: 'Rheumatology', department: 'Rheumatology', experienceYears: 21, consultationFee: 706, rating: 3.5, isAvailable: true, phone: '+918225082428', email: 'doctor11@medicare.com' },
    { id: uuidv4(), firstName: 'Pooja', lastName: 'Patel', specialization: 'Dermatology', department: 'Dermatology', experienceYears: 14, consultationFee: 1367, rating: 4.7, isAvailable: true, phone: '+918558606475', email: 'doctor12@medicare.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Nair', specialization: 'Neurology', department: 'Neurology', experienceYears: 27, consultationFee: 1727, rating: 4.7, isAvailable: true, phone: '+918936398246', email: 'doctor13@medicare.com' },
    { id: uuidv4(), firstName: 'Kavya', lastName: 'Singh', specialization: 'Cardiology', department: 'Cardiology', experienceYears: 6, consultationFee: 593, rating: 4.5, isAvailable: true, phone: '+917079572397', email: 'doctor14@medicare.com' },
    { id: uuidv4(), firstName: 'Arjun', lastName: 'Patel', specialization: 'Gastroenterology', department: 'Gastroenterology', experienceYears: 15, consultationFee: 1495, rating: 3.9, isAvailable: true, phone: '+917687383729', email: 'doctor15@medicare.com' },
    { id: uuidv4(), firstName: 'Rahul', lastName: 'Naidu', specialization: 'Endocrinology', department: 'Endocrinology', experienceYears: 20, consultationFee: 584, rating: 4.8, isAvailable: true, phone: '+919959073091', email: 'doctor16@medicare.com' },
    { id: uuidv4(), firstName: 'Kavya', lastName: 'Naidu', specialization: 'Sports Medicine', department: 'Sports Medicine', experienceYears: 7, consultationFee: 1290, rating: 4.2, isAvailable: true, phone: '+917029257042', email: 'doctor17@medicare.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Iyer', specialization: 'Geriatrics', department: 'Geriatrics', experienceYears: 24, consultationFee: 572, rating: 3.5, isAvailable: true, phone: '+918072175475', email: 'doctor18@medicare.com' },
    { id: uuidv4(), firstName: 'Amit', lastName: 'Verma', specialization: 'Nephrology', department: 'Nephrology', experienceYears: 21, consultationFee: 507, rating: 4.5, isAvailable: true, phone: '+918140713811', email: 'doctor19@medicare.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Chatterjee', specialization: 'Gastroenterology', department: 'Gastroenterology', experienceYears: 14, consultationFee: 832, rating: 4.3, isAvailable: true, phone: '+917598748374', email: 'doctor20@medicare.com' },
    { id: uuidv4(), firstName: 'Pooja', lastName: 'Gupta', specialization: 'Allergy and Immunology', department: 'Allergy and Immunology', experienceYears: 19, consultationFee: 1548, rating: 5.0, isAvailable: true, phone: '+919987577929', email: 'doctor21@medicare.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Banerjee', specialization: 'Oncology', department: 'Oncology', experienceYears: 12, consultationFee: 688, rating: 3.2, isAvailable: true, phone: '+917207925119', email: 'doctor22@medicare.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Kumar', specialization: 'Orthopedics', department: 'Orthopedics', experienceYears: 5, consultationFee: 1100, rating: 3.8, isAvailable: true, phone: '+917725871152', email: 'doctor23@medicare.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Naidu', specialization: 'General Surgery', department: 'General Surgery', experienceYears: 30, consultationFee: 1960, rating: 3.2, isAvailable: true, phone: '+918938571315', email: 'doctor24@medicare.com' },
    { id: uuidv4(), firstName: 'Arjun', lastName: 'Mehta', specialization: 'Cardiology', department: 'Cardiology', experienceYears: 27, consultationFee: 387, rating: 4.1, isAvailable: true, phone: '+919011276016', email: 'doctor25@medicare.com' },
    { id: uuidv4(), firstName: 'Ashok', lastName: 'Kumar', specialization: 'Pathology', department: 'Pathology', experienceYears: 6, consultationFee: 1568, rating: 4.0, isAvailable: true, phone: '+919630284978', email: 'doctor26@medicare.com' },
    { id: uuidv4(), firstName: 'Kavya', lastName: 'Sharma', specialization: 'Ophthalmology', department: 'Ophthalmology', experienceYears: 9, consultationFee: 487, rating: 4.5, isAvailable: true, phone: '+918804149878', email: 'doctor27@medicare.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Patel', specialization: 'Anesthesiology', department: 'Anesthesiology', experienceYears: 28, consultationFee: 1549, rating: 3.8, isAvailable: true, phone: '+918319799815', email: 'doctor28@medicare.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Gupta', specialization: 'Allergy and Immunology', department: 'Allergy and Immunology', experienceYears: 19, consultationFee: 1259, rating: 4.3, isAvailable: true, phone: '+917448389365', email: 'doctor29@medicare.com' },
    { id: uuidv4(), firstName: 'Rohan', lastName: 'Chopra', specialization: 'Pathology', department: 'Pathology', experienceYears: 30, consultationFee: 347, rating: 4.0, isAvailable: true, phone: '+918649419701', email: 'doctor30@medicare.com' },
    { id: uuidv4(), firstName: 'Manoj', lastName: 'Verma', specialization: 'Sports Medicine', department: 'Sports Medicine', experienceYears: 23, consultationFee: 1720, rating: 4.8, isAvailable: true, phone: '+918439499262', email: 'doctor31@medicare.com' },
    { id: uuidv4(), firstName: 'Sunita', lastName: 'Reddy', specialization: 'Gastroenterology', department: 'Gastroenterology', experienceYears: 11, consultationFee: 1330, rating: 4.3, isAvailable: true, phone: '+917695562229', email: 'doctor32@medicare.com' },
    { id: uuidv4(), firstName: 'Geeta', lastName: 'Joshi', specialization: 'Gastroenterology', department: 'Gastroenterology', experienceYears: 15, consultationFee: 1463, rating: 3.9, isAvailable: true, phone: '+917690523135', email: 'doctor33@medicare.com' },
    { id: uuidv4(), firstName: 'Neha', lastName: 'Pillai', specialization: 'Neurology', department: 'Neurology', experienceYears: 12, consultationFee: 1281, rating: 4.2, isAvailable: true, phone: '+919193845966', email: 'doctor34@medicare.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Verma', specialization: 'Geriatrics', department: 'Geriatrics', experienceYears: 24, consultationFee: 1839, rating: 4.1, isAvailable: true, phone: '+917768605381', email: 'doctor35@medicare.com' },
    { id: uuidv4(), firstName: 'Suresh', lastName: 'Rao', specialization: 'Nephrology', department: 'Nephrology', experienceYears: 25, consultationFee: 985, rating: 4.4, isAvailable: true, phone: '+917721068038', email: 'doctor36@medicare.com' },
    { id: uuidv4(), firstName: 'Geeta', lastName: 'Bose', specialization: 'Orthopedics', department: 'Orthopedics', experienceYears: 6, consultationFee: 1079, rating: 3.6, isAvailable: true, phone: '+919572704775', email: 'doctor37@medicare.com' },
    { id: uuidv4(), firstName: 'Divya', lastName: 'Iyer', specialization: 'Psychiatry', department: 'Psychiatry', experienceYears: 8, consultationFee: 900, rating: 4.0, isAvailable: true, phone: '+918542968816', email: 'doctor38@medicare.com' },
    { id: uuidv4(), firstName: 'Geeta', lastName: 'Nair', specialization: 'Neurology', department: 'Neurology', experienceYears: 5, consultationFee: 597, rating: 4.3, isAvailable: true, phone: '+917887212397', email: 'doctor39@medicare.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Chatterjee', specialization: 'Oncology', department: 'Oncology', experienceYears: 26, consultationFee: 1920, rating: 4.0, isAvailable: true, phone: '+919462574217', email: 'doctor40@medicare.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Iyer', specialization: 'Physical Therapy', department: 'Physical Therapy', experienceYears: 6, consultationFee: 468, rating: 3.8, isAvailable: true, phone: '+919167356719', email: 'doctor41@medicare.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Iyer', specialization: 'Oncology', department: 'Oncology', experienceYears: 25, consultationFee: 1521, rating: 3.1, isAvailable: true, phone: '+917629256265', email: 'doctor42@medicare.com' },
    { id: uuidv4(), firstName: 'Pooja', lastName: 'Rao', specialization: 'Rheumatology', department: 'Rheumatology', experienceYears: 13, consultationFee: 1609, rating: 3.7, isAvailable: true, phone: '+918090250036', email: 'doctor43@medicare.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Bose', specialization: 'Psychiatry', department: 'Psychiatry', experienceYears: 21, consultationFee: 1781, rating: 4.3, isAvailable: true, phone: '+919621495404', email: 'doctor44@medicare.com' },
    { id: uuidv4(), firstName: 'Raj', lastName: 'Menon', specialization: 'Anesthesiology', department: 'Anesthesiology', experienceYears: 7, consultationFee: 1301, rating: 4.2, isAvailable: true, phone: '+917390541705', email: 'doctor45@medicare.com' },
    { id: uuidv4(), firstName: 'Deepa', lastName: 'Iyer', specialization: 'Sports Medicine', department: 'Sports Medicine', experienceYears: 29, consultationFee: 1017, rating: 4.4, isAvailable: true, phone: '+918526361820', email: 'doctor46@medicare.com' },
    { id: uuidv4(), firstName: 'Rohan', lastName: 'Chatterjee', specialization: 'Nephrology', department: 'Nephrology', experienceYears: 10, consultationFee: 1614, rating: 4.4, isAvailable: true, phone: '+917703912243', email: 'doctor47@medicare.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Rao', specialization: 'Nephrology', department: 'Nephrology', experienceYears: 29, consultationFee: 1957, rating: 3.6, isAvailable: true, phone: '+918342207747', email: 'doctor48@medicare.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Chatterjee', specialization: 'Plastic Surgery', department: 'Plastic Surgery', experienceYears: 11, consultationFee: 974, rating: 4.6, isAvailable: true, phone: '+918096727855', email: 'doctor49@medicare.com' },
  ];

  // Patients
  global.db.patients = [
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Desai', age: 77, gender: 'Other', bloodGroup: 'O-', phone: '+918284469386', email: 'patient0@email.com' },
    { id: uuidv4(), firstName: 'Divya', lastName: 'Rao', age: 63, gender: 'Female', bloodGroup: 'O+', phone: '+919915221971', email: 'patient1@email.com' },
    { id: uuidv4(), firstName: 'Ravi', lastName: 'Iyer', age: 20, gender: 'Male', bloodGroup: 'B+', phone: '+918693456511', email: 'patient2@email.com' },
    { id: uuidv4(), firstName: 'Aditya', lastName: 'Das', age: 35, gender: 'Other', bloodGroup: 'O+', phone: '+917876645847', email: 'patient3@email.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Sharma', age: 80, gender: 'Male', bloodGroup: 'AB-', phone: '+917439166820', email: 'patient4@email.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Naidu', age: 24, gender: 'Other', bloodGroup: 'B-', phone: '+919980518445', email: 'patient5@email.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Sharma', age: 30, gender: 'Male', bloodGroup: 'A-', phone: '+918478688137', email: 'patient6@email.com' },
    { id: uuidv4(), firstName: 'Ravi', lastName: 'Malhotra', age: 20, gender: 'Female', bloodGroup: 'O-', phone: '+918627485379', email: 'patient7@email.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Chopra', age: 28, gender: 'Other', bloodGroup: 'AB+', phone: '+917667829888', email: 'patient8@email.com' },
    { id: uuidv4(), firstName: 'Geeta', lastName: 'Mukherjee', age: 69, gender: 'Female', bloodGroup: 'A-', phone: '+917810169290', email: 'patient9@email.com' },
    { id: uuidv4(), firstName: 'Pooja', lastName: 'Pillai', age: 55, gender: 'Male', bloodGroup: 'B-', phone: '+917322699298', email: 'patient10@email.com' },
    { id: uuidv4(), firstName: 'Deepa', lastName: 'Chopra', age: 13, gender: 'Male', bloodGroup: 'AB+', phone: '+917374129102', email: 'patient11@email.com' },
    { id: uuidv4(), firstName: 'Amit', lastName: 'Sharma', age: 81, gender: 'Female', bloodGroup: 'O+', phone: '+917916787890', email: 'patient12@email.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Malhotra', age: 29, gender: 'Male', bloodGroup: 'B-', phone: '+919203847789', email: 'patient13@email.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Mukherjee', age: 37, gender: 'Female', bloodGroup: 'B+', phone: '+919707307360', email: 'patient14@email.com' },
    { id: uuidv4(), firstName: 'Rahul', lastName: 'Rao', age: 56, gender: 'Male', bloodGroup: 'A+', phone: '+919758380237', email: 'patient15@email.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Das', age: 30, gender: 'Other', bloodGroup: 'B+', phone: '+917888887818', email: 'patient16@email.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Naidu', age: 22, gender: 'Male', bloodGroup: 'O+', phone: '+918455407907', email: 'patient17@email.com' },
    { id: uuidv4(), firstName: 'Sunita', lastName: 'Patel', age: 40, gender: 'Other', bloodGroup: 'AB+', phone: '+917908530092', email: 'patient18@email.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Menon', age: 16, gender: 'Male', bloodGroup: 'A-', phone: '+918080502443', email: 'patient19@email.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Chatterjee', age: 64, gender: 'Other', bloodGroup: 'B-', phone: '+917306093673', email: 'patient20@email.com' },
    { id: uuidv4(), firstName: 'Raj', lastName: 'Joshi', age: 49, gender: 'Male', bloodGroup: 'B-', phone: '+919272964146', email: 'patient21@email.com' },
    { id: uuidv4(), firstName: 'Priya', lastName: 'Joshi', age: 41, gender: 'Female', bloodGroup: 'A+', phone: '+918099735858', email: 'patient22@email.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Bose', age: 25, gender: 'Male', bloodGroup: 'O+', phone: '+918923457354', email: 'patient23@email.com' },
    { id: uuidv4(), firstName: 'Aditya', lastName: 'Chopra', age: 85, gender: 'Other', bloodGroup: 'AB-', phone: '+918498617969', email: 'patient24@email.com' },
    { id: uuidv4(), firstName: 'Shreya', lastName: 'Malhotra', age: 65, gender: 'Other', bloodGroup: 'O-', phone: '+919417070385', email: 'patient25@email.com' },
    { id: uuidv4(), firstName: 'Deepa', lastName: 'Banerjee', age: 85, gender: 'Other', bloodGroup: 'AB+', phone: '+919235329191', email: 'patient26@email.com' },
    { id: uuidv4(), firstName: 'Deepa', lastName: 'Desai', age: 52, gender: 'Other', bloodGroup: 'O+', phone: '+918646836857', email: 'patient27@email.com' },
    { id: uuidv4(), firstName: 'Divya', lastName: 'Sharma', age: 37, gender: 'Male', bloodGroup: 'A-', phone: '+918945345945', email: 'patient28@email.com' },
    { id: uuidv4(), firstName: 'Arjun', lastName: 'Chatterjee', age: 20, gender: 'Male', bloodGroup: 'AB-', phone: '+919631138213', email: 'patient29@email.com' },
    { id: uuidv4(), firstName: 'Priya', lastName: 'Malhotra', age: 62, gender: 'Other', bloodGroup: 'AB-', phone: '+917169009426', email: 'patient30@email.com' },
    { id: uuidv4(), firstName: 'Manoj', lastName: 'Chatterjee', age: 63, gender: 'Male', bloodGroup: 'O-', phone: '+919504335761', email: 'patient31@email.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Gupta', age: 45, gender: 'Male', bloodGroup: 'A-', phone: '+919875886306', email: 'patient32@email.com' },
    { id: uuidv4(), firstName: 'Anjali', lastName: 'Verma', age: 41, gender: 'Female', bloodGroup: 'A+', phone: '+918142273334', email: 'patient33@email.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Mukherjee', age: 90, gender: 'Male', bloodGroup: 'B+', phone: '+919005483925', email: 'patient34@email.com' },
    { id: uuidv4(), firstName: 'Amit', lastName: 'Bose', age: 25, gender: 'Other', bloodGroup: 'B+', phone: '+917284265082', email: 'patient35@email.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Menon', age: 59, gender: 'Other', bloodGroup: 'A+', phone: '+919775131172', email: 'patient36@email.com' },
    { id: uuidv4(), firstName: 'Sanjay', lastName: 'Singh', age: 90, gender: 'Female', bloodGroup: 'AB+', phone: '+917309000669', email: 'patient37@email.com' },
    { id: uuidv4(), firstName: 'Anjali', lastName: 'Banerjee', age: 75, gender: 'Female', bloodGroup: 'B+', phone: '+918443082329', email: 'patient38@email.com' },
    { id: uuidv4(), firstName: 'Sanjay', lastName: 'Menon', age: 90, gender: 'Other', bloodGroup: 'B+', phone: '+918370548423', email: 'patient39@email.com' },
    { id: uuidv4(), firstName: 'Priya', lastName: 'Singh', age: 50, gender: 'Female', bloodGroup: 'B+', phone: '+918018002343', email: 'patient40@email.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Pillai', age: 27, gender: 'Female', bloodGroup: 'O-', phone: '+917074535778', email: 'patient41@email.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Iyer', age: 1, gender: 'Female', bloodGroup: 'O+', phone: '+917708653454', email: 'patient42@email.com' },
    { id: uuidv4(), firstName: 'Neha', lastName: 'Naidu', age: 57, gender: 'Male', bloodGroup: 'A+', phone: '+917955973512', email: 'patient43@email.com' },
    { id: uuidv4(), firstName: 'Sneha', lastName: 'Bose', age: 23, gender: 'Female', bloodGroup: 'B+', phone: '+918066810750', email: 'patient44@email.com' },
    { id: uuidv4(), firstName: 'Anjali', lastName: 'Gupta', age: 66, gender: 'Male', bloodGroup: 'A+', phone: '+918254771209', email: 'patient45@email.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Bose', age: 24, gender: 'Male', bloodGroup: 'A+', phone: '+918919146776', email: 'patient46@email.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Das', age: 37, gender: 'Other', bloodGroup: 'B+', phone: '+919812736555', email: 'patient47@email.com' },
    { id: uuidv4(), firstName: 'Rahul', lastName: 'Malhotra', age: 22, gender: 'Female', bloodGroup: 'B-', phone: '+919761602816', email: 'patient48@email.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Desai', age: 13, gender: 'Male', bloodGroup: 'AB+', phone: '+917317972318', email: 'patient49@email.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Verma', age: 19, gender: 'Male', bloodGroup: 'B-', phone: '+919388019129', email: 'patient50@email.com' },
    { id: uuidv4(), firstName: 'Arjun', lastName: 'Mehta', age: 68, gender: 'Female', bloodGroup: 'AB+', phone: '+919036591713', email: 'patient51@email.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Mukherjee', age: 68, gender: 'Other', bloodGroup: 'A+', phone: '+917252428784', email: 'patient52@email.com' },
    { id: uuidv4(), firstName: 'Geeta', lastName: 'Chatterjee', age: 90, gender: 'Female', bloodGroup: 'A+', phone: '+917014168617', email: 'patient53@email.com' },
    { id: uuidv4(), firstName: 'Arjun', lastName: 'Mukherjee', age: 40, gender: 'Other', bloodGroup: 'A+', phone: '+917205753390', email: 'patient54@email.com' },
    { id: uuidv4(), firstName: 'Ravi', lastName: 'Verma', age: 4, gender: 'Other', bloodGroup: 'B+', phone: '+917737714242', email: 'patient55@email.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Das', age: 71, gender: 'Other', bloodGroup: 'O+', phone: '+919167118441', email: 'patient56@email.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Rao', age: 8, gender: 'Male', bloodGroup: 'O-', phone: '+919668436856', email: 'patient57@email.com' },
    { id: uuidv4(), firstName: 'Amit', lastName: 'Malhotra', age: 63, gender: 'Other', bloodGroup: 'AB+', phone: '+919521038647', email: 'patient58@email.com' },
    { id: uuidv4(), firstName: 'Divya', lastName: 'Mehta', age: 44, gender: 'Male', bloodGroup: 'O+', phone: '+917735032566', email: 'patient59@email.com' },
    { id: uuidv4(), firstName: 'Sanjay', lastName: 'Joshi', age: 9, gender: 'Male', bloodGroup: 'AB+', phone: '+918980415087', email: 'patient60@email.com' },
    { id: uuidv4(), firstName: 'Pooja', lastName: 'Banerjee', age: 18, gender: 'Male', bloodGroup: 'B-', phone: '+918430582660', email: 'patient61@email.com' },
    { id: uuidv4(), firstName: 'Rahul', lastName: 'Sharma', age: 33, gender: 'Other', bloodGroup: 'B-', phone: '+917448875583', email: 'patient62@email.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Iyer', age: 72, gender: 'Female', bloodGroup: 'A+', phone: '+917559351903', email: 'patient63@email.com' },
    { id: uuidv4(), firstName: 'Amit', lastName: 'Chatterjee', age: 87, gender: 'Male', bloodGroup: 'B+', phone: '+918708004382', email: 'patient64@email.com' },
    { id: uuidv4(), firstName: 'Ravi', lastName: 'Mehta', age: 4, gender: 'Male', bloodGroup: 'A+', phone: '+919798022277', email: 'patient65@email.com' },
    { id: uuidv4(), firstName: 'Deepa', lastName: 'Mehta', age: 71, gender: 'Female', bloodGroup: 'AB-', phone: '+917411110834', email: 'patient66@email.com' },
    { id: uuidv4(), firstName: 'Shreya', lastName: 'Iyer', age: 75, gender: 'Female', bloodGroup: 'A-', phone: '+919140159386', email: 'patient67@email.com' },
    { id: uuidv4(), firstName: 'Vivek', lastName: 'Kumar', age: 29, gender: 'Female', bloodGroup: 'B+', phone: '+917300367603', email: 'patient68@email.com' },
    { id: uuidv4(), firstName: 'Ananya', lastName: 'Desai', age: 37, gender: 'Male', bloodGroup: 'B+', phone: '+919887848569', email: 'patient69@email.com' },
    { id: uuidv4(), firstName: 'Shreya', lastName: 'Singh', age: 2, gender: 'Female', bloodGroup: 'B+', phone: '+919164127170', email: 'patient70@email.com' },
    { id: uuidv4(), firstName: 'Sunita', lastName: 'Banerjee', age: 19, gender: 'Other', bloodGroup: 'B-', phone: '+919115139885', email: 'patient71@email.com' },
    { id: uuidv4(), firstName: 'Rekha', lastName: 'Verma', age: 71, gender: 'Male', bloodGroup: 'A-', phone: '+919144537005', email: 'patient72@email.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Rao', age: 30, gender: 'Female', bloodGroup: 'AB-', phone: '+919604748904', email: 'patient73@email.com' },
    { id: uuidv4(), firstName: 'Sunita', lastName: 'Mukherjee', age: 61, gender: 'Other', bloodGroup: 'A+', phone: '+917286928425', email: 'patient74@email.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Banerjee', age: 32, gender: 'Other', bloodGroup: 'AB+', phone: '+917943558231', email: 'patient75@email.com' },
    { id: uuidv4(), firstName: 'Amit', lastName: 'Mukherjee', age: 24, gender: 'Female', bloodGroup: 'A+', phone: '+917147378953', email: 'patient76@email.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Nair', age: 9, gender: 'Male', bloodGroup: 'A+', phone: '+918314456962', email: 'patient77@email.com' },
    { id: uuidv4(), firstName: 'Anjali', lastName: 'Singh', age: 67, gender: 'Female', bloodGroup: 'B-', phone: '+918618128328', email: 'patient78@email.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Singh', age: 21, gender: 'Other', bloodGroup: 'AB+', phone: '+917478795798', email: 'patient79@email.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Menon', age: 23, gender: 'Female', bloodGroup: 'AB-', phone: '+918748502729', email: 'patient80@email.com' },
    { id: uuidv4(), firstName: 'Pooja', lastName: 'Mehta', age: 90, gender: 'Other', bloodGroup: 'B-', phone: '+917533053725', email: 'patient81@email.com' },
    { id: uuidv4(), firstName: 'Priya', lastName: 'Patel', age: 6, gender: 'Female', bloodGroup: 'B+', phone: '+919649676319', email: 'patient82@email.com' },
    { id: uuidv4(), firstName: 'Meera', lastName: 'Singh', age: 33, gender: 'Other', bloodGroup: 'O-', phone: '+917441643346', email: 'patient83@email.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Chopra', age: 84, gender: 'Female', bloodGroup: 'AB-', phone: '+917249972672', email: 'patient84@email.com' },
    { id: uuidv4(), firstName: 'Deepa', lastName: 'Bose', age: 6, gender: 'Male', bloodGroup: 'A-', phone: '+917096230378', email: 'patient85@email.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Reddy', age: 65, gender: 'Other', bloodGroup: 'B-', phone: '+917256706783', email: 'patient86@email.com' },
    { id: uuidv4(), firstName: 'Amit', lastName: 'Sharma', age: 84, gender: 'Male', bloodGroup: 'AB-', phone: '+917206229021', email: 'patient87@email.com' },
    { id: uuidv4(), firstName: 'Rohan', lastName: 'Gupta', age: 10, gender: 'Female', bloodGroup: 'AB+', phone: '+918822740915', email: 'patient88@email.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Rao', age: 31, gender: 'Male', bloodGroup: 'A-', phone: '+917606090880', email: 'patient89@email.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Gupta', age: 68, gender: 'Male', bloodGroup: 'A-', phone: '+917492430358', email: 'patient90@email.com' },
    { id: uuidv4(), firstName: 'Aditya', lastName: 'Nair', age: 75, gender: 'Female', bloodGroup: 'O-', phone: '+918167717669', email: 'patient91@email.com' },
    { id: uuidv4(), firstName: 'Lakshmi', lastName: 'Verma', age: 21, gender: 'Other', bloodGroup: 'A+', phone: '+917296466412', email: 'patient92@email.com' },
    { id: uuidv4(), firstName: 'Anjali', lastName: 'Joshi', age: 11, gender: 'Female', bloodGroup: 'B-', phone: '+917569033434', email: 'patient93@email.com' },
    { id: uuidv4(), firstName: 'Kiran', lastName: 'Iyer', age: 41, gender: 'Other', bloodGroup: 'AB-', phone: '+917871971756', email: 'patient94@email.com' },
    { id: uuidv4(), firstName: 'Nikhil', lastName: 'Pillai', age: 43, gender: 'Male', bloodGroup: 'A-', phone: '+919779576042', email: 'patient95@email.com' },
    { id: uuidv4(), firstName: 'Vikram', lastName: 'Singh', age: 45, gender: 'Other', bloodGroup: 'AB+', phone: '+918883695460', email: 'patient96@email.com' },
    { id: uuidv4(), firstName: 'Ashok', lastName: 'Malhotra', age: 18, gender: 'Other', bloodGroup: 'O+', phone: '+919405039417', email: 'patient97@email.com' },
    { id: uuidv4(), firstName: 'Rekha', lastName: 'Desai', age: 75, gender: 'Male', bloodGroup: 'AB-', phone: '+919519658997', email: 'patient98@email.com' },
    { id: uuidv4(), firstName: 'Pooja', lastName: 'Gupta', age: 49, gender: 'Male', bloodGroup: 'B-', phone: '+917325769705', email: 'patient99@email.com' },
  ];

  // Symptoms
  global.db.symptoms = [
    { id: uuidv4(), name: 'Fever', category: 'General', severity: 'Moderate', description: 'Description for Fever' },
    { id: uuidv4(), name: 'Cough', category: 'General', severity: 'Mild', description: 'Description for Cough' },
    { id: uuidv4(), name: 'Headache', category: 'General', severity: 'Moderate', description: 'Description for Headache' },
    { id: uuidv4(), name: 'Fatigue', category: 'General', severity: 'Mild', description: 'Description for Fatigue' },
    { id: uuidv4(), name: 'Nausea', category: 'General', severity: 'Severe', description: 'Description for Nausea' },
    { id: uuidv4(), name: 'Dizziness', category: 'General', severity: 'Moderate', description: 'Description for Dizziness' },
    { id: uuidv4(), name: 'Chest Pain', category: 'General', severity: 'Mild', description: 'Description for Chest Pain' },
    { id: uuidv4(), name: 'Shortness of Breath', category: 'General', severity: 'Mild', description: 'Description for Shortness of Breath' },
    { id: uuidv4(), name: 'Abdominal Pain', category: 'General', severity: 'Mild', description: 'Description for Abdominal Pain' },
    { id: uuidv4(), name: 'Joint Pain', category: 'General', severity: 'Mild', description: 'Description for Joint Pain' },
    { id: uuidv4(), name: 'Rash', category: 'General', severity: 'Mild', description: 'Description for Rash' },
    { id: uuidv4(), name: 'Sore Throat', category: 'General', severity: 'Moderate', description: 'Description for Sore Throat' },
    { id: uuidv4(), name: 'Back Pain', category: 'General', severity: 'Moderate', description: 'Description for Back Pain' },
    { id: uuidv4(), name: 'Muscle Ache', category: 'General', severity: 'Severe', description: 'Description for Muscle Ache' },
    { id: uuidv4(), name: 'Insomnia', category: 'General', severity: 'Mild', description: 'Description for Insomnia' },
    { id: uuidv4(), name: 'Anxiety', category: 'General', severity: 'Moderate', description: 'Description for Anxiety' },
    { id: uuidv4(), name: 'Depression', category: 'General', severity: 'Mild', description: 'Description for Depression' },
    { id: uuidv4(), name: 'Weight Loss', category: 'General', severity: 'Moderate', description: 'Description for Weight Loss' },
    { id: uuidv4(), name: 'Weight Gain', category: 'General', severity: 'Severe', description: 'Description for Weight Gain' },
    { id: uuidv4(), name: 'Blurred Vision', category: 'General', severity: 'Mild', description: 'Description for Blurred Vision' },
    { id: uuidv4(), name: 'Hearing Loss', category: 'General', severity: 'Moderate', description: 'Description for Hearing Loss' },
    { id: uuidv4(), name: 'Swelling', category: 'General', severity: 'Severe', description: 'Description for Swelling' },
    { id: uuidv4(), name: 'Numbness', category: 'General', severity: 'Moderate', description: 'Description for Numbness' },
    { id: uuidv4(), name: 'Tingling', category: 'General', severity: 'Moderate', description: 'Description for Tingling' },
    { id: uuidv4(), name: 'Vomiting', category: 'General', severity: 'Mild', description: 'Description for Vomiting' },
    { id: uuidv4(), name: 'Diarrhea', category: 'General', severity: 'Severe', description: 'Description for Diarrhea' },
    { id: uuidv4(), name: 'Constipation', category: 'General', severity: 'Mild', description: 'Description for Constipation' },
    { id: uuidv4(), name: 'Frequent Urination', category: 'General', severity: 'Mild', description: 'Description for Frequent Urination' },
    { id: uuidv4(), name: 'Blood in Urine', category: 'General', severity: 'Mild', description: 'Description for Blood in Urine' },
    { id: uuidv4(), name: 'Palpitations', category: 'General', severity: 'Moderate', description: 'Description for Palpitations' },
    { id: uuidv4(), name: 'High Blood Pressure', category: 'General', severity: 'Mild', description: 'Description for High Blood Pressure' },
    { id: uuidv4(), name: 'Low Blood Pressure', category: 'General', severity: 'Moderate', description: 'Description for Low Blood Pressure' },
    { id: uuidv4(), name: 'Sweating', category: 'General', severity: 'Moderate', description: 'Description for Sweating' },
    { id: uuidv4(), name: 'Chills', category: 'General', severity: 'Moderate', description: 'Description for Chills' },
    { id: uuidv4(), name: 'Loss of Appetite', category: 'General', severity: 'Mild', description: 'Description for Loss of Appetite' },
    { id: uuidv4(), name: 'Difficulty Swallowing', category: 'General', severity: 'Severe', description: 'Description for Difficulty Swallowing' },
    { id: uuidv4(), name: 'Hoarseness', category: 'General', severity: 'Severe', description: 'Description for Hoarseness' },
    { id: uuidv4(), name: 'Memory Loss', category: 'General', severity: 'Mild', description: 'Description for Memory Loss' },
    { id: uuidv4(), name: 'Confusion', category: 'General', severity: 'Moderate', description: 'Description for Confusion' },
    { id: uuidv4(), name: 'Seizures', category: 'General', severity: 'Mild', description: 'Description for Seizures' },
    { id: uuidv4(), name: 'Tremors', category: 'General', severity: 'Severe', description: 'Description for Tremors' },
    { id: uuidv4(), name: 'Weakness', category: 'General', severity: 'Moderate', description: 'Description for Weakness' },
  ];

  // Health Articles
  global.db.articles = [
    { id: uuidv4(), title: 'Understanding Hypertension', content: 'Detailed article about Hypertension causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Neha Das', category: 'Diseases', publishedAt: new Date().toISOString(), views: 3079 },
    { id: uuidv4(), title: 'Understanding Diabetes Type 2', content: 'Detailed article about Diabetes Type 2 causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Amit Pillai', category: 'Diseases', publishedAt: new Date().toISOString(), views: 3974 },
    { id: uuidv4(), title: 'Understanding Asthma', content: 'Detailed article about Asthma causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Ravi Singh', category: 'Diseases', publishedAt: new Date().toISOString(), views: 727 },
    { id: uuidv4(), title: 'Understanding COPD', content: 'Detailed article about COPD causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Anjali Joshi', category: 'Diseases', publishedAt: new Date().toISOString(), views: 2032 },
    { id: uuidv4(), title: 'Understanding Coronary Artery Disease', content: 'Detailed article about Coronary Artery Disease causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Rekha Chopra', category: 'Diseases', publishedAt: new Date().toISOString(), views: 2824 },
    { id: uuidv4(), title: 'Understanding Heart Failure', content: 'Detailed article about Heart Failure causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Rekha Joshi', category: 'Diseases', publishedAt: new Date().toISOString(), views: 2035 },
    { id: uuidv4(), title: 'Understanding Stroke', content: 'Detailed article about Stroke causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Raj Kumar', category: 'Diseases', publishedAt: new Date().toISOString(), views: 1943 },
    { id: uuidv4(), title: 'Understanding Migraine', content: 'Detailed article about Migraine causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Aditya Desai', category: 'Diseases', publishedAt: new Date().toISOString(), views: 4420 },
    { id: uuidv4(), title: 'Understanding Epilepsy', content: 'Detailed article about Epilepsy causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Vivek Singh', category: 'Diseases', publishedAt: new Date().toISOString(), views: 804 },
    { id: uuidv4(), title: 'Understanding Parkinson's Disease', content: 'Detailed article about Parkinson's Disease causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Vikram Patel', category: 'Diseases', publishedAt: new Date().toISOString(), views: 3442 },
    { id: uuidv4(), title: 'Understanding Alzheimer's Disease', content: 'Detailed article about Alzheimer's Disease causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Amit Malhotra', category: 'Diseases', publishedAt: new Date().toISOString(), views: 1784 },
    { id: uuidv4(), title: 'Understanding Osteoarthritis', content: 'Detailed article about Osteoarthritis causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Nikhil Reddy', category: 'Diseases', publishedAt: new Date().toISOString(), views: 4018 },
    { id: uuidv4(), title: 'Understanding Rheumatoid Arthritis', content: 'Detailed article about Rheumatoid Arthritis causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Vivek Singh', category: 'Diseases', publishedAt: new Date().toISOString(), views: 1091 },
    { id: uuidv4(), title: 'Understanding Osteoporosis', content: 'Detailed article about Osteoporosis causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Shreya Singh', category: 'Diseases', publishedAt: new Date().toISOString(), views: 4565 },
    { id: uuidv4(), title: 'Understanding Hypothyroidism', content: 'Detailed article about Hypothyroidism causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Kavya Das', category: 'Diseases', publishedAt: new Date().toISOString(), views: 1086 },
    { id: uuidv4(), title: 'Understanding Hyperthyroidism', content: 'Detailed article about Hyperthyroidism causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Manoj Joshi', category: 'Diseases', publishedAt: new Date().toISOString(), views: 732 },
    { id: uuidv4(), title: 'Understanding IBS', content: 'Detailed article about IBS causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Anjali Mukherjee', category: 'Diseases', publishedAt: new Date().toISOString(), views: 3540 },
    { id: uuidv4(), title: 'Understanding Crohn's Disease', content: 'Detailed article about Crohn's Disease causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Ashok Iyer', category: 'Diseases', publishedAt: new Date().toISOString(), views: 1268 },
    { id: uuidv4(), title: 'Understanding Ulcerative Colitis', content: 'Detailed article about Ulcerative Colitis causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Sunita Nair', category: 'Diseases', publishedAt: new Date().toISOString(), views: 3479 },
    { id: uuidv4(), title: 'Understanding GERD', content: 'Detailed article about GERD causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Vikram Reddy', category: 'Diseases', publishedAt: new Date().toISOString(), views: 2729 },
    { id: uuidv4(), title: 'Understanding Peptic Ulcer', content: 'Detailed article about Peptic Ulcer causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Manoj Mukherjee', category: 'Diseases', publishedAt: new Date().toISOString(), views: 4445 },
    { id: uuidv4(), title: 'Understanding Hepatitis B', content: 'Detailed article about Hepatitis B causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Deepa Patel', category: 'Diseases', publishedAt: new Date().toISOString(), views: 4847 },
    { id: uuidv4(), title: 'Understanding Hepatitis C', content: 'Detailed article about Hepatitis C causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Aditya Kumar', category: 'Diseases', publishedAt: new Date().toISOString(), views: 2235 },
    { id: uuidv4(), title: 'Understanding Cirrhosis', content: 'Detailed article about Cirrhosis causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Anjali Chatterjee', category: 'Diseases', publishedAt: new Date().toISOString(), views: 4514 },
    { id: uuidv4(), title: 'Understanding Chronic Kidney Disease', content: 'Detailed article about Chronic Kidney Disease causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Pooja Chatterjee', category: 'Diseases', publishedAt: new Date().toISOString(), views: 750 },
    { id: uuidv4(), title: 'Understanding UTI', content: 'Detailed article about UTI causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Kiran Pillai', category: 'Diseases', publishedAt: new Date().toISOString(), views: 985 },
    { id: uuidv4(), title: 'Understanding Prostate Cancer', content: 'Detailed article about Prostate Cancer causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Geeta Menon', category: 'Diseases', publishedAt: new Date().toISOString(), views: 4800 },
    { id: uuidv4(), title: 'Understanding Breast Cancer', content: 'Detailed article about Breast Cancer causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Aditya Kumar', category: 'Diseases', publishedAt: new Date().toISOString(), views: 1906 },
    { id: uuidv4(), title: 'Understanding Lung Cancer', content: 'Detailed article about Lung Cancer causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Vikram Das', category: 'Diseases', publishedAt: new Date().toISOString(), views: 3117 },
    { id: uuidv4(), title: 'Understanding Colorectal Cancer', content: 'Detailed article about Colorectal Cancer causes, symptoms, treatment and prevention. ' + 'Lorem ipsum ' * 50, author: 'Amit Chopra', category: 'Diseases', publishedAt: new Date().toISOString(), views: 3451 },
  ];

  // Pharmacy / Medications
  global.db.pharmacy = [
    { id: uuidv4(), name: 'Metformin', category: 'Medicine', price: 77, stock: 77, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Amlodipine', category: 'Medicine', price: 275, stock: 352, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Lisinopril', category: 'Medicine', price: 282, stock: 144, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Atorvastatin', category: 'Medicine', price: 193, stock: 395, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Omeprazole', category: 'Medicine', price: 78, stock: 496, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Levothyroxine', category: 'Medicine', price: 443, stock: 387, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Albuterol', category: 'Medicine', price: 361, stock: 128, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Gabapentin', category: 'Medicine', price: 414, stock: 50, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Sertraline', category: 'Medicine', price: 243, stock: 368, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Ibuprofen', category: 'Medicine', price: 446, stock: 69, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Acetaminophen', category: 'Medicine', price: 129, stock: 298, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Amoxicillin', category: 'Medicine', price: 231, stock: 70, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Azithromycin', category: 'Medicine', price: 448, stock: 138, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Prednisone', category: 'Medicine', price: 364, stock: 107, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Insulin', category: 'Medicine', price: 311, stock: 238, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Warfarin', category: 'Medicine', price: 52, stock: 41, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Clopidogrel', category: 'Medicine', price: 396, stock: 474, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Losartan', category: 'Medicine', price: 197, stock: 417, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Metoprolol', category: 'Medicine', price: 395, stock: 147, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Hydrochlorothiazide', category: 'Medicine', price: 324, stock: 289, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Furosemide', category: 'Medicine', price: 492, stock: 178, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Spironolactone', category: 'Medicine', price: 189, stock: 390, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Pantoprazole', category: 'Medicine', price: 344, stock: 117, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Ranitidine', category: 'Medicine', price: 432, stock: 293, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Cetirizine', category: 'Medicine', price: 293, stock: 412, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Loratadine', category: 'Medicine', price: 463, stock: 240, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Montelukast', category: 'Medicine', price: 126, stock: 212, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Fluticasone', category: 'Medicine', price: 61, stock: 117, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Salmeterol', category: 'Medicine', price: 485, stock: 47, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Tiotropium', category: 'Medicine', price: 114, stock: 165, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Tramadol', category: 'Medicine', price: 144, stock: 491, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Oxycodone', category: 'Medicine', price: 277, stock: 258, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Morphine', category: 'Medicine', price: 445, stock: 72, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Codeine', category: 'Medicine', price: 475, stock: 295, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Aspirin', category: 'Medicine', price: 102, stock: 239, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Naproxen', category: 'Medicine', price: 269, stock: 239, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Diclofenac', category: 'Medicine', price: 485, stock: 321, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Celecoxib', category: 'Medicine', price: 179, stock: 18, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Allopurinol', category: 'Medicine', price: 62, stock: 477, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Colchicine', category: 'Medicine', price: 433, stock: 315, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Methotrexate', category: 'Medicine', price: 338, stock: 464, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Hydroxychloroquine', category: 'Medicine', price: 208, stock: 335, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Adalimumab', category: 'Medicine', price: 200, stock: 446, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Etanercept', category: 'Medicine', price: 468, stock: 95, manufacturer: 'PharmaCo', requiresPrescription: true },
    { id: uuidv4(), name: 'Rituximab', category: 'Medicine', price: 461, stock: 122, manufacturer: 'PharmaCo', requiresPrescription: false },
    { id: uuidv4(), name: 'Insulin Glargine', category: 'Medicine', price: 258, stock: 271, manufacturer: 'PharmaCo', requiresPrescription: false },
  ];

  global.db.appointments = [];
  // Pre-populate some appointments
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.appointments.push({ id: uuidv4(), title: 'Sample appointments 19', status: 'active', createdAt: new Date().toISOString() });

  global.db.labs = [];
  // Pre-populate some labs
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.labs.push({ id: uuidv4(), title: 'Sample labs 19', status: 'active', createdAt: new Date().toISOString() });

  global.db.insurance = [];
  // Pre-populate some insurance
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.insurance.push({ id: uuidv4(), title: 'Sample insurance 19', status: 'active', createdAt: new Date().toISOString() });

  global.db.bills = [];
  // Pre-populate some bills
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.bills.push({ id: uuidv4(), title: 'Sample bills 19', status: 'active', createdAt: new Date().toISOString() });

  global.db.notifications = [];
  // Pre-populate some notifications
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.notifications.push({ id: uuidv4(), title: 'Sample notifications 19', status: 'active', createdAt: new Date().toISOString() });

  global.db.reports = [];
  // Pre-populate some reports
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.reports.push({ id: uuidv4(), title: 'Sample reports 19', status: 'active', createdAt: new Date().toISOString() });

  global.db.feedback = [];
  // Pre-populate some feedback
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.feedback.push({ id: uuidv4(), title: 'Sample feedback 19', status: 'active', createdAt: new Date().toISOString() });

  global.db.emergencies = [];
  // Pre-populate some emergencies
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 0', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 1', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 2', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 3', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 4', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 5', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 6', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 7', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 8', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 9', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 10', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 11', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 12', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 13', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 14', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 15', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 16', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 17', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 18', status: 'active', createdAt: new Date().toISOString() });
  global.db.emergencies.push({ id: uuidv4(), title: 'Sample emergencies 19', status: 'active', createdAt: new Date().toISOString() });

  console.log('Database seeded successfully');
  console.log('Doctors:', global.db.doctors.length);
  console.log('Patients:', global.db.patients.length);
  console.log('Departments:', global.db.departments.length);
};
