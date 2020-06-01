import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Legend} from 'recharts';
import Title from './Title';

function createData(time, real, feel) {
    return { time, real, feel};
}

const data = [
    createData('00:00', 5, 3),
    createData('03:00', 6, 3),
    createData('06:00', 7, 5),
    createData('09:00', 12, 10),
    createData('12:00', 15, 16),
    createData('15:00', 20, 21),
    createData('18:00', 16, 18),
    createData('21:00', 15, 14),
    createData('24:00', undefined),
];

export default function TemperatureChart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Today temperature</Title>
            <ResponsiveContainer>
                <LineChart
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
                            Degrees (°c)
                        </Label>
                    </YAxis>
                    <Legend />
                    <Line type="monotone"
                          dataKey="real"
                          name="real temperature"
                          stroke={theme.palette.primary.main}
                          dot={true} />
                    <Line type="monotone"
                          dataKey="feel"
                          name="felt temperature"
                          stroke="#82ca9d"
                          dot={true} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}