/**
 * Doctor Model - Comprehensive doctor profile and availability management
 * Includes qualifications, schedule, ratings, and specializations
 */
class Doctor {
  constructor(data = {}) {
    this.id = data.id || require('uuid').v4();
    this.userId = data.userId || null;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.specialization = data.specialization || '';
    this.department = data.department || '';
    this.qualifications = data.qualifications || [];
    this.experienceYears = data.experienceYears || 0;
    this.licenseNumber = data.licenseNumber || '';
    this.registrationNumber = data.registrationNumber || '';
    this.hospitalAffiliation = data.hospitalAffiliation || [];
    this.languages = data.languages || ['English', 'Hindi', 'Telugu'];
    this.consultationFee = data.consultationFee || 500;
    this.followUpFee = data.followUpFee || 300;
    this.availability = data.availability || {
      monday: { start: '09:00', end: '17:00', slots: [] },
      tuesday: { start: '09:00', end: '17:00', slots: [] },
      wednesday: { start: '09:00', end: '17:00', slots: [] },
      thursday: { start: '09:00', end: '17:00', slots: [] },
      friday: { start: '09:00', end: '17:00', slots: [] },
      saturday: { start: '09:00', end: '13:00', slots: [] },
      sunday: { start: null, end: null, slots: [] }
    };
    this.rating = data.rating || 0;
    this.totalReviews = data.totalReviews || 0;
    this.reviews = data.reviews || [];
    this.bio = data.bio || '';
    this.achievements = data.achievements || [];
    this.publications = data.publications || [];
    this.profileImage = data.profileImage || null;
    this.isVerified = data.isVerified || false;
    this.isAvailable = data.isAvailable !== undefined ? data.isAvailable : true;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
  }

  getFullName() {
    return `Dr. ${this.firstName} ${this.lastName}`;
  }

  getAverageRating() {
    if (this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / this.reviews.length).toFixed(1);
  }

  addReview(review) {
    this.reviews.push(review);
    this.totalReviews = this.reviews.length;
    this.rating = parseFloat(this.getAverageRating());
    this.updatedAt = new Date().toISOString();
  }

  isAvailableOn(day, time) {
    const schedule = this.availability[day.toLowerCase()];
    if (!schedule || !schedule.start) return false;
    return time >= schedule.start && time <= schedule.end;
  }

  toJSON() {
    return { ...this };
  }

  validate() {
    const errors = [];
    if (!this.firstName) errors.push('First name required');
    if (!this.lastName) errors.push('Last name required');
    if (!this.specialization) errors.push('Specialization required');
    if (!this.licenseNumber) errors.push('License number required');
    if (this.consultationFee < 0) errors.push('Invalid consultation fee');
    return errors;
  }
}

module.exports = Doctor;
