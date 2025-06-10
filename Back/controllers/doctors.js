import {db} from '../db.js';

export const getDoctorsBySpecialty = (req, res) => {
  const { specialty } = req.params;

  const query = 'SELECT * FROM medicos WHERE Especialidade = ?';
  
  db.query(query, [specialty], (err, results) => {
    if (err) {
      console.error('Erro ao buscar médicos:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.json(results);
  });
};

export const getDoctorById = (req, res) => {
  const q = "SELECT * FROM medicos WHERE id = ?";
  const doctorId = req.params.id;

  db.query(q, [doctorId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({ message: "Médico não encontrado" });
    return res.status(200).json(data[0]);
  });
};

export const getDoctor = (_, res) => { 
    
  const query = 'SELECT * FROM medicos WHERE id <= 4;';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar médicos (getDoctor):', err);
            return res.status(500).json({ error: 'Erro interno do servidor ao buscar médicos.' });
        }
        res.json(results)
    });

};

export const searchDoctors = (req, res) => {
  const { q } = req.query;
  const query = `
    SELECT * FROM medicos 
    WHERE Nome LIKE ? OR Especialidade LIKE ?
  `;

  const searchValue = `%${q}%`;

  db.query(query, [searchValue, searchValue], (err, results) => {
    if (err) {
      console.error('Erro na busca de médicos:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.json(results);
  });
};
