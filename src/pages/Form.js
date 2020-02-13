import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Form() {

    const query = useQuery();
    
    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ age, setAge ] = useState(0);

    useEffect(function () {
        const id = query.get('id'); 

        // Solo para pruebas
        setName('')
        setSurname('');

        /*const headers = new Headers();
        headers.set('X-WEB-KEY', 'Development');
        
        fetch(`https://api.bnext.io/partner_test/user?id=${ id }`, {
            method: 'GET',
            headers,
            mode: 'cors'
        })
            .then(response => response.json())
            .then(response => {
              const data = response.data;

              setName(data.name);
              setAge(data.age);
              setEmail(data.email);
              setPhone(data.phone);
              setSurname(data.surname);
            });*/
    }, []);

    return (
        <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="id">Id</label>
            <input type="text" class="form-control" id="id" value={ IDBDatabase } required/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" value={ name } required/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="surname">Surname</label>
            <input type="text" class="form-control" id="surname" value={ surname } required/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" value={ email } required/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" value={ phone } required/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age" value={ age } required/>
          </div>
        </div>
      </form>
    );
}

export default Form;