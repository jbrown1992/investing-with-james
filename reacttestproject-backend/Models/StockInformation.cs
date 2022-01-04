namespace reacttestproject_backend.Models
{
    public class StockInformation
    {
        public String Ticker { get; set;}
        public String Name { get; set; }

        public Double StockPrice { get; set;}
        public Double MarketCap { get; set;}
        public StockFinanicals StockFinanicals { get; set;}

    }
}
