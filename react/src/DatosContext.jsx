import {createContext,useState} from 'react'
import portadaIMG from './assets/port.jpg'; // Asegúrate de que la ruta sea correcta
export const DatosContexto = createContext();

export function DatosProvider ({children}){
    const [libros, setLibros]=useState([
        {id:1,portada:portadaIMG,titulo:"1984", autor: "George Orwell",genero: "Literatura",descripcion:"..."},
        {id:2,portada:portadaIMG,titulo:"Un mundo feliz", autor: "Aldus Huxley",genero: "Literatura",descripcion:"..."},
    
        // Crimen (id 3-8)
        { id: 3,portada:portadaIMG, titulo: "El halcón maltés", autor: "Dashiell Hammett", genero: "Crimen" ,descripcion:"..."},
        { id: 4,portada:portadaIMG, titulo: "El asesinato de Roger Ackroyd", autor: "Agatha Christie", genero: "Crimen",descripcion:"..." },
        { id: 5,portada:portadaIMG, titulo: "Los hombres que no amaban a las mujeres", autor: "Stieg Larsson", genero: "Crimen",descripcion:"..." },
        { id: 6,portada:portadaIMG, titulo: "Perdida", autor: "Gillian Flynn", genero: "Crimen",descripcion:"..." },
        { id: 7,portada:portadaIMG, titulo: "El silencio de los corderos", autor: "Thomas Harris", genero: "Crimen",descripcion:"..." },
        { id: 8,portada:portadaIMG, titulo: "La verdad sobre el caso Harry Quebert", autor: "Joël Dicker", genero: "Crimen",descripcion:"..." },

        // Terror (id 9-14)
        { id: 9,portada:portadaIMG, titulo: "It", autor: "Stephen King", genero: "Terror",descripcion:"..." },
        { id: 10,portada:portadaIMG, titulo: "Drácula", autor: "Bram Stoker", genero: "Terror",descripcion:"..."},
        { id: 11,portada:portadaIMG, titulo: "Frankenstein", autor: "Mary Shelley", genero: "Terror",descripcion:"..."},
        { id: 12,portada:portadaIMG, titulo: "El resplandor", autor: "Stephen King", genero: "Terror",descripcion:"..."},
        { id: 13,portada:portadaIMG, titulo: "Cuentos macabros", autor: "Edgar Allan Poe", genero: "Terror",descripcion:"..."},
        { id: 14,portada:portadaIMG, titulo: "La casa infernal", autor: "Richard Matheson", genero: "Terror",descripcion:"..."},

        // Realismo mágico (id 15-20)
        { id: 15,portada:portadaIMG, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico",descripcion:"..."},
        { id: 16,portada:portadaIMG, titulo: "La casa de los espíritus", autor: "Isabel Allende", genero: "Realismo mágico",descripcion:"..." },
        { id: 17,portada:portadaIMG, titulo: "Pedro Páramo", autor: "Juan Rulfo", genero: "Realismo mágico",descripcion:"..."},
        { id: 18,portada:portadaIMG, titulo: "El otoño del patriarca", autor: "Gabriel García Márquez", genero: "Realismo mágico",descripcion:"..."},
        { id: 19,portada:portadaIMG, titulo: "Aura", autor: "Carlos Fuentes", genero: "Realismo mágico",descripcion:"..." },
        { id: 20,portada:portadaIMG, titulo: "Como agua para chocolate", autor: "Laura Esquivel", genero: "Realismo mágico",descripcion:"..."},

        // Literatura (id 21-26)
        { id: 21,portada:portadaIMG, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Literatura",descripcion:"..." },
        { id: 22,portada:portadaIMG, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", genero: "Literatura",descripcion:"..." },
        { id: 23,portada:portadaIMG, titulo: "Madame Bovary", autor: "Gustave Flaubert", genero: "Literatura",descripcion:"..."},
        { id: 24,portada:portadaIMG, titulo: "En busca del tiempo perdido", autor: "Marcel Proust", genero: "Literatura",descripcion:"..." },
        { id: 25,portada:portadaIMG, titulo: "Ulises", autor: "James Joyce", genero: "Literatura",descripcion:"..." },
        { id: 26,portada:portadaIMG, titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", genero: "Literatura",descripcion:"..." },

        // Filosofía (id 27-32) — aunque mencionaste hasta el id 27, agrego hasta 32 por completitud.
        { id: 27,portada:portadaIMG, titulo: "Más allá del bien y del mal", autor: "Friedrich Nietzsche", genero: "Filosofía",descripcion:"..." },
        { id: 28,portada:portadaIMG, titulo: "La república", autor: "Platón", genero: "Filosofía",descripcion:"..." },
        { id: 29,portada:portadaIMG, titulo: "Meditaciones", autor: "Marco Aurelio", genero: "Filosofía",descripcion:"..."},
        { id: 30,portada:portadaIMG, titulo: "El ser y el tiempo", autor: "Martin Heidegger", genero: "Filosofía",descripcion:"..." },
        { id: 31,portada:portadaIMG, titulo: "Crítica de la razón pura", autor: "Immanuel Kant", genero: "Filosofía",descripcion:"..." },
        { id: 32,portada:portadaIMG, titulo: "El contrato social", autor: "Jean-Jacques Rousseau", genero: "Filosofía",descripcion:"..."},

    
    ]);

    return (
        <DatosContexto.Provider value={{libros,setLibros}}>
            {children}
        </DatosContexto.Provider>
    );
}