import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';

export default function CarsManager() {
    const [cars, setCars] = useState([]);

    const API = "http://localhost:4000";

    const fetchAllCars = () => {
        fetch(`${API}/db`)
            .then((response) => response.json())
            // .then(response => {
            //     console.log(response);
            // })
            .then(res => {
                setCars(res)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchAllCars();
    }, []);


    return (
        <>
            <div className='container'>
                <h1>Car manager</h1>
                <div>
                    <h2>Cars in database</h2>
                    <div className="cars">
                        <ul className="list">
                            {cars.map((car, index) => (
                                <li key={index}>
                                    <div>
                                        <h3>{car.name}</h3>
                                    </div>
                                </li>

                            ))}
                        </ul>
                        {/*{cars.map((el, key) => <Car handleUpdate={updateCar} handleDelete={deleteCar} key={key} {...el} />)}*/}


                        {/*<ul className="list">*/}

                        {/*    {firstPage.map((entity, index) => (*/}

                        {/*        <li key={index}>*/}
                        {/*            <div>*/}
                        {/*                <h5>{entity.name}</h5>*/}
                        {/*                <p>{entity.description}</p>*/}
                        {/*            </div>*/}
                        {/*            <p>{entity.donation}</p>*/}
                        {/*        </li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}

                    </div>
                </div>
            </div>
        </>
    )
}