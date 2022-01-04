namespace reacttestproject_backend.Models
{
    public class StockFinanicals
    {
        public Double PriceToEarnings { get; set; }

        public List<FinanicalValue> Revenue { get; set; }

        public List<FinanicalValue> Profit { get; set; }


    }
}
