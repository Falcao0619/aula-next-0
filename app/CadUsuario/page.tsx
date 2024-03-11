import Link from 'next/link'

export default function cadUsuario () {
    return(
        <>
      
            <h1>Cadastro</h1>
            <p>Insira as informações do usúario</p>

            <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
 }