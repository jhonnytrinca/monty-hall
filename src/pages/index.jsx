import Link from 'next/link'
import styles from '../styles/form.module.css'
import { useState } from 'react'
import { Cartao, Input } from '../components'

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [presente, setPresente] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Cartao bgColor="#c0392c"><h1>Monty Hall</h1></Cartao>
        <Cartao>
          <Input value={presente} onChange={(porta) => setPresente(porta)} text='Porta com presente?'/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <Input value={qtdePortas} onChange={(qtde) => setQtdePortas(qtde)} text='Qtde Portas?'/>
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${presente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )

  
}
