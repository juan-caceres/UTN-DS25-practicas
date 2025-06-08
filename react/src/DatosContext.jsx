import {createContext,useState} from 'react'
import portada from './assets/port.jpg';
export const DatosContexto = createContext();

export function DatosProvider ({children}){
    const [libros, setLibros]=useState([
        {id:1,portada:portada,titulo:"1984", autor: "George Orwell",descripcion:"..."},
        {id:2,portada:portada,titulo:"Un mundo feliz", autor: "Aldus Huxley"},
    
        // Crimen (id 3-8)
        { id: 3,portada:portada, titulo: "El halcón maltés", autor: "Dashiell Hammett", genero: "Crimen" ,descripcion:"..."},
        { id: 4,portada:portada, titulo: "El asesinato de Roger Ackroyd", autor: "Agatha Christie", genero: "Crimen",descripcion:"..." },
        { id: 5,portada:portada, titulo: "Los hombres que no amaban a las mujeres", autor: "Stieg Larsson", genero: "Crimen",descripcion:"..." },
        { id: 6,portada:portada, titulo: "Perdida", autor: "Gillian Flynn", genero: "Crimen",descripcion:"..." },
        { id: 7,portada:portada, titulo: "El silencio de los corderos", autor: "Thomas Harris", genero: "Crimen",descripcion:"..." },
        { id: 8,portada:portada, titulo: "La verdad sobre el caso Harry Quebert", autor: "Joël Dicker", genero: "Crimen",descripcion:"..." },

        // Terror (id 9-14)
        { id: 9,portada:portada, titulo: "It", autor: "Stephen King", genero: "Terror",portada:"",descripcion:"..." },
        { id: 10,portada:portada, titulo: "Drácula", autor: "Bram Stoker", genero: "Terror",portada:"" ,descripcion:"..."},
        { id: 11,portada:portada, titulo: "Frankenstein", autor: "Mary Shelley", genero: "Terror",portada:"",descripcion:"..."},
        { id: 12,portada:portada, titulo: "El resplandor", autor: "Stephen King", genero: "Terror",portada:"" ,descripcion:"..."},
        { id: 13,portada:portada, titulo: "Cuentos macabros", autor: "Edgar Allan Poe", genero: "Terror",portada:"" ,descripcion:"..."},
        { id: 14,portada:portada, titulo: "La casa infernal", autor: "Richard Matheson", genero: "Terror",portada:"" ,descripcion:"..."},

        // Realismo mágico (id 15-20)
        { id: 15,portada:portada, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico",portada:"" ,descripcion:"..."},
        { id: 16,portada:portada, titulo: "La casa de los espíritus", autor: "Isabel Allende", genero: "Realismo mágico",portada:"",descripcion:"..." },
        { id: 17,portada:portada, titulo: "Pedro Páramo", autor: "Juan Rulfo", genero: "Realismo mágico",portada:"" ,descripcion:"..."},
        { id: 18,portada:portada, titulo: "El otoño del patriarca", autor: "Gabriel García Márquez", genero: "Realismo mágico",portada:"" ,descripcion:"..."},
        { id: 19,portada:portada, titulo: "Aura", autor: "Carlos Fuentes", genero: "Realismo mágico",portada:"",descripcion:"..." },
        { id: 20,portada:portada, titulo: "Como agua para chocolate", autor: "Laura Esquivel", genero: "Realismo mágico",portada:"" ,descripcion:"..."},

        // Literatura (id 21-26)
        { id: 21,portada:portada, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Literatura",portada:"",descripcion:"..." },
        { id: 22,portada:portada, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", genero: "Literatura",portada:"",descripcion:"..." },
        { id: 23,portada:portada, titulo: "Madame Bovary", autor: "Gustave Flaubert", genero: "Literatura",portada:"" ,descripcion:"..."},
        { id: 24,portada:portada, titulo: "En busca del tiempo perdido", autor: "Marcel Proust", genero: "Literatura",portada:"",descripcion:"..." },
        { id: 25,portada:portada, titulo: "Ulises", autor: "James Joyce", genero: "Literatura",portada:"",descripcion:"..." },
        { id: 26,portada:portada, titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", genero: "Literatura",portada:"",descripcion:"..." },

        // Filosofía (id 27-32) — aunque mencionaste hasta el id 27, agrego hasta 32 por completitud.
        { id: 27,portada:portada, titulo: "Más allá del bien y del mal", autor: "Friedrich Nietzsche", genero: "Filosofía",portada:"",descripcion:"..." },
        { id: 28,portada:portada, titulo: "La república", autor: "Platón", genero: "Filosofía",portada:"",descripcion:"..." },
        { id: 29,portada:portada, titulo: "Meditaciones", autor: "Marco Aurelio", genero: "Filosofía",portada:"",descripcion:"..."},
        { id: 30,portada:portada, titulo: "El ser y el tiempo", autor: "Martin Heidegger", genero: "Filosofía",portada:"",descripcion:"..." },
        { id: 31,portada:portada, titulo: "Crítica de la razón pura", autor: "Immanuel Kant", genero: "Filosofía",portada:"",descripcion:"..." },
        { id: 32,portada:portada, titulo: "El contrato social", autor: "Jean-Jacques Rousseau", genero: "Filosofía",portada:"" ,descripcion:"..."},

    
    ]);

    return (
        <DatosContexto.Provider value={{libros,setLibros}}>
            {children}
        </DatosContexto.Provider>
    );
}