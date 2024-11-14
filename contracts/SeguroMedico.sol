// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SeguroMedico {

    struct Seguro {
        uint256 fechaInicio;
        uint256 fechaVencimiento;
        bool activo;
        uint256 id;
        uint256[] historialRenovaciones; // Array para registrar fechas de renovaciones
    }

    mapping(uint256 => Seguro) public seguros;

    // Crear un seguro médico
    function crearSeguro(uint256 _id, uint256 _duracion) external {
        require(seguros[_id].activo == false, "Ya existe un seguro activo para este ID.");

        uint256 fechaInicio = block.timestamp;
        uint256 fechaVencimiento = fechaInicio + _duracion;

        seguros[_id] = Seguro({
            fechaInicio: fechaInicio,
            fechaVencimiento: fechaVencimiento,
            activo: true,
            id: _id,
            historialRenovaciones: new uint256[](0) // Crear un array vacío sin necesidad de inicializarlo
        });
    }

    // Verificar si el seguro está activo
    function esSeguroActivo(uint256 _id) external view returns (bool) {
        Seguro memory seguro = seguros[_id];
        return seguro.activo && block.timestamp < seguro.fechaVencimiento;
    }

    // Renovar el seguro
    function renovarSeguro(uint256 _id, uint256 _duracion) external {
        require(seguros[_id].activo == true, "No tienes un seguro activo.");

        // Agregar la fecha de renovación al historial
        seguros[_id].historialRenovaciones.push(block.timestamp);

        // Actualizar la fecha de vencimiento
        seguros[_id].fechaVencimiento += _duracion;
    }

    // Cancelar seguro
    function cancelarSeguro(uint256 _id) external {
        seguros[_id].activo = false;
    }

    // Consultar historial de renovaciones
    function consultarHistorialRenovaciones(uint256 _id) external view returns (uint256[] memory) {
        return seguros[_id].historialRenovaciones;
    }

    function tiempoRestante(uint256 _id) external view returns (uint256) { 
        Seguro memory seguro = seguros[_id]; 
        require(seguro.activo, "No Act"); 
        if (block.timestamp >= seguro.fechaVencimiento) {
             return 0; 
             } 
             else { return seguro.fechaVencimiento - block.timestamp; } }
}
