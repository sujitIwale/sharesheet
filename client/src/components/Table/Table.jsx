import React from 'react';
import './Table.css';

const Table = () => {
	const data = [
		{
			Security: '3IINFOTECH',
			Quantity: '430',
			'Average Cost': '9.75',
			LTP: '10.6',
			'Invested Value': '4192.5',
			'Current Value': '4558',
			'P & L': '365.5',
			'Net Change': '8.72',
			'Daily Change': '-0.3',
			// 'Daily Change2': '-0.3',
			// 'Daily Change3': '-0.3',
			// 'Daily Change4': '-0.3',
			// 'Daily Change5': '-0.3',
			// 'Daily Change6': '-0.3',
			// 'Daily Change7': '-0.3',
			// 'Daily Change8': '-0.3',
			// 'Daily Change9': '-0.3',
		},
		{
			Security: 'ALBERTDAVD',
			Quantity: '10',
			'Average Cost': '462.93',
			LTP: '479.2',
			'Invested Value': '4629.3',
			'Current Value': '4792',
			'P & L': '162.7',
			'Net Change': '3.51',
			'Daily Change': '-2.3',
		},
		{
			Security: 'BANKBARODA',
			Quantity: '68',
			'Average Cost': '79.4',
			LTP: '82.45',
			'Invested Value': '5399.2',
			'Current Value': '5606.6',
			'P & L': '207.4',
			'Net Change': '3.84',
			'Daily Change': '0.6',
		},
		{
			Security: 'CADILAHC',
			Quantity: '5',
			'Average Cost': '630.2',
			LTP: '624.5',
			'Invested Value': '3151',
			'Current Value': '3122.5',
			'P & L': '-28.5',
			'Net Change': '-0.9',
			'Daily Change': '-5.55',
		},
		{
			Security: 'CHAMBLFERT',
			Quantity: '20',
			'Average Cost': '312.65',
			LTP: '300.35',
			'Invested Value': '6253',
			'Current Value': '6007',
			'P & L': '-246',
			'Net Change': '-3.93',
			'Daily Change': '-6.85',
		},
		{
			Security: 'CIGNITITEC',
			Quantity: '9',
			'Average Cost': '494.3',
			LTP: '553.7',
			'Invested Value': '4448.7',
			'Current Value': '4983.3',
			'P & L': '534.6',
			'Net Change': '12.02',
			'Daily Change': '-0.7',
		},
		{
			Security: 'COALINDIA',
			Quantity: '64',
			'Average Cost': '139.45',
			LTP: '148.65',
			'Invested Value': '8924.8',
			'Current Value': '9513.6',
			'P & L': '588.8',
			'Net Change': '6.6',
			'Daily Change': '-0.05',
		},
		{
			Security: 'CUPID',
			Quantity: '42',
			'Average Cost': '219.221429',
			LTP: '219.7',
			'Invested Value': '9207.3',
			'Current Value': '9227.4',
			'P & L': '20.1',
			'Net Change': '0.22',
			'Daily Change': '-4.25',
		},
		{
			Security: 'GHCL',
			Quantity: '16',
			'Average Cost': '262.715625',
			LTP: '277',
			'Invested Value': '4203.45',
			'Current Value': '4432',
			'P & L': '228.55',
			'Net Change': '5.44',
			'Daily Change': '-4.85',
		},
		{
			Security: 'IDEA',
			Quantity: '40',
			'Average Cost': '9.65',
			LTP: '9.95',
			'Invested Value': '386',
			'Current Value': '398',
			'P & L': '12',
			'Net Change': '3.11',
			'Daily Change': '-0.05',
		},
		{
			Security: 'IDFCFIRSTB',
			Quantity: '18',
			'Average Cost': '58.65',
			LTP: '57.75',
			'Invested Value': '1055.7',
			'Current Value': '1039.5',
			'P & L': '-16.2',
			'Net Change': '-1.53',
			'Daily Change': '-0.35',
		},
		{
			Security: 'JUBLPHARMA',
			Quantity: '6',
			'Average Cost': '854.45',
			LTP: '743',
			'Invested Value': '5126.7',
			'Current Value': '4458',
			'P & L': '-668.7',
			'Net Change': '-13.04',
			'Daily Change': '-0.7',
		},
		{
			Security: 'LAURUSLABS',
			Quantity: '1',
			'Average Cost': '290.15',
			LTP: '614',
			'Invested Value': '290.15',
			'Current Value': '614',
			'P & L': '323.85',
			'Net Change': '111.61',
			'Daily Change': '0.45',
		},
		{
			Security: 'LINCOLN',
			Quantity: '20',
			'Average Cost': '294.61',
			LTP: '312.7',
			'Invested Value': '5892.2',
			'Current Value': '6254',
			'P & L': '361.8',
			'Net Change': '6.14',
			'Daily Change': '-5.7',
		},
		{
			Security: 'ORIENTCEM',
			Quantity: '39',
			'Average Cost': '127.15',
			LTP: '133.4',
			'Invested Value': '4958.85',
			'Current Value': '5202.6',
			'P & L': '243.75',
			'Net Change': '4.92',
			'Daily Change': '-0.05',
		},
		{
			Security: 'PETRONET',
			Quantity: '22',
			'Average Cost': '244.2',
			LTP: '231.2',
			'Invested Value': '5372.4',
			'Current Value': '5086.4',
			'P & L': '-286',
			'Net Change': '-5.32',
			'Daily Change': '1.05',
		},
		{
			Security: 'PFC',
			Quantity: '16',
			'Average Cost': '130.5',
			LTP: '123.35',
			'Invested Value': '2088',
			'Current Value': '1973.6',
			'P & L': '-114.4',
			'Net Change': '-5.48',
			'Daily Change': '-0.35',
		},
		{
			Security: 'RECLTD',
			Quantity: '20',
			'Average Cost': '141.95',
			LTP: '145',
			'Invested Value': '2839',
			'Current Value': '2900',
			'P & L': '61',
			'Net Change': '2.15',
			'Daily Change': '0',
		},
		{
			Security: 'SASKEN',
			Quantity: '4',
			'Average Cost': '1045.55',
			LTP: '1022.35',
			'Invested Value': '4182.2',
			'Current Value': '4089.4',
			'P & L': '-92.8',
			'Net Change': '-2.22',
			'Daily Change': '11.55',
		},
		{
			Security: 'URJA',
			Quantity: '75',
			'Average Cost': '5.42',
			LTP: '7.9',
			'Invested Value': '406.5',
			'Current Value': '592.5',
			'P & L': '186',
			'Net Change': '45.76',
			'Daily Change': '-0.1',
		},
		{
			Security: 'YESBANK',
			Quantity: '14',
			'Average Cost': '14.03',
			LTP: '13.7',
			'Invested Value': '196.42',
			'Current Value': '191.8',
			'P & L': '-4.62',
			'Net Change': '-2.35',
			'Daily Change': '-0.1',
		},
	];
	return (
		<div className='table-main'>
			<table class='rwd-table'>
				<tr className='table-header'>
					<th>Sr.No.</th>
					{Object.keys(data[0]).map((header) => (
						<th>{header}</th>
					))}
				</tr>
				{data.map((row, i) => {
					return (
						<tr>
							<td data-th='Sr.No.'>{++i}</td>
							{Object.keys(row).map((header) => (
								<td data-th={header}>{row[header]}</td>
							))}
						</tr>
					);
				})}
				{/* <tr>
					<td data-th='Movie Title'>Star Wars</td>
					<td data-th='Genre'>Adventure, Sci-fi</td>
					<td data-th='Year'>1977</td>
					<td data-th='Gross'>$460,935,665</td>
				</tr>
				<tr>
					<td data-th='Movie Title'>Howard The Duck</td>
					<td data-th='Genre'>"Comedy"</td>
					<td data-th='Year'>1986</td>
					<td data-th='Gross'>$16,295,774</td>
				</tr>
				<tr>
					<td data-th='Movie Title'>American Graffiti</td>
					<td data-th='Genre'>Comedy, Drama</td>
					<td data-th='Year'>1973</td>
					<td data-th='Gross'>$115,000,000</td>
				</tr> */}
			</table>
		</div>
	);
};

export default Table;
