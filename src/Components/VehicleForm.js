
import React from 'react';
import { useState, useEffect } from 'react';

const VehicleForm = ({onSubmit,initialData,clearEdit})=>{
    const [vehicles, setVehicles] = useState({type:"",license:"",driver:"",schedule:""});

    useEffect(()=>{
        if(initialData){
            setVehicles(initialData);
        }
    },[initialData]);

    const handleChange = (e) => {
        setVehicles({...vehicles, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(vehicles);
        if(clearEdit) clearEdit();
        setVehicles({type:"",license:"",driver:"",schedule:""});
    };

    return(
        
        <form onSubmit={handleSubmit}>
            
            <table className='form-table'>
                <tbody>
                    <tr>
                        <td className='form-label'><label>Type</label></td>
                        <td className='form-input'><input type="text" name="type" value={vehicles.type} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td className='form-label'><label>License Plate</label></td>
                        <td className='form-input'><input type="text" name="license" value={vehicles.license} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td className='form-label'><label>Driver</label></td>
                        <td className='form-input'><input type="text" name="driver" value={vehicles.driver} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td className='form-label'><label>Schedule</label></td>
                        <td className='form-input'><input type="date" name="schedule" value={vehicles.schedule} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td  style={{border:"none"}}><button type="submit">{initialData ? "Update" : "Add Vehicle"}</button></td>
                        
                        
                    </tr>
                </tbody>
            </table>
        </form>
        
    )
}

export default VehicleForm