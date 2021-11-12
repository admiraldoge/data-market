

import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import {getCollectorData, getPublicFormData} from "../../../../api/form";
import { ResponsiveLine } from '@nivo/line';
import { readCollectorReport } from '../../../../api/reports';
import Navbar from '../../../../components/navbar/navbar';
type pageProps = {
	query: { id: string },
}

const Index: React.FunctionComponent<pageProps> = ({query}) => {
	const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        readCollectorReport(query.id).then( (res) => {
          var aux;
          const color = "hsl(239, 70%, 50%)"
          aux = res.data.timeline;
          aux[0].color = color;
          setSubmissions(aux);
        }).catch( (error) => {
          alert(error);
        });
      }, []);
    return (
        <>
        <Navbar />
        <header className="flex bg-gray-900 m-5 p-5 shadow-lg rounded-lg">
          <h1 className="text-2xl text-teal-400">Reporte</h1>
        </header>
        <div style={{height: 400}}>
        <ResponsiveLine
        data={submissions}
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
            legend: 'Fecha',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Cantidad',
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
    )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
	let query = context.query;
	const collectorData = await getCollectorData(query.id);
	console.log('CollectorData: ',collectorData);
	return { props: {query}}
}

export default Index