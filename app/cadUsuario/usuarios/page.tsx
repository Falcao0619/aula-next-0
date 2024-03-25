import Link from 'next/link' 
import usuarios from "../../../src/usuarios";

export default function ListaUsuario () {
    return(
        <>
      
            <h1>Usuarios</h1>
            
            {/* <p><Link href={'/Usuário/1'}>Usuario 1</Link></p>
            <p><Link href={'/Usuário/2'}>Usuario 2</Link></p>
            <p><Link href={'/Usuário/3'}>Usuario 3</Link></p> */}

            {/*
                usuarios.map((usuario) => <p>Nome: {usuarios.nome}</p>)
        */ }

            
            {
                usuarios.map((usuario) => <p><Link href={`/cadUsuario/usuarios/${usuario.id}`}></Link></p>)
            }
         
            <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
 }