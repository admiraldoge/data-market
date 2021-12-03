// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import Navbar from '../../../../components/navbar/navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {readCollectorReport, readFormReport} from "../../../../api/reports";
import {GetServerSideProps} from "next";
import {getCollectorData} from "../../../../api/form";
const data = [
	{
		"id": "japan",
		"color": "hsl(239, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 68
			},
			{
				"x": "helicopter",
				"y": 169
			},
			{
				"x": "boat",
				"y": 36
			},
			{
				"x": "train",
				"y": 65
			},
			{
				"x": "subway",
				"y": 130
			},
			{
				"x": "bus",
				"y": 126
			},
			{
				"x": "car",
				"y": 68
			},
			{
				"x": "moto",
				"y": 9
			},
			{
				"x": "bicycle",
				"y": 101
			},
			{
				"x": "horse",
				"y": 281
			},
			{
				"x": "skateboard",
				"y": 48
			},
			{
				"x": "others",
				"y": 120
			}
		]
	},
	{
		"id": "france",
		"color": "hsl(189, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 274
			},
			{
				"x": "helicopter",
				"y": 13
			},
			{
				"x": "boat",
				"y": 291
			},
			{
				"x": "train",
				"y": 218
			},
			{
				"x": "subway",
				"y": 45
			},
			{
				"x": "bus",
				"y": 194
			},
			{
				"x": "car",
				"y": 290
			},
			{
				"x": "moto",
				"y": 198
			},
			{
				"x": "bicycle",
				"y": 61
			},
			{
				"x": "horse",
				"y": 5
			},
			{
				"x": "skateboard",
				"y": 159
			},
			{
				"x": "others",
				"y": 250
			}
		]
	},
	{
		"id": "us",
		"color": "hsl(195, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 29
			},
			{
				"x": "helicopter",
				"y": 33
			},
			{
				"x": "boat",
				"y": 221
			},
			{
				"x": "train",
				"y": 288
			},
			{
				"x": "subway",
				"y": 134
			},
			{
				"x": "bus",
				"y": 196
			},
			{
				"x": "car",
				"y": 79
			},
			{
				"x": "moto",
				"y": 29
			},
			{
				"x": "bicycle",
				"y": 3
			},
			{
				"x": "horse",
				"y": 203
			},
			{
				"x": "skateboard",
				"y": 127
			},
			{
				"x": "others",
				"y": 2
			}
		]
	},
	{
		"id": "germany",
		"color": "hsl(247, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 65
			},
			{
				"x": "helicopter",
				"y": 267
			},
			{
				"x": "boat",
				"y": 56
			},
			{
				"x": "train",
				"y": 187
			},
			{
				"x": "subway",
				"y": 48
			},
			{
				"x": "bus",
				"y": 60
			},
			{
				"x": "car",
				"y": 252
			},
			{
				"x": "moto",
				"y": 162
			},
			{
				"x": "bicycle",
				"y": 8
			},
			{
				"x": "horse",
				"y": 67
			},
			{
				"x": "skateboard",
				"y": 212
			},
			{
				"x": "others",
				"y": 76
			}
		]
	},
	{
		"id": "norway",
		"color": "hsl(198, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 70
			},
			{
				"x": "helicopter",
				"y": 265
			},
			{
				"x": "boat",
				"y": 300
			},
			{
				"x": "train",
				"y": 167
			},
			{
				"x": "subway",
				"y": 251
			},
			{
				"x": "bus",
				"y": 173
			},
			{
				"x": "car",
				"y": 52
			},
			{
				"x": "moto",
				"y": 98
			},
			{
				"x": "bicycle",
				"y": 12
			},
			{
				"x": "horse",
				"y": 223
			},
			{
				"x": "skateboard",
				"y": 278
			},
			{
				"x": "others",
				"y": 208
			}
		]
	}
]
const data2 = [
	{
		"country": "AD",
		"hot dog": 200,
		"hot dogColor": "hsl(314, 70%, 50%)",
		"burger": 124,
		"burgerColor": "hsl(110, 70%, 50%)",
		"sandwich": 15,
		"sandwichColor": "hsl(105, 70%, 50%)",
		"kebab": 104,
		"kebabColor": "hsl(318, 70%, 50%)",
		"fries": 103,
		"friesColor": "hsl(330, 70%, 50%)",
		"donut": 114,
		"donutColor": "hsl(36, 70%, 50%)"
	},
	{
		"country": "AE",
		"hot dog": 4,
		"hot dogColor": "hsl(12, 70%, 50%)",
		"burger": 143,
		"burgerColor": "hsl(300, 70%, 50%)",
		"sandwich": 98,
		"sandwichColor": "hsl(103, 70%, 50%)",
		"kebab": 48,
		"kebabColor": "hsl(30, 70%, 50%)",
		"fries": 73,
		"friesColor": "hsl(309, 70%, 50%)",
		"donut": 133,
		"donutColor": "hsl(174, 70%, 50%)"
	},
	{
		"country": "AF",
		"hot dog": 142,
		"hot dogColor": "hsl(94, 70%, 50%)",
		"burger": 156,
		"burgerColor": "hsl(15, 70%, 50%)",
		"sandwich": 195,
		"sandwichColor": "hsl(187, 70%, 50%)",
		"kebab": 181,
		"kebabColor": "hsl(331, 70%, 50%)",
		"fries": 105,
		"friesColor": "hsl(65, 70%, 50%)",
		"donut": 146,
		"donutColor": "hsl(156, 70%, 50%)"
	},
	{
		"country": "AG",
		"hot dog": 186,
		"hot dogColor": "hsl(346, 70%, 50%)",
		"burger": 112,
		"burgerColor": "hsl(99, 70%, 50%)",
		"sandwich": 148,
		"sandwichColor": "hsl(279, 70%, 50%)",
		"kebab": 182,
		"kebabColor": "hsl(8, 70%, 50%)",
		"fries": 44,
		"friesColor": "hsl(349, 70%, 50%)",
		"donut": 198,
		"donutColor": "hsl(178, 70%, 50%)"
	},
	{
		"country": "AI",
		"hot dog": 120,
		"hot dogColor": "hsl(237, 70%, 50%)",
		"burger": 193,
		"burgerColor": "hsl(105, 70%, 50%)",
		"sandwich": 41,
		"sandwichColor": "hsl(355, 70%, 50%)",
		"kebab": 36,
		"kebabColor": "hsl(295, 70%, 50%)",
		"fries": 48,
		"friesColor": "hsl(124, 70%, 50%)",
		"donut": 165,
		"donutColor": "hsl(193, 70%, 50%)"
	},
	{
		"country": "AL",
		"hot dog": 184,
		"hot dogColor": "hsl(255, 70%, 50%)",
		"burger": 132,
		"burgerColor": "hsl(129, 70%, 50%)",
		"sandwich": 2,
		"sandwichColor": "hsl(137, 70%, 50%)",
		"kebab": 36,
		"kebabColor": "hsl(345, 70%, 50%)",
		"fries": 50,
		"friesColor": "hsl(203, 70%, 50%)",
		"donut": 185,
		"donutColor": "hsl(97, 70%, 50%)"
	},
	{
		"country": "AM",
		"hot dog": 63,
		"hot dogColor": "hsl(242, 70%, 50%)",
		"burger": 60,
		"burgerColor": "hsl(170, 70%, 50%)",
		"sandwich": 86,
		"sandwichColor": "hsl(212, 70%, 50%)",
		"kebab": 116,
		"kebabColor": "hsl(234, 70%, 50%)",
		"fries": 171,
		"friesColor": "hsl(82, 70%, 50%)",
		"donut": 178,
		"donutColor": "hsl(116, 70%, 50%)"
	}
]
export default function SignIn({query}) {
	const [barData, setBarData] = useState([]);
	useEffect(() => {
		readFormReport(query.id).then( (res) => {
			console.log('Form report data', res);
			setBarData(res.barData);
		}).catch( (error) => {
			alert(error);
		});
	}, []);
	return (
		<>
			<Navbar />
			<Grid container justifyContent={"center"}>
				<Grid item xs={11} style={{marginTop: "8px"}}>
					<Typography variant="h5" gutterBottom component="div">
						Reporte del formulario: {query.id}
					</Typography>
				</Grid>
				<Grid item xs={11} style={{height: '400px'}}>
					<ResponsiveBar
						data={barData}
						keys={[ 'submissions' ]}
						indexBy="collector"
						margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
						padding={0.3}
						valueScale={{ type: 'linear' }}
						indexScale={{ type: 'band', round: true }}
						colors={{ scheme: 'nivo' }}
						defs={[
							{
								id: 'dots',
								type: 'patternDots',
								background: 'inherit',
								color: '#38bcb2',
								size: 4,
								padding: 1,
								stagger: true
							},
							{
								id: 'lines',
								type: 'patternLines',
								background: 'inherit',
								color: '#eed312',
								rotation: -45,
								lineWidth: 6,
								spacing: 10
							}
						]}
						fill={[
							{
								match: {
									id: 'fries'
								},
								id: 'dots'
							},
							{
								match: {
									id: 'sandwich'
								},
								id: 'lines'
							}
						]}
						borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
						axisTop={null}
						axisRight={null}
						axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Recolectores',
							legendPosition: 'middle',
							legendOffset: 32
						}}
						axisLeft={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Envios',
							legendPosition: 'middle',
							legendOffset: -40
						}}
						labelSkipWidth={12}
						labelSkipHeight={12}
						labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
						legends={[
							{
								dataFrom: 'keys',
								anchor: 'bottom-right',
								direction: 'column',
								justify: false,
								translateX: 120,
								translateY: 0,
								itemsSpacing: 2,
								itemWidth: 100,
								itemHeight: 20,
								itemDirection: 'left-to-right',
								itemOpacity: 0.85,
								symbolSize: 20,
								effects: [
									{
										on: 'hover',
										style: {
											itemOpacity: 1
										}
									}
								]
							}
						]}
						role="application"
						ariaLabel="Envios por collector"
						barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in collector: "+e.indexValue}}
					/>
				</Grid>
			</Grid>
		</>
	);
};
export const getServerSideProps = async (context) => {
	let query = context.query;
	const collectorData = await getCollectorData(query.id);
	console.log('CollectorData: ',collectorData);
	return { props: {query}}
}
