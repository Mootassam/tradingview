new TradingView.widget({
  symbol: "BINANCE:BTCUSDT",
  interval: "240",
  theme: "dark",
  style: "1",
  locale: "en",
  hide_side_toolbar: true,
  allow_symbol_change: false,
  studies: ["STD;SMA"],
  container_id: "chart",
  autosize:true
});
