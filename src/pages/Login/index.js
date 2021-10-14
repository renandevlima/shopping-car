import React, {useState} from 'react';

import { useDispatch } from 'react-redux';

import { authLogin } from '../../store/fetchActions'

export default function Login() {
    const [form, setForm] = useState({username: '', password: ''});

    const dispatch = useDispatch();

    function changeForm(e) {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }

    function submitForm(e) {
        e.preventDefault();
        
        dispatch(authLogin(form));

        setForm({username: '', password: ''});
    }

    return <form 
                onSubmit={submitForm}
                style={{
                    margin: "40px auto",
                    width: 350
                }}
            >
                <h2 className="text-center">SC - Login</h2>
                <div className="form-group">
                    <input className="form-control" onChange={changeForm} name="username" placeholder="Usuário" type="text" value={form.username}/>
                </div>
                <div className="form-group">
                    <input className="form-control" onChange={changeForm} name="password" placeholder="Senha" type="password" value={form.password}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">Logar</button>
                </div>
            </form>;
        }