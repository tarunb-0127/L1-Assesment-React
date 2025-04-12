import React from "react";
import VehicleList from "../Components/VehicleList";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:3001/vehicle_details";

const VehiclesPage = () => {

     const [vehicles, setVehicles] = useState([]);
        const [editingVehicle, setEditingVehicle] = useState(null);

    const fetchVehicles = async () => {
        try {
            const response = await axios.get(API_URL);
            setVehicles(response.data);
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, [])
    const handleSearch = async (driverName) => {
        try {
            const response = await axios.get(`${API_URL}?driver=${driverName}`);
            setVehicles(response.data);
        } catch (error) {
            console.error('Error searching for vehicles:', error);
        }
    };

    

    return (
        <>
        <div className="search-bar" align="center">
        <div id='search' class="d-flex my-2 my-lg-0">
                              <form class="d-flex">
                                  <input
                                      class="form-control me-sm-2"
                                      type="text"
                                      placeholder="Search"
                                      onChange={e => handleSearch(e.target.value)}
                                     
                                  />
                                  <button
                                      class="btn btn-outline-success my-2 my-sm-0"
                                      type="submit"
                                      
                                      
                                  >
                                      Search
                                  </button>
                              </form>
                          </div>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Vehicle List</h1>

        <div className="vehicle-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>License Plate</th>
                        <th>Driver</th>
                        <th>Schedule</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.id}</td>
                            <td>{vehicle.type}</td>
                            <td>{vehicle.license}</td>
                            <td>{vehicle.driver}</td>
                            <td>{vehicle.schedule}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default VehiclesPage