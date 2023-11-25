import css from "./Transaction.module.css"

export const TransactionHistory = ({ items }) => {
    return (

      <table className={css.transactionHistory}>
  <thead>
    <tr className={css.thead}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody className={css.tbody}>
                {items.map(({ id, type, amount, currency }) => {
                    
                    return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
                    )
                })
                }
                
            
  </tbody>
</table>
    )
}