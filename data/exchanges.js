function exchanges() {
	return [
		{
			"name": "@Trade Hours 4H",
			"timezone": "Asia/Bangkok",
			"trading_hours": [
				{
					"days": "Sun-Sat",
					"type": "postmarket",
					"start": "12:00",
					"end": "13:00"
				},
			]
		},
		{
			"name": "METALS: XAUUSD XAGUSD XPDUSD (Gold Silver Palladium)",
			"timezone": "Greenwich",
			"link": "https://www.oanda.com/au-en/trading/hours-of-operation/",
			"trading_hours": [
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "22:00",
					"end": "24:00"
				},
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "00:00",
					"end": "21:00"
				}
			]
		},
		{
			"name": "METALS: XPTUSD (Platinum)",
			"timezone": "Greenwich",
			"link": "https://www.oanda.com/au-en/trading/hours-of-operation/",
			"trading_hours": [
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "22:00",
					"end": "24:00"
				},
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "00:00",
					"end": "21:00"
				}
			]
		},
		{
			"name": "COMMODITIES: BCOUSD (Brent crude)",
			"timezone": "America/New_York",
			"link": "https://www.oanda.com/au-en/trading/hours-of-operation/",
			"trading_hours": [
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "20:00",
					"end": "24:00"
				},
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "00:00",
					"end": "16:59"
				},
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "17:59",
					"end": "20:00"
				},
			]
		},
		{
			"name": "COMMODITIES: CORN WHEAT SOYBEAN (Corn, Wheat, Soybeans)",
			"timezone": "America/Chicago",
			"link": "https://www.oanda.com/au-en/trading/hours-of-operation/",
			"trading_hours": [
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "19:00",
					"end": "24:00"
				},
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "00:00",
					"end": "07:44"
				},
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "08:30",
					"end": "13:19"
				},
			]
		},
		{
			"name": "COMMODITIES: SUGARUSD (Sugar)",
			"timezone": "America/New_York",
			"link": "https://www.oanda.com/au-en/trading/hours-of-operation/",
			"trading_hours": [
				{
					"days": "Mon-Fri",
					"type": "regular",
					"start": "04:30",
					"end": "13:59"
				}
			]
		},
		{
			"name": "COMMODITIES: NATGASUSD WTICOUSD (Natural gas, West Texas oil)",
			"timezone": "America/New_York",
			"link": "https://www.oanda.com/au-en/trading/hours-of-operation/",
			"trading_hours": [
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "18:00",
					"end": "24:00"
				},
				{
					"days": "Sun-Fri",
					"type": "regular",
					"start": "00:00",
					"end": "16:59"
				}
			]
		}
	]
}
