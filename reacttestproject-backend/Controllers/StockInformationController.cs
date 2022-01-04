using Microsoft.AspNetCore.Mvc;
using reacttestproject_backend.Models;

namespace reacttestproject_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StockInformationController : ControllerBase
    {
       
        private readonly ILogger<StockInformationController> _logger;

        public StockInformationController(ILogger<StockInformationController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{ticker}")]
        public async Task<ActionResult<StockInformation>> GetStockInformation(string ticker)
        {
            var dummyStock = new StockInformation();

            dummyStock.Ticker = "jrb";
            dummyStock.Name = "James Corp";
            dummyStock.StockPrice = 420.69;
            dummyStock.MarketCap = 250000000;


            var dummyFinanicals = new StockFinanicals();

            dummyFinanicals.PriceToEarnings = 15;

            dummyFinanicals.Revenue = new List<FinanicalValue> {
            new FinanicalValue { Amount = 10000000, Year = "2020"},
            new FinanicalValue { Amount = 15000000, Year = "2021"},
            new FinanicalValue { Amount = 20000000, Year = "TTM"},
            };

            dummyFinanicals.Profit = new List<FinanicalValue> {
            new FinanicalValue { Amount = 5000000, Year = "2020"},
            new FinanicalValue { Amount = 7500000, Year = "2021"},
            new FinanicalValue { Amount = 10000000, Year = "TTM"},
            };

            dummyStock.StockFinanicals = dummyFinanicals;

            if (dummyStock == null)
            {
                return NotFound();
            }

            if (dummyStock.Ticker != ticker)
            {
                return NotFound();
            }

            return dummyStock;
        }
    }
}