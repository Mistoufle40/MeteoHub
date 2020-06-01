import React from 'react';
import { useTheme } from '@material-ui/core/styles';
//import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import {BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer} from 'recharts';
import Title from './Title';

function createData(time, speed) {
    return { time, speed };
}

const data = [
    createData('00:00', 50),
    createData('03:00', 45),
    createData('06:00', 60),
    createData('09:00', 60),
    createData('12:00', 70),
    createData('15:00', 65),
    createData('18:00', 50),
    createData('21:00', 30),
    createData('24:00', undefined),
];

export default function TemperatureChart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Today Wind speed</Title>
            <ResponsiveContainer>
                <BarChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Speed (km/h)
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="speed" fill="#8884d8" />
                </BarChart>
                {/* <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Speed (km/h)
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
                */}
            </ResponsiveContainer>
        </React.Fragment>
    );
}