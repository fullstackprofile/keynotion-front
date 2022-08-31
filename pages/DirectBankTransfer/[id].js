import React from 'react'

import MainLayoutt from '../../layouts/MainLayoutt'
import { useRouter } from 'next/router'
import { DirectBankTransferHeadeing } from '../../components/DirectBankTransferHeadeing/DirectBankTransferHeadeing'
import { DirectBankTransferInfo } from '../../components/DirectBankTransferInfo/DirectBankTransferInfo'
import { BankInfo } from '../../components/BankInfo/BankInfo'
import { OrderDetails } from '../../components/OrderDetails/OrderDetails'

export default function DirectBankTransfer({ data }) {
  const { query } = useRouter()
  const id_ = query.id

  return (
    <MainLayoutt>
      <div>
        <DirectBankTransferHeadeing />
        <DirectBankTransferInfo id={id_} />
        <BankInfo
          bank="Československá Obchodní Banka, a.s"
          account_number="2 9064 1315"
          sort_code="0300"
          iban="CZ63 0300 0000 0002 9064 1315"
          bic="CEKOCZPP"
        />
        <BankInfo
          bank="Československá Obchodní Banka, a.s"
          account_number="290641577"
          sort_code="0300"
          iban="CZ70 0300 0000 0002 9064 1577"
          bic="CEKOCZPP"
        />
        <OrderDetails />
      </div>
    </MainLayoutt>
  )
}
