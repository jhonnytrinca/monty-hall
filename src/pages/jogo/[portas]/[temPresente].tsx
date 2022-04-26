import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import styles from '../../../styles/jogo.module.css';
import { Porta } from '../../../components';

const Jogo = () => {
  const router = useRouter();
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas;
    const presente = +router.query.temPresente;
    const qtdeValida = portas >= 3 && portas <= 100;
    const presValido = presente >= 1 && presente <= portas;

    setValido(qtdeValida && presValido);
  }, [portas, router.query.portas, router.query.temPresente]);

  useEffect(() => {
    const portas = +router.query.portas;
    const presente = +router.query.temPresente;
    setPortas(criarPortas(portas, presente));
  }, [router.query]);

  const renderPortas = () => {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  };

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderPortas() : <h2>Valores inválidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href='/' passHref>
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Jogo;
