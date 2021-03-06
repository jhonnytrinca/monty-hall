import PortaModel from '../model/porta';
import styles from '../styles/porta.module.css';
import Presente from './Presente';

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

const Porta = (props: PortaProps) => {
  const { value } = props;
  const selecionada =
    value.selecionada && !value.aberta ? styles.selecionada : '';

  const alternarSelecao = (e) => props.onChange(value.alternarSelecao());

  const abrir = (e) => {
    e.stopPropagation();
    props.onChange(value.abrir());
  };

  const renderPorta = () => {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{value.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {value.fechada ? (
          renderPorta()
        ) : value.temPresente ? (
          <Presente />
        ) : (
          false
        )}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
};

export default Porta;
