import React, { useState } from 'react';
import './Table.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTable = () => {
    const filter = searchTerm.toUpperCase();
    const table = document.querySelector(".table-box");
    const rows = table.querySelectorAll(".table-row");
  
    let noDataFound = true;
  
    for (let i = 2; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll(".table-cell");
      let rowVisible = false;
  
      for (let j = 0; j < cells.length; j++) {
        const txtValue = cells[j].innerText || cells[j].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          rowVisible = true;
          noDataFound = false;
          break;
        }
      }

      rows[i].style.display = rowVisible ? "" : "none";
    }
  
    // Show/hide the "No data found" message
    const noDataMessage = document.getElementById("noDataMessage");
    noDataMessage.style.display = noDataFound ? "block" : "none";
  };

  return (
    <div className='tablecontainer' id="Table">
      <div className="Analysis">
        <p>Analysis</p>
      </div>
      <div className="table-box">
        <div className="table-row search-bar">
          <div className="table-cell" colSpan="3">
            <input
              type="text"
              id="searchInput"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={searchTable}
              placeholder="Search for tutorials..."
            />
          </div>
        </div>

        <div className="table-row table-head">
          <div className="table-cell first-cell">
            <p>State</p>
          </div>
          <div className="table-cell">
            <p>Rating out of 5</p>
          </div>
          
        </div>

        <div id="noDataMessage" style={{ display: 'none', textAlign: 'center', marginTop: '10px', color: 'red' }}>
          No data found
        </div>

        <div className="table-content">
          <div className="table-row">
            <div className="table-cell first-cell">
              <p>Andhra pradesh</p>
            </div>
            <div className="table-cell">
              <p>2.3</p>
            </div>
           
          </div>
          <div className="table-row">
            <div className="table-cell first-cell">
                <p>Kerala</p>
            </div>
            <div className="table-cell">
                <p>1.5</p>
            </div>
           
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Maharastra</p>
            </div>
            <div className="table-cell">
                <p>5.9</p>
            </div>
            
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Tamil Nadu</p>
            </div>
            <div className="table-cell">
                <p>1.5</p>
            </div>
           
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Gujarat</p>
            </div>
            <div className="table-cell">
                <p>2.5</p>
            </div>
            
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Haryana</p>
            </div>
            <div className="table-cell">
                <p>1.5</p>
            </div>
            
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Madhya pradesh</p>
            </div>
            <div className="table-cell">
                <p>2.6</p>
            </div>
           
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Punjab</p>
            </div>
            <div className="table-cell">
                <p>3.3</p>
            </div>
            
        </div>
        <div className="table-row">
            <div className="table-cell first-cell">
                <p>Rajastan</p>
            </div>
            <div className="table-cell">
                <p>0.5</p>
            </div>
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
