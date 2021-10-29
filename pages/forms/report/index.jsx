// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';
import Navbar from '../../../components/navbar/navbar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import Typography from '@mui/material/Typography';
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
export default function SignIn() {
    return (
        <>
        <Navbar />
        <Typography variant="h3" gutterBottom component="div">
            Visitas
        </Typography>
        <div style={{height: 400}}>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    <div style={{height: 400}}>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    <div style={{height: 400}}>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>    
    </>
    );
};