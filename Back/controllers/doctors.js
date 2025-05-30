import {db} from "../db.js"

export const getDoctorById = (req, res) => {
  const q = "SELECT * FROM medicos WHERE id = ?";
  const doctorId = req.params.id;

  db.query(q, [doctorId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({ message: "Médico não encontrado" });
    return res.status(200).json(data[0]);
  });
};