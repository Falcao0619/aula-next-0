import Link from 'next/link'

export default function ListaUsuario () {
    return(
        <>
      
            <h1>Cadastro</h1>
            <p>Usuário 1</p>
            <p>Usuário 2</p>
            <p>Usuário 3</p>

            <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
 }