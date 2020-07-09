import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import api from "../../services/api/Api";
import './styles.css';

class Main extends Component {
  state ={
    biographies: []

  }

  componentDidMount(){
    this.loadBiographies();
  }
  loadBiographies = async () => {
    const response = await api.get(`/biographies`)
    
    const {docs} = response.data
    
    this. setState({ biographies: docs})
  }

  render() {
    const { biographies } = this.state;
    return (
      <div className="biography-list">
        {biographies.map(biography => (
          <article key={biography._id}>
            <strong>{biography.nome} </strong>
        <p className='biobiography-description'>{biography.description}</p>
           <Link to={`/biographies/${biography._id}`}>Acessar</Link>
            </article>
        ))}
       
      </div>
    )
  }
}

export default Main