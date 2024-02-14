
import AnyChart from 'anychart-react'

function Chart2() {
  return (
     <AnyChart  credits={false}
    type="pie"
    data={[1, 2, 3, 4]}
    title="Simple pie chart"
  />
  )
}

export default Chart2