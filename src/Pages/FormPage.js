import React from "react";
import VehicleForm from "../Components/VehicleForm";
import VehicleList from "../Components/VehicleList";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/vehicle_details";

function FormPage() {

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
    }, []);
  
    const handleAdd = async (vehicle) => {
      try {
        await axios.post(API_URL, vehicle);
        fetchVehicles();
      } catch (error) {
        console.error('Error adding vehicle:', error);
      }
    }
  
    const handleEdit = async (vehicle) => {
      try {
        await axios.put(`${API_URL}/${vehicle.id}`,vehicle);
        fetchVehicles();
      } catch (error) {
        console.error('Error editing vehicle:', error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchVehicles();
      } catch (error) {
        console.error('Error deleting vehicle:', error);
      }
    };
    
  
  
  
  
  
    return (
      <>
      <div className='main-content'>
        <br></br>
        <h2 style={{color:"white"}}>Fill out the details</h2>

      <div className="form-container">
        <VehicleForm className="vehicle-form" onSubmit={editingVehicle? handleEdit : handleAdd} clearEdit={handleEdit} initialData={editingVehicle} />
        <VehicleList className="vehicle-list" vehicles={vehicles} onEdit={setEditingVehicle} onDelete={handleDelete} />

      </div>
      </div>
      </>
     
    );
  }

  export default FormPage