import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Appointment.css';

// Mock data - prepared for future MySQL integration
const doctorsData = {
  '1': { id: 1, name: 'Dr. Carlos Silva', specialty: 'Cardiologia' },
  '2': { id: 2, name: 'Dra. Ana Souza', specialty: 'Ortopedia' },
  '3': { id: 3, name: 'Dr. Roberto Mendes', specialty: 'Pediatria' },
  '4': { id: 4, name: 'Dra. Mariana Costa', specialty: 'Dermatologia' }
};

// Available dates
const availableDates = [
  { id: 1, date: '15/07', day: 'Seg' },
  { id: 2, date: '16/07', day: 'Ter' },
  { id: 3, date: '17/07', day: 'Qua' },
  { id: 4, date: '18/07', day: 'Qui' },
  { id: 5, date: '19/07', day: 'Sex' },
];

// Available time slots
const availableTimeSlots = [
  { id: 1, time: '09:00' },
  { id: 2, time: '10:00' },
  { id: 3, time: '11:00' },
  { id: 4, time: '14:00' },
  { id: 5, time: '15:00' },
  { id: 6, time: '16:00' },
];

const Appointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData[doctorId] || null;
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      // In a real app, this would send data to the backend
      alert(`Consulta agendada com ${doctor.name} para ${selectedDate.date} às ${selectedTime.time}`);
      navigate(`/medico/${doctorId}`);
    } else {
      alert('Por favor, selecione uma data e horário');
    }
  };

  if (!doctor) {
    return (
      <div className="appointment-error">
        <div className="container">
          <h2>Médico não encontrado</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-page">
      <div className="container">
        <h1>Agendar Consulta</h1>
        <div className="appointment-doctor">
          <div className="doctor-avatar-small"></div>
          <div className="doctor-info-small">
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
          </div>
        </div>
        
        <div className="appointment-content">
          <div className="date-selection">
            <h3>Selecione uma Data</h3>
            <div className="dates-grid">
              {availableDates.map(date => (
                <div 
                  key={date.id}
                  className={`date-item ${selectedDate === date ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  <div className="date-day">{date.day}</div>
                  <div className="date-number">{date.date}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="time-selection">
            <h3>Selecione um Horário</h3>
            <div className="time-slots">
              {availableTimeSlots.map(timeSlot => (
                <div 
                  key={timeSlot.id}
                  className={`time-slot ${selectedTime === timeSlot ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(timeSlot)}
                >
                  {timeSlot.time}
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="schedule-confirm-button"
            disabled={!selectedDate || !selectedTime}
            onClick={handleSchedule}
          >
            Confirmar Agendamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;