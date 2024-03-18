import Link from 'next/link'

export default function PerfilUsuario ({ params }: { params: { id: string } }) {
    return(
        <>
      
            <h1>Cadastro</h1>
            <p>Nome do usúario</p>

            <p><Link href={'/usuarios'}>Voltar</Link></p>
        </>
    );
 }