import React, { useState, useEffect } from 'react'; //Armazenar estado e conectar com a interface.
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState(''); // Valor inicial
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]) // Recuperando conteúdo anterior e adiconando novo.
  }

  useEffect(() => {
   async function fetchData() {
   const response = await fetch('https://api.github.com/users/felipenobrg')
   const data = await response.json();

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
  
    fetchData();
  }, []);
  // É renderizado automaticamente.

  // Estado -> Alterar a UI.
  // Conteúdo do estado em si, Função que atualiza o estado.

  return (
    <div className="container">
    <header>
    <h1>Lista de Presença</h1>
      <div>
      <strong>{ user.name }</strong>
      <img src={user.avatar} alt="Foto de Perfil" />
      </div>
   </header>
    <input 
      type="text"
      placeholder="Digite o nome..." 
      onChange={e => setStudentName(e.target.value)}
    />

    <button type="button" onClick={handleAddStudent}>
      Adicionar
     </button>
    
   {
    students.map(student => 
    <Card 
      key={student.time}
      name={student.name} 
      time={student.time} 
      />
    )}
    </div>
)
}



