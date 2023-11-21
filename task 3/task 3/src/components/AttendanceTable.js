// AttendanceTable.js
import React from 'react';
import './AttendanceTable.css'; // Import a separate CSS file for styling

const AttendanceRow = ({ student, attendance, onToggleAttendance }) => {
  return (
    <tr>
      
      <td>{student.nutrients}</td> {/* Change this line for the "Nutrients" column */}
      <td>{student.fatPercentage}</td> {/* Change this line for the "Fat Percentage" column */}
      <td>{student.energy}</td> {/* Change this line for the "Energy" column */}
      <td>
        <input
          type="checkbox"
          checked={attendance}
          onChange={() => onToggleAttendance(student.id)}
        />
      </td>
    </tr>
  );
};

const AttendanceTable = ({ students, attendanceData, onToggleAttendance }) => {
  if (!students) {
    return <p>Loading...</p>; // or handle it in another way
  }
  return (
    <div className="table-container">
      <h2 className="table-heading">Table</h2>
      <table className="attendance-table">
        <thead>
          <tr>
          
            <th>Nutrients</th>
            <th>Fat Percentage</th>
            <th>Energy</th>
            <th>Is it Healthy</th>
          
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <AttendanceRow
              key={student.id}
              student={student}
              attendance={attendanceData[student.id]}
              onToggleAttendance={onToggleAttendance}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
