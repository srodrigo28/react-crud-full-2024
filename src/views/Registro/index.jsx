import "./registro.css"

import { useState } from "react"


const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [telefone, setTelefone] = useState('')

const [sexo, setSexo] = useState('')
const [senha, setSenha] = useState('')
const [senhaC, setSenhaC] = useState('')


const handleSalvar = (e) => {
    e.preventDefaul()

    if(nome === ''){
        alert('Por favor preencher o campo nome!')
    }else if(email === ''){
        alert('Por favor preencher o campo email!')
    }else if(telefone === ''){
        alert('Por favor preencher o campo telefone!')
    }
    else if(sexo === ''){
        alert('Por favor preencher o campo sexo!')
    }else if(senha === ''){
        alert('Por favor preencher o campo senha!')
    }else if(senhaC === ''){
        alert('Por favor preencher o campo confirmar senha!')
    }
}


export function Registro(){0
    return(

        <main className="container">
            <h1 className="mt-4">Registro</h1>

            <form onSubmit={handleSalvar}>
                <div className="row mt-5">
                    <div className="col">
                        <input 
                            type="text"
                            value={nome}
                            placeholder="nome"
                            className="form-control"
                            onChange={ e => setNome(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            value={email}
                            placeholder="e-mail"
                            className="form-control"
                            onChange={ e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            value={telefone}
                            placeholder="telefone"
                            className="form-control"
                            onChange={ e => setTelefone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col">
                        <select className="form-control" value={sexo} onChange={e => setSexo(e.target.value)}>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </select>
                    </div>
                    <div className="col">
                        <input 
                            value={senha}
                            type="password" 
                            placeholder="senha"
                            className="form-control"
                            onChange={ e => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input 
                            value={senhaC}
                            type="password" 
                            className="form-control"
                            placeholder="confirmar-senha"
                            onChange={ e => setSenhaC(e.target.value)}

                        />
                    </div>
                </div>
                <button className="btn btn-primary">Cadastrar</button>
                <button className="btn btn-warning">Cancelar</button>
            </form>
        </main>
    )
}