// Sample Doctor Data
const doctors = [
    { id: 1, name: 'Dr. Mahesh', slots: 10, booked: 2, availableHours: ['09:00', '17:00'] },
    { id: 2, name: 'Dr. Trinath', slots: 8, booked: 3, availableHours: ['10:00', '16:00'] },
    { id: 3, name: 'Dr. Shiva', slots: 12, booked: 5, availableHours: ['08:00', '14:00'] },
];

const appointments = [];

// Display Doctor Information
const doctorList = document.getElementById('doctor-list');
const doctorSelect = document.getElementById('doctorSelect');
const appointmentList = document.getElementById('appointment-list');
const doctorSearch = document.getElementById('doctorSearch');
const appointmentTime = document.getElementById('appointmentTime');

function displayDoctors(filter = '') {
    doctorList.innerHTML = '';
    doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
    doctors
        .filter(doctor => doctor.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(doctor => {
            // Create and append doctor cards in the doctor list
            const doctorCard = document.createElement('div');
            doctorCard.classList.add('doctor-card');
            doctorCard.innerHTML = `
                <h3>${doctor.name}</h3>
                <p>Total Slots: ${doctor.slots}</p>
                <p>Available Slots: ${doctor.slots - doctor.booked}</p>
                <p>Booked Slots: ${doctor.booked}</p>
            `;
            doctorList.appendChild(doctorCard);

            // Create and append doctor options in the select dropdown
            const doctorOption = document.createElement('option');
            doctorOption.value = doctor.id;
            doctorOption.textContent = doctor.name;
            doctorSelect.appendChild(doctorOption);
        });
}

function generateTimeSlots(availableHours) {
    const [start, end] = availableHours.map(time => time.split(':').map(Number));
    const slots = [];
    let [hour, minute] = start;

    while (hour < end[0] || (hour === end[0] && minute < end[1])) {
        const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        slots.push(timeString);
        minute += 30;
        if (minute === 60) {
            minute = 0;
            hour += 1;
        }
    }

    appointmentTime.innerHTML = '';
    slots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        appointmentTime.appendChild(option);
    });
}

// Handle doctor selection to generate time slots
doctorSelect.addEventListener('change', (e) => {
    const selectedDoctorId = e.target.value;
    const selectedDoctor = doctors.find(doctor => doctor.id == selectedDoctorId);
    if (selectedDoctor) {
        generateTimeSlots(selectedDoctor.availableHours);
    } else {
        appointmentTime.innerHTML = ''; // Clear time slots if no doctor is selected
    }
});

// Search functionality for doctors
doctorSearch.addEventListener('input', (e) => {
    displayDoctors(e.target.value);
});

// Initial display of doctors
displayDoctors();

// Handle Booking
document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const doctorId = document.getElementById('doctorSelect').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTimeValue = appointmentTime.value;

    if (!patientName || !doctorId || !appointmentDate || !appointmentTimeValue) {
        alert('Please fill out all fields.');
        return;
    }

    const doctor = doctors.find(d => d.id == doctorId);
    if (doctor.booked >= doctor.slots) {
        alert('No available slots for the selected doctor.');
        return;
    }

    const appointmentId = Date.now();
    appointments.push({
        id: appointmentId,
        patientName,
        doctorName: doctor.name,
        doctorId,
        date: appointmentDate,
        time: appointmentTimeValue
    });

    doctor.booked++;
    displayDoctors(); // Update doctor display with new slot availability
    alert('Appointment booked successfully.');
    document.getElementById('booking-form').reset();
    appointmentTime.innerHTML = '';
});

// Handle Cancellation
document.getElementById('cancellation-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const appointmentId = document.getElementById('appointmentId').value;

    const index = appointments.findIndex(a => a.id == appointmentId);
    if (index === -1) {
        alert('Invalid appointment ID.');
        return;
    }

    const doctor = doctors.find(d => d.id == appointments[index].doctorId);
    doctor.booked--;

    appointments.splice(index, 1);
    displayDoctors(); // Update doctor display with new slot availability
    alert('Appointment canceled successfully.');
    document.getElementById('cancellation-form').reset();
});

// View Appointments
document.getElementById('viewAppointmentsBtn').addEventListener('click', () => {
    appointmentList.innerHTML = '';

    if (appointments.length === 0) {
        appointmentList.innerHTML = '<p>No appointments booked.</p>';
        return;
    }

    appointments.forEach(app => {
        const appointmentCard = document.createElement('div');
        appointmentCard.classList.add('appointment-card');
        appointmentCard.innerHTML = `
            <p>Appointment ID: ${app.id}</p>
            <p>Patient Name: ${app.patientName}</p>
            <p>Doctor: ${app.doctorName}</p>
            <p>Date: ${app.date}</p>
            <p>Time: ${app.time}</p>
        `;
        appointmentList.appendChild(appointmentCard);
    });
});
