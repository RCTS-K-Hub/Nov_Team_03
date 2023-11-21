import React from 'react';
import '../styles/Table.css'; // Import the CSS file for Table styles

const Table = () => {
  return (
    <div className="table-container">
      <div className="table">
        <h2>Time table</h2>
        <table>
          <thead>
            <tr>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th> {/* Add a new column for Friday */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C</td>
              <td>CSS</td>
              <td>HTML</td>
              <td>JS</td>
              <td>REACT</td> {/* Add data for the new Friday column */}
            </tr>
            <tr>
              <td>PYTHON</td>
              <td>ETHICAL</td>
              <td>AWS</td>
              <td>C++</td>
              <td>DATA STRUCTURES</td> {/* Add data for the new Friday column */}
            </tr>
            <tr>
              <td>ANGULAR</td> {/* Add a new row with data */}
              <td>UI/UX</td>
              <td>DOCKER</td>
              <td>NETWORKING</td>
              <td>JAVA</td> {/* Add data for the new Friday column */}
            </tr>
            <tr>
              <td>SQL</td> {/* Add a new row with data */}
              <td>SECURITY</td>
              <td>DOCKER</td>
              <td>NETWORKING</td>
              <td>ALGORITHMS</td> {/* Add data for the new Friday column */}
            </tr>
            {/* Add more rows with data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
