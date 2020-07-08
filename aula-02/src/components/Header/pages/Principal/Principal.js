import React, { Component } from "react";
import './styles.css'

class Principal extends Component{
    render(){
        return(
            <div className='list-biography'>
                <article>
                    <p className="name-woman">Nome</p>
                    <p className='description-biography'>Descriçaão</p>
                    <a href="" className="read-more">Leia mais</a>

                </article>
            </div>
        )
    }
}

export default Principal;