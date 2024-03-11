import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <h2>Titulo 2</h2>
      <h3>Titulo 3</h3>
      Qualquer Coisa

    <ul>
     <li> <Link href={'/sobre'}>Sobre</Link> </li> 
    <li>  <Link href={'/cadusuario'}>Cadastro de Usuario</Link></li> 


      </ul>
    </>
  );
}