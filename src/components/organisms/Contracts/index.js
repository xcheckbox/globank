
import React from 'react';
import { LegalCard } from 'components/molecules/LegalCard'

export const Contracts = () => {

  return (
    <div>
      <h4>Generales</h4>
      <LegalCard
        title={'Contrato de Banca Electronica'}
        url={'64474'}
      />
      <LegalCard
        title={'Terminos y Condiciones'}
        url={'64474'}
      />
      <LegalCard
        title={'Aviso Legal'}
        url={'64474'}
      />

      <h4>Debito</h4>
      <LegalCard
        title={'Cuenta Globank'}
        url={'64474'}
      />

      <h4>Credito</h4>
      <LegalCard
        title={'Tarjeta de Credito Globank'}
        url={'64474'}
      />
    </div>
  )
}
