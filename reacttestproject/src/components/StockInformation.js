import React,{ Component } from 'react';
  
class StockInformation extends Component {
  
constructor(props) {
    super(props);
    this.state = { stockInformation: [], loading: true };
}

componentDidUpdate(nextProps) {
    if (this.props.text !== nextProps.text) {
        this.populateStockInformation();
      } 
    } 

componentDidMount() {
    this.populateStockInformation();
}

static renderForecastsTable(stockInformation) {
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Name</th>
                    <th>Stock Price</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                    <tr key={stockInformation.ticker}>
                    </tr>
                    <td>{stockInformation.ticker}</td>
                    <td>{stockInformation.name}</td>
                    <td>{stockInformation.stockPrice}</td>
                    <td>{stockInformation.marketCap}</td>


            </tbody>
        </table>
    );
}



render() {
    let contents = this.state.loading
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : StockInformation.renderForecastsTable(this.state.stockInformation);

    return (
        <div>
            {contents}
        </div>
    );
}

async populateStockInformation() {
    const response = await fetch('stockinformation/'+ this.props.text);
    const data = await response.json();
    this.setState({ stockInformation: data, loading: false });
}
}
      
export default StockInformation;