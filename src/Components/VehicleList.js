//Display List of vehicles

import React from 'react'
const VehicleList = ({vehicles,onEdit,onDelete}) => {
    return (
        <>
        
        <div className="vehicle-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>License Plate</th>
                        <th>Driver</th>
                        <th>Schedule</th>
                        <th>Actions</th>
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
                            <td>
                                <button className='edit' onClick={() => onEdit(vehicle)}>Edit</button>
                                <button className='delete' onClick={() => onDelete(vehicle.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
    
}

export default VehicleList