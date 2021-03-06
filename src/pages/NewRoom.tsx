import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../componentes/Button';

import { useAuth } from '../hooks/useAuth';


export function NewRoom() {

  const { user, signInWithGoogle } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas."></img>
        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeaks"></img>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>

      </main>
    </div>
  )
}