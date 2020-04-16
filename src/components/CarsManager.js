import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

export default function CarsManager() {

    const API = "http://localhost:4000";

    fetch(`${API}/db`)
        .then((response) => response.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });




    return null
}