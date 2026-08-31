/**
 * User Model - Core authentication and profile management
 * Handles patients, doctors, admins, and staff roles
 */
class User {
  constructor(data = {}) {
    this.id = data.id || require('uuid').v4();
    this.email = data.email || '';
    this.passwordHash = data.passwordHash || '';
    this.role = data.role || 'patient'; // patient, doctor, admin, staff, nurse
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.phone = data.phone || '';
    this.dateOfBirth = data.dateOfBirth || null;
    this.gender = data.gender || '';
    this.address = data.address || {};
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
    this.isActive = data.isActive !== undefined ? data.isActive : true;
    this.lastLogin = data.lastLogin || null;
    this.profileImage = data.profileImage || null;
    this.preferences = data.preferences || {};
    this.emergencyContact = data.emergencyContact || {};
    this.medicalHistory = data.medicalHistory || [];
    this.allergies = data.allergies || [];
    this.bloodGroup = data.bloodGroup || '';
    this.height = data.height || null;
    this.weight = data.weight || null;
    this.insuranceInfo = data.insuranceInfo || {};
  }

  toJSON() {
    const { passwordHash, ...safe } = this;
    return safe;
  }

  validate() {
    const errors = [];
    if (!this.email || !this.email.includes('@')) errors.push('Invalid email');
    if (!this.firstName) errors.push('First name required');
    if (!this.lastName) errors.push('Last name required');
    if (!['patient', 'doctor', 'admin', 'staff', 'nurse'].includes(this.role)) {
      errors.push('Invalid role');
    }
    return errors;
  }
}

module.exports = User;
